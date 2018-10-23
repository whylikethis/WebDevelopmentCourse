using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
//using System.Web.Services;
//using System.Drawing.Imaging;
//using System.Drawing.Drawing2D;
//using System.IO;
//using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;


public partial class _Default : System.Web.UI.Page
{
    string imageLibPath = "uploadedFiles/";


    protected void Page_Load(object sender, EventArgs e)
    {
        //טעינת העץ
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));
        XmlNode XmlNumOfQuestions;
        XmlNumOfQuestions = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/@NumOfQuestions");
        //מונה רשימת השאלות
        int QuestionCount = Convert.ToUInt16(XmlNumOfQuestions.InnerXml);

        if (QuestionCount <= 9)
        {
            Label1.Text = "(" + QuestionCount.ToString() + ") לפחות 10 לפרסום";
            Label1.ForeColor = System.Drawing.Color.Red;
        }
        else
        {
            Label1.Text = "(" + QuestionCount.ToString() + ") ניתן לפרסם משחק";
            Label1.ForeColor = System.Drawing.Color.Green;
        }
        

        for (int i = 1; i <= 5; i++) //עבור תמונות
        {  //מציאת הפקודה לעלות קובץ וקריאה לפונקציה
            var myUpload = ((FileUpload)FindControl("myUpload" + i.ToString()));
            if (myUpload.PostedFile != null && myUpload.PostedFile.ContentLength > 0)
            {
                UploadAnsDisplay(myUpload);
            }
        }

    }

    protected void Page_Init(object sender, EventArgs e)
    {
        //טעינת העץ
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        string myID = Session["theItemIdSession"].ToString();
        XmlNode GameId = myDoc.SelectSingleNode("/quizTree/topic[@id='" + myID + "']/@GameCode");

        lblGameCode.Text = GameId.InnerXml;

        XmlNode XmlSubjectName;
        XmlSubjectName = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/subject");
        txtGameName.Text = XmlSubjectName.InnerXml;

        XmlNode XmlGameTime;
        XmlGameTime = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/@timePerQuest");
        if (XmlGameTime.InnerXml == "30")
            ddlGameTime.Text = "30";
        else if (XmlGameTime.InnerXml == "60")
            ddlGameTime.Text = "60";
        else if (XmlGameTime.InnerXml == "90")
            ddlGameTime.Text = "90";
        else 
            ddlGameTime.Text = "999";


        XmlDataSource1.XPath = "/quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question";

        lblNumOfAns.Text = "4"; //מס' תשובות דיפולטיבי לשאלה
        btnAddQuestion.Visible = true;
        btnAddQuestion.Enabled = false;
        btnUpdate.Visible = false;


        if (!IsPostBack) //רק פעם הראשונה העמוד עולה
        {
            ViewState["VSNumOfAns"] = "4";
            Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

            lblNewOrUpdate.Text = "New";
            ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
            Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());
        }


        for (int i = 1; i <= 5; i++) //סשאן עבור התמונות
            Session["pic_url" + i.ToString()] = "empty";
    }


    protected void btnAddQuestion_Click(object sender, EventArgs e) //כפתור הוסף שאלה
    {

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));
        
        //מונה רשימת השאלות
        XmlNode XmlNumOfQuestions;
        XmlNumOfQuestions = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/@NumOfQuestions");
        int QuestionCount = Convert.ToUInt16(XmlNumOfQuestions.InnerXml);
        string strQuestionCount = Convert.ToString(++QuestionCount); //מוצא את האידי הקיים ומעלה ב1

        XmlNumOfQuestions.InnerXml = strQuestionCount; //עדכון מספר השאלות למשחק - NumOfQuestions
        lblQid.Text = strQuestionCount;

        //יצירת שאלה חדשה 
        XmlElement newQuestion = myDoc.CreateElement("question");
        newQuestion.SetAttribute("id", strQuestionCount); // הוספת אי די לשאלה

        //גזע השאלה
        XmlElement QuestionTag = myDoc.CreateElement("questionText");
        XmlText QuestionTagText = myDoc.CreateTextNode(txtQuestion.Text);
        QuestionTag.AppendChild(QuestionTagText); newQuestion.AppendChild(QuestionTag);

        //תמונה לשאלה
        string ImgUrl = ImageButton5.ImageUrl;
        string endOfImgName = ImgUrl.Substring(ImageButton5.ImageUrl.Length - 11);
        if (endOfImgName != "ImgIcon.png") {
            XmlElement QuestionImg = myDoc.CreateElement("img");
            XmlText QuestionImgUrl = myDoc.CreateTextNode(ImageButton5.ImageUrl);
            QuestionImg.AppendChild(QuestionImgUrl); newQuestion.AppendChild(QuestionImg);
        }
        else
        {
            XmlElement QuestionImg = myDoc.CreateElement("img");
            XmlText QuestionImgUrl = myDoc.CreateTextNode("");
            QuestionImg.AppendChild(QuestionImgUrl); newQuestion.AppendChild(QuestionImg);
        }

        XmlElement Answers = myDoc.CreateElement("answers"); //הוספת מס' תשובות לשאלה
        Answers.SetAttribute("NumOfAnswers", lblNumOfAns.Text);
        newQuestion.AppendChild(Answers);

        int NumOfAns = Convert.ToInt16(lblNumOfAns.Text);
        for (int i = 1; i <= NumOfAns; i++)
        {
            XmlElement Answer = myDoc.CreateElement("answer");
            XmlText AnswerText =
            myDoc.CreateTextNode(((TextBox)FindControl("txtAnswer" + i.ToString())).Text);
            Answer.AppendChild(AnswerText); Answers.AppendChild(Answer);
        }

        //מציאת הענף אליו נרצה להוסיף את הענף החדש + הוספה
        myDoc.SelectSingleNode("/quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions").AppendChild(newQuestion);

        myDoc.Save(Server.MapPath("XML/GameXML.xml")); // שמירת העץ החדש
        XmlDataSource1.Save();
        GridView1.DataBind();

        btnClean_Click(sender, e); //ניקוי תיבות הטקסט

    }


    protected void editBtn_Click(object sender, EventArgs e)  // כפתור עריכת שאלה - הרשימה בגריד וויו
    {

        for (int i = 1; i <= 5; i++) //ניקיון העמוד למצב ברירת מחדל
        {
            if (i <= 4)
            {
                var AnswerTxt = ((TextBox)FindControl("txtAnswer" + i.ToString()));
                AnswerTxt.Text = "";
                AnswerTxt.Enabled = true;
                AnswerTxt.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);
            }
            var ImgMagnify = ((ImageButton)FindControl("ImgMagnify" + i.ToString()));
            ImgMagnify.Visible = false;

            var ImgTrash = ((ImageButton)FindControl("ImgTrash" + i.ToString()));
            ImgTrash.Visible = false;

            var ImgUrl = ((ImageButton)FindControl("ImageButton" + i.ToString()));
            ImgUrl.ImageUrl = "/Img/ImgIcon.png";
        }

        if (lblQid.Text != ""){//אם זה לא השאלה הראשונה שנבחרה אז צובע את הישנה חזרה בצבע לבן
            int LastBtnInt = Convert.ToInt16(lblQid.Text)-1;
            Button LastBtn = (Button)GridView1.Rows[LastBtnInt].FindControl("QuestionText");
            LastBtn.BackColor = System.Drawing.Color.FromArgb(255, 255, 255);
        }


        Button btnSender = sender as Button;
        
        string qNumStr = btnSender.ClientID.Substring(23);
        int qNumInt = Convert.ToInt16(qNumStr) + 1;
        lblQid.Text = Convert.ToString(qNumInt);

        btnSender.BackColor = System.Drawing.Color.FromArgb(158, 220, 252);


        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode xmlQuestion;
        xmlQuestion = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/questionText");
        txtQuestion.Text = xmlQuestion.InnerXml;

        XmlNode xmlQuestionImg;
        xmlQuestionImg = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/img");
        if (xmlQuestionImg.InnerXml != "")
        {
            ImageButton5.ImageUrl =  xmlQuestionImg.InnerXml;
            ImgMagnify5.Visible = true;
            ImgTrash5.Visible = true;
        }


        lblNewOrUpdate.Text = "Update";
        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());


        XmlNode xmlNumOfAnswers; //מוצא את מס' התשובות בשאלה
        xmlNumOfAnswers = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/answers/@NumOfAnswers");
        string NumOfAnswers = xmlNumOfAnswers.InnerXml;
        if (NumOfAnswers == "2")
            btn2Answer_Click(sender, e);
        else if (NumOfAnswers == "3")
            btn3Answer_Click(sender, e);
        else if (NumOfAnswers == "4")
            btn4Answer_Click(sender, e);



        XmlNode xmlItem = myDoc.SelectNodes("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']").Item(0);
        XmlNodeList xmlAnswers = xmlItem.SelectNodes("answers/answer");

        int countAnswers = 1;
        foreach (XmlNode xmlAnswer in xmlAnswers)
        {
            if (xmlAnswer.InnerXml.Length > 15)
            {//אם האורך קטן יותר מ14 תווים אז זה לא תמונה וחוסך שגיאת ריצה
                string stringStart = xmlAnswer.InnerXml.Substring(0, 14);
                if (stringStart == "uploadedFiles/") //מסיחי תמונה
                {
                    ((ImageButton)FindControl("ImageButton" + countAnswers)).ImageUrl = xmlAnswer.InnerXml;
                    ((TextBox)FindControl("txtAnswer" + countAnswers)).Text = xmlAnswer.InnerXml;
                    ((TextBox)FindControl("txtAnswer" + countAnswers)).Enabled = false;
                    ((TextBox)FindControl("txtAnswer" + countAnswers)).ForeColor = System.Drawing.Color.FromArgb(235, 235, 228);

                    var ImgMagnify = ((ImageButton)FindControl("ImgMagnify" + countAnswers));
                    ImgMagnify.Visible = true;

                    var ImgTrash = ((ImageButton)FindControl("ImgTrash" + countAnswers));
                    ImgTrash.Visible = true;
                }
                else //מסיחי טקסט לטקסט מעל 15 תווים
                {
                    ((TextBox)FindControl("txtAnswer" + countAnswers)).Text = xmlAnswer.InnerXml;

                }
            }
            else //מסיחי טקסט
            {
                ((TextBox)FindControl("txtAnswer" + countAnswers)).Text = xmlAnswer.InnerXml;

            }
            countAnswers++;
        }



        btnAddQuestion.Visible = false;
        btnUpdate.Visible = true;


    }

    protected void btnUpdate_Click(object sender, EventArgs e) //כפתור שמירת עדכן שאלה
    {

        if (lblQid.Text != "")
        {//אם זה לא השאלה הראשונה שנבחרה אז צובע את הישנה חזרה בצבע לבן
            int LastBtnInt = Convert.ToInt16(lblQid.Text) - 1;
            Button LastBtn = (Button)GridView1.Rows[LastBtnInt].FindControl("QuestionText");
            LastBtn.BackColor = System.Drawing.Color.FromArgb(255, 255, 255);
        }

        XmlDocument myDoc = new XmlDocument(); //טעינת העץ
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode xmlQuestion; //הפנייה לשאלה עצמה
        xmlQuestion = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']");


        XmlNode xmlQuestionText; //טקסט השאלה
        xmlQuestionText = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/questionText");
        xmlQuestionText.InnerXml = txtQuestion.Text;


        XmlNode xmlQuestionImg; //תמונה לשאלה
        xmlQuestionImg = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/img");

        string ImgUrl = ImageButton5.ImageUrl;
        string endOfImgName = ImgUrl.Substring(ImageButton5.ImageUrl.Length - 11);
        if (endOfImgName != "ImgIcon.png")
        {xmlQuestionImg.InnerXml = ImageButton5.ImageUrl;}
        else
        {xmlQuestionImg.InnerXml = "";}

        //מוחק את התשובות שהיו
        XmlNode node = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/answers");
        node.ParentNode.RemoveChild(node); //פעולת המחיקה

        //מזין מחדש את התשובות
        //המטרה בשיטה זו - לא משנה אם מס' התשובות גדל או קטן, תמונה או טקסט

        XmlElement Answers = myDoc.CreateElement("answers"); //הוספת מס' תשובות לשאלה
        Answers.SetAttribute("NumOfAnswers", lblNumOfAns.Text);

        int NumOfAns = Convert.ToInt16(lblNumOfAns.Text);
        for (int i = 1; i <= NumOfAns; i++)
        {
            XmlElement Answer = myDoc.CreateElement("answer");
            XmlText AnswerText =
            myDoc.CreateTextNode(((TextBox)FindControl("txtAnswer" + i.ToString())).Text);
            Answer.AppendChild(AnswerText); Answers.AppendChild(Answer);
        }

        //הוספת התשובות החדשות
        xmlQuestion.AppendChild(Answers);


        myDoc.Save(Server.MapPath("XML/GameXML.xml")); // שמירת העץ החדש
        XmlDataSource1.Save();
        GridView1.DataBind();

        btnClean_Click(sender, e); //ניקוי תיבות הטקסט
        btnAddQuestion.Visible = true;
        btnAddQuestion.Enabled = false;
        btnUpdate.Visible = false;
    }


    protected void btnUpdateGame_Click(object sender, EventArgs e) //כפתור עדכון משחק
    {
        //טעינת העץ
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode xmlGameName; //שינוי שם משחק
        xmlGameName = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/subject");
        xmlGameName.InnerXml = txtGameName.Text; //עדכון שם משחק חדש


        XmlNode XmlQuestionsTime; //שינוי זמן משחק
        XmlQuestionsTime = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/@timePerQuest");
        string gameTime  = ddlGameTime.SelectedValue;
        XmlQuestionsTime.InnerXml = gameTime; // עדכון זמן השאלות במשחק


        myDoc.Save(Server.MapPath("XML/GameXML.xml")); // שמירת העץ החדש
    }


    protected void btnClean_Click(object sender, EventArgs e) //כפתור ניקוי
    {

        for (int i=1;i<=5; i++)
        {
            if (i <= 4)
            {
                var AnswerTxt = ((TextBox)FindControl("txtAnswer" + i.ToString()));
                AnswerTxt.Text = "";
                AnswerTxt.Enabled = true;
                AnswerTxt.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);
            }
            var ImgMagnify = ((ImageButton)FindControl("ImgMagnify" + i.ToString()));
            ImgMagnify.Visible = false;

            var ImgTrash = ((ImageButton)FindControl("ImgTrash" + i.ToString()));
            ImgTrash.Visible = false;

            var ImgUrl = ((ImageButton)FindControl("ImageButton" + i.ToString()));
            ImgUrl.ImageUrl = "/Img/ImgIcon.png";
        }

        txtQuestion.Text = "";
        btnAddQuestion.Visible = true;
        btnAddQuestion.Enabled = false;
        btnUpdate.Visible = false;

        lblNewOrUpdate.Text = "New";
        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());

        btn4Answer_Click(sender, e); //חזרה להגדרות ברירת מחדל
    }

    protected void deleteBtn_Click(object sender, EventArgs e) // כפתור מחק - פותח פופ אפ
    {
        DeleteConfPopUp.Visible = true;
        ImgPopUp.Visible = false;
        AboutPopUp.Visible = false;

        ImageButton btnSender = sender as ImageButton;
        string qNumStr = btnSender.ClientID.Substring(20);
        int qNumInt = Convert.ToInt16(qNumStr) + 1;
        lblQid.Text = qNumInt.ToString();

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode xmlQuestion;
        xmlQuestion = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']/questionText");
        lblPopUpQtitle.Text = xmlQuestion.InnerXml + "?";

        //הצגה של המסך האפור
        grayWindows.Style.Add("display", "block");
        // הצגת הפופ-אפ של המחיקה + מיקום
        DeleteConfPopUp.Style.Add("top", "50%");
        DeleteConfPopUp.Style.Add("left", "50%");
        DeleteConfPopUp.Style.Add("transform", "translate(-50%, -50%)");
    }

    protected void btnPopupOK_Click(object sender, EventArgs e) //המחיקה בפועל
    {
        ((Panel)FindControl("grayWindows")).Style.Add("display", "none");  //מציאת הפאנל של החלון הנפתח וסגירתו
        grayWindows.Style.Add("display", "none");  //סגירת הרקע האפור


        //מציאת השאלה ומחיקתה מהגריד וויו ומהעץ
        XmlDocument Document = XmlDataSource1.GetXmlDocument();
        XmlNode node = Document.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions/question[@id='" + lblQid.Text + "']");
        node.ParentNode.RemoveChild(node); //פעולת המחיקה
        XmlDataSource1.Save(); //שמירת המחיקה

        //עדכון מספרי השאלות בעץ בהתאם למחיקה
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(Server.MapPath("XML/GameXML.xml"));

        XmlNode XmlNumOfQuestions;  //מונה רשימת השאלות
        XmlNumOfQuestions = myDoc.SelectSingleNode("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/@NumOfQuestions");
        int QuestionCount = Convert.ToUInt16(XmlNumOfQuestions.InnerXml);
        string strQuestionCount = Convert.ToString(--QuestionCount); //מוצא את האידי הקיים ומוריד ב1

        XmlNumOfQuestions.InnerXml = strQuestionCount; //עדכון מספר השאלות למשחק - NumOfQuestions


        XmlNode xmlItem = myDoc.SelectNodes("quizTree/topic[@GameCode='" + lblGameCode.Text + "']/questions").Item(0);
        XmlNodeList QuestionIds = xmlItem.SelectNodes("question/@id"); //תפיסה של האיי דיי עבור כל שאלה

        int countQuestionIds = 1;
        foreach (XmlNode QuestionId in QuestionIds)
        {
            QuestionId.InnerXml = countQuestionIds.ToString(); //ספירה מחדש של אי די לכל שאלה
            countQuestionIds++;
        }

        myDoc.Save(Server.MapPath("XML/GameXML.xml")); // שמירת העץ החדש
        GridView1.DataBind();
        Page_Load(sender,e); //מראה את הספירה המעודכנת של כמות השאלות
    }

    protected void btnClosePopup_Click(object sender, EventArgs e) //לחיצה על כפתור סגור בפופ אפ מחיקה
    { 
        //מציאת הפאנל של החלון הנפתח וסגירתו
        ((Panel)FindControl("grayWindows")).Style.Add("display", "none");
        //סגירת הרקע האפור
        grayWindows.Style.Add("display", "none");
    }


    protected void btnFinishEdit_Click(object sender, EventArgs e) //כפתור סיים עריכה
    {
        Response.Redirect("Main.aspx");
    }

    protected void btn2Answer_Click(object sender, EventArgs e) //כפתור בחירה 2
    {
        ImageButton3.ImageUrl = "/Img/ImgIcon.png";
        ImageButton3.Enabled = false;
        ImgTrash3.Visible = false;
        ImgMagnify3.Visible = false;
        txtAnswer3.Enabled = false;
        txtAnswer3.Text = "";

        ImageButton4.ImageUrl = "/Img/ImgIcon.png";
        ImageButton4.Enabled = false;
        ImgTrash4.Visible = false;
        ImgMagnify4.Visible = false;
        txtAnswer4.Enabled = false;
        txtAnswer4.Text = "";


        lblNumOfAns.Text = "2";
        btn2Answer.CssClass = "chooseBtnVisited";
        btn3Answer.CssClass = "chooseBtn";
        btn4Answer.CssClass = "chooseBtn";

        ViewState["VSNumOfAns"] = "2";
        Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());
    }

    protected void btn3Answer_Click(object sender, EventArgs e) //כפתור בחירה 3
    {
        string imgurl3 = ImageButton3.ImageUrl.Substring(ImageButton3.ImageUrl.Length - 11);
        if (imgurl3 != "ImgIcon.png")
        {
            txtAnswer3.Enabled = false;
        }
        else
        {
            if (lblNumOfAns.Text != "4")
             txtAnswer3.Text = "";

            txtAnswer3.Enabled = true;
            txtAnswer3.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);
        }
        ImageButton3.Enabled = true;


        ImageButton4.ImageUrl = "/Img/ImgIcon.png";
        ImageButton4.Enabled = false;
        ImgTrash4.Visible = false;
        ImgMagnify4.Visible = false;
        txtAnswer4.Enabled = false;
        txtAnswer4.Text = "";
        
        btn3Answer.CssClass = "chooseBtnVisited";
        btn2Answer.CssClass = "chooseBtn";
        btn4Answer.CssClass = "chooseBtn";

        lblNumOfAns.Text = "3";

        ViewState["VSNumOfAns"] = "3";
        Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());
    }

    protected void btn4Answer_Click(object sender, EventArgs e) //כפתור בחירה 4
    {
        string imgurl = ImageButton3.ImageUrl.Substring(ImageButton3.ImageUrl.Length - 11);
        if (imgurl != "ImgIcon.png")
        {
            txtAnswer3.Enabled = false;
        }
        else
        {
            if (lblNumOfAns.Text != "3")
                txtAnswer3.Text = "";

            txtAnswer3.Enabled = true;
            txtAnswer3.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);
        }

        ImageButton3.Enabled = true;
        

        lblNumOfAns.Text = "4";
        txtAnswer4.Enabled = true;
        txtAnswer4.Text = "";
        txtAnswer4.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);
        
        ImageButton4.Enabled = true;

        btn4Answer.CssClass = "chooseBtnVisited";
        btn2Answer.CssClass = "chooseBtn";
        btn3Answer.CssClass = "chooseBtn";

        ViewState["VSNumOfAns"] = "4";
        Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());
    }



    private void UploadAnsDisplay(FileUpload sender) //פונקציית עליית תמונות
    {

        string fileType = sender.PostedFile.ContentType;

        if (fileType.Contains("image"))
        {
            string fileName = sender.PostedFile.FileName;
            string endOfFileName = fileName.Substring(fileName.LastIndexOf("."));
            string myTime = DateTime.Now.ToString("dd_MM_yy-HH_mm_ss");
            string imageNewName = "imageNewName" + myTime + endOfFileName;

            // Bitmap המרת הקובץ שיתקבל למשתנה מסוג
            System.Drawing.Bitmap bmpPostedImage = new System.Drawing.Bitmap(sender.PostedFile.InputStream);

            //קריאה לפונקציה המקטינה את התמונה
            System.Drawing.Image objImage = FixedSize(bmpPostedImage, 134, 126);

            //שמירת הקובץ בגודלו החדש בתיקייה
            objImage.Save(Server.MapPath(imageLibPath) + imageNewName);


            for (int i = 1; i <= 4; i++)
            {

                FileUpload btnSender = sender as FileUpload;
                string mySender = btnSender.ClientID;
                string myUpload = "myUpload" + i.ToString();
                string ans_url = "ans_url" + i.ToString();

                if(mySender == "myUpload5") //אם התמונה שייכת לשאלה
                {
                    ImageButton5.ImageUrl = imageLibPath + imageNewName;
                    ans_url = imageNewName;
                    Session["pic" + i + "_url"] = ans_url;

                    ImgMagnify5.Visible = true;
                    ImgTrash5.Visible = true;

                }

               else if (mySender == myUpload) //אם התמונה שייכת למסיח
                {


                    var AnswerPic = ((Image)FindControl("ImageButton" + i.ToString()));
                    AnswerPic.ImageUrl = imageLibPath + imageNewName;
                    ans_url = imageNewName;
                    Session["pic" + i + "_url"] = ans_url;

                    var AnswerTxt = ((TextBox)FindControl("txtAnswer" + i.ToString()));
                    AnswerTxt.Text = imageLibPath + imageNewName;
                    AnswerTxt.Enabled = false;
                    AnswerTxt.ForeColor = System.Drawing.Color.FromArgb(235, 235, 228);

                    var ImgMagnify = ((ImageButton)FindControl("ImgMagnify" + i.ToString()));
                    ImgMagnify.Visible = true;

                    var ImgTrash = ((ImageButton)FindControl("ImgTrash" + i.ToString()));
                    ImgTrash.Visible = true;
                }

                ViewState["VSNumOfAns"] = lblNumOfAns.Text;
                Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

                ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
                Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());


            }



        }

    }

    protected void ImgTrash(object sender, ImageClickEventArgs e) //מחיקת תמונה
    {
        ImageButton btnSender = sender as ImageButton;

        if (btnSender.ID != "ImgTrash5") {

            string theId = btnSender.ID.Substring(8);

            var AnswerPic = ((Image)FindControl("ImageButton" + theId));
            AnswerPic.ImageUrl = "/Img/ImgIcon.png";

            var AnswerTxt = ((TextBox)FindControl("txtAnswer" + theId));
            AnswerTxt.Text = "";
            AnswerTxt.Enabled = true;
            AnswerTxt.ForeColor = System.Drawing.Color.FromArgb(0, 0, 0);

            var ImgMagnify = ((ImageButton)FindControl("ImgMagnify" + theId));
            ImgMagnify.Visible = false;

            var ImgTrash = ((ImageButton)FindControl("ImgTrash" + theId));
            ImgTrash.Visible = false;
        }
        else //אם התמונה שייכת לשאלה 
        {
            ImageButton5.ImageUrl = "/Img/ImgIcon.png";
            ImgMagnify5.Visible = false;
            ImgTrash5.Visible = false;
        }


        ViewState["VSNumOfAns"] = lblNumOfAns.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNumOfAns", ViewState["VSNumOfAns"].ToString());

        ViewState["VSNewOrUpdate"] = lblNewOrUpdate.Text;
        Page.ClientScript.RegisterHiddenField("HiddenVSNewOrUpdate", ViewState["VSNewOrUpdate"].ToString());

    }

    protected void MagnifyPopUp(object sender, ImageClickEventArgs e) //הגדלת תמונה
    {
        DeleteConfPopUp.Visible = false;
        AboutPopUp.Visible = false;
        ImgPopUp.Visible = true;

        ImageButton btnSender = sender as ImageButton;
        string imgNum = btnSender.ClientID.Substring(10);

        //הצגה של המסך האפור
        grayWindows.Style.Add("display", "block");
        // הצגת הפופ-אפ של המחיקה + מיקום
        ImgPopUp.Style.Add("top", "50%");
        ImgPopUp.Style.Add("left", "50%");
        ImgPopUp.Style.Add("transform", "translate(-50%, -50%)");

        var AnswerPic = ((Image)FindControl("ImageButton" + imgNum));
        BigImg.ImageUrl = AnswerPic.ImageUrl;


    }

    // פונקציה המקבלת את התמונה שהועלתה , האורך והרוחב שאנו רוצים לתמונה ומחזירה את התמונה המוקטנת
    static System.Drawing.Image FixedSize(System.Drawing.Image imgPhoto, int Width, int Height)
    {
        int sourceWidth = Convert.ToInt32(imgPhoto.Width);
        int sourceHeight = Convert.ToInt32(imgPhoto.Height);

        int sourceX = 0;
        int sourceY = 0;
        int destX = 0;
        int destY = 0;

        float nPercent = 0;
        float nPercentW = 0;
        float nPercentH = 0;

        nPercentW = ((float)Width / (float)sourceWidth);
        nPercentH = ((float)Height / (float)sourceHeight);
        if (nPercentH < nPercentW)
        {
            nPercent = nPercentH;
            destX = System.Convert.ToInt16((Width -
                          (sourceWidth * nPercent)) / 2);
        }
        else
        {
            nPercent = nPercentW;
            destY = System.Convert.ToInt16((Height -
                          (sourceHeight * nPercent)) / 2);
        }

        int destWidth = (int)(sourceWidth * nPercent);
        int destHeight = (int)(sourceHeight * nPercent);

        System.Drawing.Bitmap bmPhoto = new System.Drawing.Bitmap(Width, Height,
                          PixelFormat.Format24bppRgb);
        bmPhoto.SetResolution(imgPhoto.HorizontalResolution,
                         imgPhoto.VerticalResolution);

        System.Drawing.Graphics grPhoto = System.Drawing.Graphics.FromImage(bmPhoto);
        grPhoto.Clear(System.Drawing.Color.White);
        grPhoto.InterpolationMode =
                InterpolationMode.HighQualityBicubic;

        grPhoto.DrawImage(imgPhoto,
            new System.Drawing.Rectangle(destX, destY, destWidth, destHeight),
            new System.Drawing.Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
            System.Drawing.GraphicsUnit.Pixel);

        grPhoto.Dispose();
        return bmPhoto;
    }



    protected void About_Click(object sender, EventArgs e) //פתיחת פופ אפ אודות
    {
        ImgPopUp.Visible = false;
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