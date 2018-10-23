using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class LogIn : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void BtnLogin_Click(object sender, EventArgs e) //ולדציה לשם משתמש וסיסמה
    {
        int intToPass = 2;

        if (txtUserName.Text != "Admin") //שם משתמש
        {
            lblUserNameError.Text = "שם המשתמש שגוי";
            intToPass--;
        }
        else
            lblUserNameError.Text = "";



        if (txtPassword.Text != "Admin" && intToPass == 2) //סיסמה
        {
            lblPasswordError.Text = "סיסמה שגוייה";
            intToPass--;
        }
        else
            lblPasswordError.Text = "";



        if (intToPass == 2) //אם שניהם נכונים עבור לעמוד הבא
            Response.Redirect("Main.aspx");

    }


    protected void GoToGame_Click(object sender, EventArgs e) //כפתור חזרה לעורך
    {
        Response.Redirect("Blow%20the%20balloon.html");
    }


    protected void About_Click(object sender, EventArgs e) //אודות
    {
        AboutPopUp.Visible = true;

        //הצגה של המסך האפור
        grayWindows.Style.Add("display", "block");
        // הצגת הפופ-אפ של המחיקה + מיקום
        AboutPopUp.Style.Add("top", "50%");
        AboutPopUp.Style.Add("left", "50%");
        AboutPopUp.Style.Add("transform", "translate(-50%, -50%)");
    }


    protected void btnClosePopup_Click(object sender, EventArgs e) //לחיצה על כפתור סגור בפופ אפ אודות
    {
        //מציאת הפאנל של החלון הנפתח וסגירתו
        ((Panel)FindControl("grayWindows")).Style.Add("display", "none");
        //סגירת הרקע האפור
        grayWindows.Style.Add("display", "none");
    }
}