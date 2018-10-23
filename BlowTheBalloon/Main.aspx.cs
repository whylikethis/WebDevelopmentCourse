using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Web.Services;

public partial class Home : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {


    }


    public string CheckIfCanPublish(object Chekid) //בדיקה האם ניתן לפרסם או לא
    {
        string id = Convert.ToString(Chekid);
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument(); //טעינה של העץ
        XmlNode myGame = xmlDoc.SelectSingleNode("quizTree/topic[@id='" + id + "']/@NumOfQuestions"); //מס השאלות במשחק
        
        bool canPublish = false; 
        string disCalss = ""; //משתנה ל class

        int NumOfQuestions = Convert.ToInt16(myGame.InnerXml);

        if (NumOfQuestions >= 10)
        {
            canPublish = true;
            disCalss = "enabledd"; //הוספת קלאס של מאופשר
        }

        if (canPublish == false) //במידה ולא ניתן לפרסם
        {
            XmlNode GameId = xmlDoc.SelectSingleNode("quizTree/topic[@id='" + id + "']"); 
            GameId.Attributes["isPublish"].InnerText = "false"; //הגדרה בעץ isPublish=false
            XmlDataSource1.Save();
            disCalss = "disabled"; //הוספת קלאס של לא מאופשר 
        }
        return disCalss;
    }

    protected void isPass_CheckedChanged(object sender, EventArgs e) //צ'ק בוקס לפרסם או לא
    {    
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        CheckBox myCheckBox = (CheckBox)sender;

        string theId = myCheckBox.Attributes["ItemID"]; //האי די של התיבה

        XmlNode NumOfQu = xmlDoc.SelectSingleNode("quizTree/topic[@id='" + theId + "']/@NumOfQuestions"); //מס השאלות
        int NumOfQuestions = Convert.ToInt16(NumOfQu.InnerXml);

        bool NewIsPass = myCheckBox.Checked; //קבלת הערך החדש של הצ'ק בוקס

        XmlNode GameId = xmlDoc.SelectSingleNode("quizTree/topic[@id='" + theId + "']");
        GameId.Attributes["isPublish"].InnerText = NewIsPass.ToString(); //העדכון בעץ

        //שמירה בעץ והצגה
        XmlDataSource1.Save();
        GridView1.DataBind();
    }

    protected void btnCreateGame_Click(object sender, EventArgs e) //יצירת משחק חדש
    {
        int txtboxLen = txtGameName.Text.Length;

        if (txtboxLen <= 20)
        {
            //טעינת העץ
            XmlDocument myDoc = new XmlDocument();
            myDoc.Load(Server.MapPath("XML/GameXML.xml"));

            //מונה רשימת המשחקים
            XmlNode XmlNumOfGames; //הערה** מביא את המס האחרון ותמיד מעלה ממנו. כמו אי די ב** SQL
            XmlNumOfGames = myDoc.SelectSingleNode("quizTree/NumOfGames");
            int GamesCount = Convert.ToUInt16(XmlNumOfGames.InnerXml);

            XmlNode XmllastCode;
            XmllastCode = myDoc.SelectSingleNode("quizTree/topic[@id=" + GamesCount + "]/@GameCode");
            int GameCode = Convert.ToUInt16(XmllastCode.InnerXml);
            string strGameCode = Convert.ToString(++GameCode);

            string strGamesCount = Convert.ToString(++GamesCount); //מוצא את האידי הקיים ומעלה ב1

            //יצירת אטריביוטס למשחק חדש 
            XmlElement newGame = myDoc.CreateElement("topic");
            newGame.SetAttribute("id", strGamesCount); // הוספת אי די למשחק
            newGame.SetAttribute("NumOfQuestions", "0"); // הוספת כמות השאלות למשחק
            newGame.SetAttribute("GameCode", strGameCode); // הוספת קוד למשחק
            newGame.SetAttribute("timePerQuest", "30"); // הוספת זמן ברירת מחדל למשחק
            newGame.SetAttribute("isPublish", "false"); // הוספת אפשרות פבלוש למשחק

            //שם המשחק
            XmlElement GameName = myDoc.CreateElement("subject");
            XmlText GameNameText = myDoc.CreateTextNode(txtGameName.Text);
            GameName.AppendChild(GameNameText); newGame.AppendChild(GameName);

            //תגית שאלות
            XmlElement GameQuestionsTag = myDoc.CreateElement("questions");
            newGame.AppendChild(GameQuestionsTag);

            //מציאת הענף אליו נרצה להוסיף את הענף החדש + הוספה
            myDoc.SelectSingleNode("/quizTree").AppendChild(newGame);

            XmlNumOfGames.InnerXml = strGamesCount; //עדכון כמות המשחקים בעורך - NumOfGames

            myDoc.Save(Server.MapPath("XML/GameXML.xml")); // שמירת העץ החדש
            XmlDataSource1.Save();
            GridView1.DataBind();
        }

    }

    protected void btnEditGame_Click(object sender, EventArgs e) //עריכת משחק
    {
        ImageButton btnSender = sender as ImageButton;
        string theId = btnSender.Attributes["ItemID"];
        Session["theItemIdSession"] = btnSender.Attributes["ItemID"]; //מציאת האי די של המשחק

        Response.Redirect("Editor.aspx");
    }

    protected void btnDeleteGame_Click(object sender, EventArgs e) //מחיקת משחק
    {
        ImageButton btnSender = sender as ImageButton;
        string theId = btnSender.Attributes["ItemID"];
        Session["theItemIdSession"] = btnSender.Attributes["ItemID"]; //העברת האי די לסשאן

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode xmlQuestion;
        xmlQuestion = myDoc.SelectSingleNode("quizTree/topic[@id='" + theId + "']/subject");
        lblPopUpQtitle.Text = xmlQuestion.InnerXml + "?";

        //הצגה של המסך האפור
        grayWindows.Style.Add("display", "block");

        DeleteConfPopUp.Visible = true;
        AboutPopUp.Visible = false;

        // הצגת הפופ-אפ של המחיקה + מיקום
        DeleteConfPopUp.Style.Add("top", "50%");
        DeleteConfPopUp.Style.Add("left", "50%");
        DeleteConfPopUp.Style.Add("transform", "translate(-50%, -50%)");
    }


    protected void btnPopupOK_Click(object sender, EventArgs e) //המחיקה בפועל
    {
        ((Panel)FindControl("grayWindows")).Style.Add("display", "none");  //מציאת הפאנל של החלון הנפתח וסגירתו
        grayWindows.Style.Add("display", "none");  //סגירת הרקע האפור


        //מציאת המשחק ומחיקתו מהגריד וויו ומהעץ
        XmlDocument Document = XmlDataSource1.GetXmlDocument();
        XmlNode node = Document.SelectSingleNode("quizTree/topic[@id='" + Session["theItemIdSession"] + "']");
        node.ParentNode.RemoveChild(node); //פעולת המחיקה

        XmlDataSource1.Save(); //שמירת המחיקה

        GridView1.DataBind();
    }

    protected void btnClosePopup_Click(object sender, EventArgs e) //לחיצה על כפתור סגור בפופ אפ מחיקה
    {
        //מציאת הפאנל של החלון הנפתח וסגירתו
        ((Panel)FindControl("grayWindows")).Style.Add("display", "none");
        //סגירת הרקע האפור
        grayWindows.Style.Add("display", "none");
    }



    protected void About_Click(object sender, EventArgs e) //פתיחת פופ אפ אודות
    {
        DeleteConfPopUp.Visible = false;
        AboutPopUp.Visible = true;

        //הצגה של המסך האפור
        grayWindows.Style.Add("display", "block");
        // הצגת הפופ-אפ של המחיקה + מיקום
        AboutPopUp.Style.Add("top", "50%");
        AboutPopUp.Style.Add("left", "50%");
        AboutPopUp.Style.Add("transform", "translate(-50%, -50%)");
    }


    protected void GoToGame_Click(object sender, EventArgs e) //כפתור חזרה למשחק
    {
        Response.Redirect("Blow%20the%20balloon.html");
    }

}



