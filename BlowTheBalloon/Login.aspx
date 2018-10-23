<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="LogIn" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>כניסה - פוצץ ת'בלון</title>
    <script src="JS/jquery-3.3.1.min.js"></script>
    <script src="JS/JavaScript.js"></script>

    <link href="Style/StyleCssGame.css" rel="stylesheet" />

<style type="text/css">
  body {
    background-image: url(/Img/BackImg.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: -webkit-fill-available;
    max-width: fit-content;
    }
  input {
      text-align: center;
  }

</style>

</head>
<body dir="rtl">

    <form id="form1" runat="server" class="auto-style1">

    <asp:Panel ID="topPanel" runat="server" BackColor="#CEEDFD">
        <asp:Image ID="Image1" runat="server" ImageUrl="~/Img/Logo.png" Height="43px" Width="101px" />
        &nbsp;&nbsp;&nbsp;
        <asp:Panel ID="topPanelLeft" runat="server" style="float:left; padding-top: 15px;">
        <asp:Button ID="Button3" runat="server" Text="עזרה" ForeColor="#999999" CssClass="HeaderBtn" style="cursor:not-allowed;" />&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button2" runat="server" Text="אודות" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="About_Click"/>&nbsp;&nbsp;&nbsp;
         <asp:Button ID="Button1" runat="server" Text="למשחק" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="GoToGame_Click" OnClientClick="document.getElementById('form1').target ='_blank';" /> &nbsp;&nbsp;&nbsp;
        </asp:Panel>
    </asp:Panel>

        <asp:Panel ID="LoginPanel" runat="server">
        <asp:Label ID="lblUserName" runat="server" Text="שם משתמש"></asp:Label>&nbsp;&nbsp;&nbsp;
        <asp:TextBox ID="txtUserName" runat="server" ></asp:TextBox>&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblUserNameError" runat="server" ForeColor="Red"></asp:Label>&nbsp;&nbsp;&nbsp;
        <br/><br/>
        <asp:Label ID="lblPassword" runat="server" Text="סיסמה"></asp:Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>&nbsp;&nbsp;&nbsp;
        <asp:Label ID="lblPasswordError" runat="server" ForeColor="Red"></asp:Label>&nbsp;&nbsp;&nbsp;
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Button ID="BtnLogin" runat="server" Text="כניסה" CssClass="enjoy-css" Height="34px" Width="98px" OnClick="BtnLogin_Click"/>
    </asp:Panel>
    
    
     <asp:Panel ID="grayWindows" runat="server">
         <!-- פופ-אפ לאודות -->
           <asp:Panel ID="AboutPopUp" CssClass="PopUp" runat="server" Height="310px" Width="450px"  BorderStyle="Solid">
               
               <asp:Label ID="Label6" runat="server" Text="אודות" Width="445px" style="text-align: center; border-bottom: solid; padding:3px;" Font-Size="Large" Font-Bold="True"></asp:Label>
               <br/>

               <asp:Label ID="Label1" runat="server" Text="אפיון ופיתוח: " Font-Bold="True" Width="440px" style="text-align: center; padding-top:10px;padding-bottom:5px;"></asp:Label><br/>
               <asp:Label ID="Label2" runat="server" Text="איתי עינתי וסתיו בר שי"  Width="440px" style="text-align: center; padding:3px;"></asp:Label>
                  <br/><br/>
               <asp:Label ID="Label3" runat="server" Text="אופיין ופותח במסגרת פרויקט בקורסים:" Font-Bold="True" Width="440px" style=" text-align: center; padding:3px;" ></asp:Label>
               <br/>
               <asp:Label ID="Label4" runat="server" Text="סביבות לימוד אינטראקטיביות 2 + תכנות 2 + " Width="440px" style="text-align: center; padding:3px;"></asp:Label>
               <asp:Label ID="Label5" runat="server" Text="תכנות אינטראקטיבי 2  תשע''ח" Width="440px" style="text-align: center; padding:3px;"></asp:Label>

               <br/><br/>
               <asp:ImageButton ID="AboutImgHit" runat="server" Height="52px"  ImageAlign="Middle" ImageUrl="~/Img/Hit.png" Width="343px" style="padding-right: 65px;" OnClientClick="window.open('https://www.hit.ac.il/telem/overview', '_blank');" />

                <br /><br/>
               <asp:Button ID="btnCloseAboutPopup" runat="server" Text="סגור" CssClass="enjoy-css" Width="114px" Height="23px" 
                        Style="position: absolute; right: 35%;" OnClick="btnClosePopup_Click"/>
            </asp:Panel>
            </asp:Panel>
    
    
    
    </form>

    </body>
</html>
