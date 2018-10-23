<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Editor.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>עריכת שאלות - פוצץ ת'בלון</title>
    <link href="Style/StyleCssAuto.css" rel="stylesheet" />
    <link href="Style/StyleCssGame.css" rel="stylesheet" />

    <script src="JS/jquery-3.3.1.min.js"></script>
    <script src="JS/JavaScript.js"></script>

    <style type="text/css">
    </style>

</head>
<body dir="rtl" onload="CountChr1();">
    <form id="form1" runat="server">
    <asp:Panel ID="topPanel" runat="server" BackColor="#CEEDFD">
        <asp:Image ID="Image1" runat="server" ImageUrl="~/Img/Logo.png" Height="43px" Width="101px" />
        &nbsp;&nbsp;&nbsp;
        <asp:Panel ID="topPanelLeft" runat="server" style="float:left; padding-top: 15px;">
        <asp:Button ID="Button3" runat="server" Text="עזרה" ForeColor="#999999" CssClass="HeaderBtn" style="cursor:not-allowed;" />&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button2" runat="server" Text="אודות" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="About_Click"/>&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button4" runat="server" Text="למשחק" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="GoToGame_Click"  OnClientClick="document.getElementById('form1').target ='_blank';" />&nbsp;&nbsp;&nbsp;
        </asp:Panel>
    </asp:Panel> <br />

        <table class="auto-style1">
            <tr>
                <td class="auto-style20">
                    <asp:Label ID="Label11" runat="server" Text="שם המשחק" Font-Size="10pt"></asp:Label>
                </td>
                <td class="auto-style21">
                    <asp:TextBox ID="txtGameName" onkeyup="CountChr1();" runat="server" Width="195px"></asp:TextBox>
                </td>
                <td class="auto-style22">
                    <asp:Label ID="lblGStrLeft" runat="server" Text="0/20" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style23">
                    <asp:Label ID="Label12" runat="server" Text="זמן מענה לשאלה" Font-Size="10pt"></asp:Label>
                </td>
                <td class="auto-style24">
                    <asp:DropDownList ID="ddlGameTime" runat="server" Width="168px">
                        <asp:ListItem Value="30">30 שניות</asp:ListItem>
                        <asp:ListItem Value="60">60 שניות</asp:ListItem>
                        <asp:ListItem Value="90">90 שניות</asp:ListItem>
                        <asp:ListItem Value="999">ללא הגבלה</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td>
                    <asp:Button ID="btnUpdateGame" runat="server" OnClick="btnUpdateGame_Click" CssClass="enjoy-css" Text="עדכן" Width="114px" Height="23px" />
                </td>
            </tr>
        </table>

        <br />

        <p>
            <asp:Label ID="Label10" runat="server" Text="עריכת שאלות" BackColor="#9EDCFC" Style="text-align: center; padding-top: 5px;" CssClass="EditQ" Font-Bold="True" Width="100%" Height="35px" Font-Size="16pt" ForeColor="Black"></asp:Label>
        </p>

        <table cellpadding="2" cellspacing="3" class="auto-style1">
            <tr>
                <td class="auto-style28">
                    <asp:Label ID="Label3" runat="server" Font-Bold="True" Font-Size="11pt" Text="השאלה"></asp:Label>
                </td>
                <td class="auto-style29">
                    <asp:Label ID="lblQStrLeft" runat="server" Text="0/99" Style="float: left" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style34">
                    &nbsp;</td>
                <td class="auto-style14">&nbsp;</td>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style42">&nbsp;</td>
                <td class="auto-style40">&nbsp;</td>
                <td class="auto-style41">&nbsp;</td>
                <td>&nbsp;<asp:Label ID="Label2" runat="server" Font-Bold="True" Text="רשימת השאלות"></asp:Label>
                    &nbsp;
                        <asp:Label ID="Label1" runat="server" Text="(0) לפחות 10 לפרסום"></asp:Label>
                    &nbsp;</td>
            </tr>
            <tr>
                <td colspan="3">
                    <asp:TextBox ID="txtQuestion" onkeyup="CountChr1();" runat="server" Width="475px" Height="40px"></asp:TextBox>
                </td>
                <td class="auto-style14">&nbsp;</td>
                <td class="auto-style4">
                    <asp:ImageButton ID="ImgMagnify5" runat="server" ImageUrl="~/Img/Magnify.png" Visible="False" style="padding-top: 23px;"  OnClick="MagnifyPopUp"/>
                </td>
                <td class="auto-style42">
                    <asp:ImageButton ID="ImageButton5" runat="server" Height="50px" ImageUrl="~/Img/ImgIcon.png" Width="60px" OnClientClick="SomeFunc('5'); return false;" />
                </td>
                <td class="auto-style40">
                    <asp:ImageButton ID="ImgTrash5" runat="server" ImageUrl="~/Img/trash.png" Visible="False" OnClick="ImgTrash" style="padding-top: 23px;"/>
                <td class="auto-style41" rowspan="7"></td>
                <td rowspan="7" class="listOfQ">
                    <div style="height: 370px; border:solid;" dir="ltr">
                    <div style="height: 360px; overflow: auto; padding:5px;" dir="ltr">
                        
                        <asp:GridView ID="GridView1" CssClass="Qtable" runat="server" DataSourceID="XmlDataSource1" AutoGenerateColumns="False" Width="614px" BorderStyle="None" CellPadding="0" GridLines="None" ShowHeader="False">
                        
                                <Columns>
                                <asp:TemplateField>
                                    <ItemTemplate>
                                        <asp:Button ID="QuestionText" runat="server" Text='<%#XPathBinder.Eval(Container.DataItem, "questionText").ToString()%>' OnClick="editBtn_Click" CssClass="Qbtn" />
                                    </ItemTemplate>
                                </asp:TemplateField>

                                <asp:TemplateField>
                                    <ItemTemplate>
                                        <asp:ImageButton ID="DeleteBtn" theItemId='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" OnClick="deleteBtn_Click" ImageUrl="~/Img/trash.png" style="float: left;" />
                                    </ItemTemplate>

                                </asp:TemplateField>
                            </Columns>
                        </asp:GridView>
                        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/GameXML.xml" XPath="/quizTree/topic[@GameCode='101']/questions/question"></asp:XmlDataSource>
                    </div>
                        </div>
                    <asp:Button ID="btnFinishEdit" runat="server" OnClick="btnFinishEdit_Click" CssClass="enjoy-css" Text="סיים עריכה" Width="299px" Height="23px" />

                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div style="display:flex;">
                    <asp:Panel ID="Panel2" runat="server" Height="44px" Width="151px">
                        <asp:Label ID="Label16" runat="server" Font-Bold="True" Font-Size="11pt" Text="אפשרויות תשובה"></asp:Label>
                        <br />
                        <asp:Label ID="Label17" runat="server" Font-Bold="False" Font-Size="8pt" ForeColor="Red" Text="טקסט עד 60 תווים"></asp:Label>
                    </asp:Panel>
                     <asp:Panel ID="Panel3" runat="server" Height="33px" Width="185px">
                         <asp:Button ID="btn2Answer" runat="server" Height="28px" Text="2" CssClass="chooseBtn" Width="36px" OnClick="btn2Answer_Click" />
                         &nbsp;
                         <asp:Button ID="btn3Answer" runat="server" Height="28px" Text="3" CssClass="chooseBtn" Width="36px" OnClick="btn3Answer_Click"  />
                         &nbsp;
                         <asp:Button ID="btn4Answer" runat="server" Height="28px" Text="4" CssClass="chooseBtnVisited" Width="36px" OnClick="btn4Answer_Click" />
                        <br />
                    </asp:Panel>
                        </div>
                </td>
                <td class="auto-style34">
                    &nbsp;</td>
                <td class="auto-style14">&nbsp;</td>
                <td class="auto-style4">&nbsp;</td>
                <td class="auto-style42">
                    &nbsp;</td>
                <td class="auto-style40">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style26">
                    <asp:Label ID="Label4" runat="server" Font-Bold="True" Font-Size="11pt" Text="התשובה הנכונה" Width="80px"></asp:Label>
                </td>
                <td class="auto-style30">
                    <asp:TextBox ID="txtAnswer1" onkeyup="CountChr1();" runat="server" Width="360px" BorderColor="#33CC33" BorderStyle="Solid" Height="40px"></asp:TextBox>
                </td>
                <td class="auto-style33">
                    <asp:Label ID="lblA1StrLeft" runat="server" Text="0/60" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style14">
                    <asp:Label ID="Label5" runat="server" Font-Size="9pt" Text="או"></asp:Label>
                </td>
                <td class="auto-style13">
                    <asp:ImageButton ID="ImgMagnify1" runat="server" ImageUrl="~/Img/Magnify.png" Visible="False" style="padding-top: 23px;" OnClick="MagnifyPopUp" />
                <td class="auto-style42">
                    <asp:ImageButton ID="ImageButton1" runat="server" Height="50px" ImageUrl="~/Img/ImgIcon.png" Width="60px" OnClientClick="SomeFunc('1'); return false;"/>
                </td>
                <td class="auto-style40">
                    
                    <asp:ImageButton ID="ImgTrash1" runat="server" ImageUrl="~/Img/trash.png" Visible="False" OnClick="ImgTrash" style="padding-top: 23px;"/>
                    
            </tr>
            <tr>
                <td class="auto-style28">&nbsp;</td>
                <td class="auto-style29">
                    <asp:TextBox ID="txtAnswer2" onkeyup="CountChr1();" runat="server" Width="360px" Height="40px"></asp:TextBox>
                </td>
                <td class="auto-style34">
                    <asp:Label ID="lblA2StrLeft" runat="server" Text="0/60" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style14">
                    <asp:Label ID="Label6" runat="server" Font-Size="9pt" Text="או"></asp:Label>
                </td>
                <td class="auto-style4">
                   <asp:ImageButton ID="ImgMagnify2" runat="server" ImageUrl="~/Img/Magnify.png" Visible="False" style="padding-top: 23px;"  OnClick="MagnifyPopUp"/>
                <td class="auto-style42">
                    <asp:ImageButton ID="ImageButton2" runat="server" Height="50px" ImageUrl="~/Img/ImgIcon.png" Width="60px" OnClientClick="SomeFunc('2'); return false;" />
                </td>
                <td class="auto-style40">
                    <asp:ImageButton ID="ImgTrash2" runat="server" ImageUrl="~/Img/trash.png" OnClick="ImgTrash" Visible="False" style="padding-top: 23px;"/>
                </td>
            </tr>
            <tr>
                <td class="auto-style28">&nbsp;</td>
                <td class="auto-style29">
                    <asp:TextBox ID="txtAnswer3" onkeyup="CountChr1();" runat="server" Width="360px" Height="40px"></asp:TextBox>
                </td>
                <td class="auto-style34">
                    <asp:Label ID="lblA3StrLeft" runat="server" Text="0/60" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style14">
                    <asp:Label ID="Label7" runat="server" Font-Size="9pt" Text="או"></asp:Label>
                </td>
                <td class="auto-style4">
                 <asp:ImageButton ID="ImgMagnify3" runat="server" ImageUrl="~/Img/Magnify.png" Visible="False" style="padding-top: 23px;"  OnClick="MagnifyPopUp"/>
                <td class="auto-style42">
                    <asp:ImageButton ID="ImageButton3" runat="server" Height="50px" ImageUrl="~/Img/ImgIcon.png" Width="60px" OnClientClick="SomeFunc('3'); return false;"/>
                </td>
                <td class="auto-style40">
                    <asp:ImageButton ID="ImgTrash3" runat="server" ImageUrl="~/Img/trash.png" Visible="False" OnClick="ImgTrash" style="padding-top: 23px;"/>
                </td>
            </tr>
            <tr>
                <td class="auto-style28">&nbsp;</td>
                <td class="auto-style29">
                    <asp:TextBox ID="txtAnswer4" onkeyup="CountChr1();" runat="server" Width="360px" Height="40px"></asp:TextBox>
                </td>
                <td class="auto-style34">
                    <asp:Label ID="lblA4StrLeft" runat="server" Text="0/60" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style14">
                    <asp:Label ID="Label8" runat="server" Font-Size="9pt" Text="או"></asp:Label>
                </td>
                <td class="auto-style4">
                    <asp:ImageButton ID="ImgMagnify4" runat="server" ImageUrl="~/Img/Magnify.png" Visible="False" style="padding-top: 23px;"  OnClick="MagnifyPopUp"/>
                <td class="auto-style42">
                    <asp:ImageButton ID="ImageButton4" runat="server" Height="50px" ImageUrl="~/Img/ImgIcon.png" Width="60px" OnClientClick="SomeFunc('4'); return false;"/>
                </td>
                <td class="auto-style40">
                    <asp:ImageButton ID="ImgTrash4" runat="server" ImageUrl="~/Img/trash.png" Visible="False" OnClick="ImgTrash" style="padding-top: 23px;"/>
                </td>
            </tr>
            <tr>
                <td class="auto-style27">
                    <asp:Button ID="btnClean" runat="server" OnClick="btnClean_Click" CssClass="enjoy-css" Text="נקה" Width="89px" Height="23px" />
                </td>
                <td class="auto-style31" colspan="5">
                    <asp:Button ID="btnUpdate" runat="server" OnClick="btnUpdate_Click" Text="עדכן שאלה" CssClass="enjoy-css" Style="float: left" Width="114px" Height="23px" />
                    <asp:Button ID="btnAddQuestion" runat="server" OnClick="btnAddQuestion_Click" CssClass="enjoy-css" Text="הוסף שאלה" Style="float: left" Width="114px" Height="23px" />
                </td>
                <td class="auto-style39">&nbsp;</td>
            </tr>
        </table>

        <asp:Panel ID="Panel1" runat="server" Height="145px" Visible="False">
            <asp:Label ID="lblGameCode" runat="server"></asp:Label>
            <br />
            <asp:Label ID="lblQid" runat="server"></asp:Label>
            <br />
            <asp:Label ID="lblNumOfAns" runat="server"></asp:Label>
            <br />
            <asp:Label ID="lblStepsToPublish" runat="server"></asp:Label>
            <br />
           <asp:Label ID="lblNewOrUpdate" runat="server"></asp:Label>
            <br />
        </asp:Panel>


         <asp:FileUpload ID="myUpload1" style="visibility:hidden; width:106px;" runat="server" onChange="form1.submit();"  />
         <asp:FileUpload ID="myUpload2" style="visibility:hidden; width:106px;" runat="server" onChange="form1.submit();"  />
         <asp:FileUpload ID="myUpload3" style="visibility:hidden; width:106px;" runat="server" onChange="form1.submit();"  />
         <asp:FileUpload ID="myUpload4" style="visibility:hidden; width:106px;" runat="server" onChange="form1.submit();"  />
         <asp:FileUpload ID="myUpload5" style="visibility:hidden; width:106px;" runat="server" onChange="form1.submit();"  />



        <asp:Panel ID="grayWindows" runat="server">
         <!-- פופ-אפ למחיקה - כאן אפשר להוסיף את הפקדים הרלוונטים -->
        <asp:Panel ID="DeleteConfPopUp" CssClass="PopUp" runat="server" Height="200px" Width="400px"  BorderStyle="Solid" Visible="False">
            <br />
            <asp:Label ID="Label14" runat="server" Text="שים לב!" Width="100%" Style="text-align:center;"></asp:Label>
            <br />
            <br />
            <asp:Label ID="Label15" runat="server" Text="לא ניתן לשחזר שאלה שנמחקה. האם למחוק את השאלה" Width="104%" Style="text-align:center;"></asp:Label>
            <br /><br />
           <asp:Label ID="lblPopUpQtitle" runat="server" Style="text-align:center;" Text="בלה?" Width="100%" Font-Bold="True"></asp:Label>
             <br />
             <br />
            <asp:Button ID="btnClosePopup" runat="server" Text="סגור" CssClass="enjoy-css" Width="114px" Height="23px" Style="margin-right:20px;" OnClick="btnClosePopup_Click"/>
            <asp:Button ID="btnPopupOK" runat="server" Text="מחק" CssClass="enjoy-css" Width="114px" Height="23px" Style="margin-left:20px; float: left;" OnClick="btnPopupOK_Click" />
            </asp:Panel>
             <br /><br /><br /><br /><br /><br /><br /><br />

         <!-- פופ-אפ לתמונה -->
           <asp:Panel ID="ImgPopUp" CssClass="PopUp" runat="server" Height="310px" Width="450px"  BorderStyle="Solid" Visible="False">
            <asp:Image ID="BigImg" runat="server" CssClass="auto-style43" Height="270px" Width="450px" />
             <br />
            <asp:Button ID="btnClosePopup2" runat="server" Text="סגור" CssClass="enjoy-css" Width="114px" Height="23px" 
                        Style="position: absolute; right: 35%;" OnClick="btnClosePopup_Click"/>
            </asp:Panel>
            
           <!-- פופ-אפ לאודות -->
           <asp:Panel ID="AboutPopUp" CssClass="PopUp" runat="server" Height="310px" Width="450px"  BorderStyle="Solid">
               
               <asp:Label ID="Label9" runat="server" Text="אודות" Width="445px" style="text-align: center; border-bottom: solid; padding:3px;" Font-Size="Large" Font-Bold="True"></asp:Label>
               <br/>

               <asp:Label ID="Label13" runat="server" Text="אפיון ופיתוח: " Font-Bold="True" Width="440px" style="text-align: center; padding-top:10px;padding-bottom:5px;"></asp:Label><br/>
               <asp:Label ID="Label18" runat="server" Text="איתי עינתי וסתיו בר שי"  Width="440px" style="text-align: center; padding:3px;"></asp:Label>
                  <br/><br/>
               <asp:Label ID="Label19" runat="server" Text="אופיין ופותח במסגרת פרויקט בקורסים:" Font-Bold="True" Width="440px" style=" text-align: center; padding:3px;" ></asp:Label>
               <br/>
               <asp:Label ID="Label20" runat="server" Text="סביבות לימוד אינטראקטיביות 2 + תכנות 2 + " Width="440px" style="text-align: center; padding:3px;"></asp:Label>
               <asp:Label ID="Label21" runat="server" Text="תכנות אינטראקטיבי 2  תשע''ח" Width="440px" style="text-align: center; padding:3px;"></asp:Label>

               <br/><br/>
               <asp:ImageButton ID="AboutImgHit" runat="server" Height="52px"  ImageAlign="Middle" ImageUrl="~/Img/Hit.png" Width="343px" style="padding-right: 65px;" OnClientClick="window.open('https://www.hit.ac.il/telem/overview', '_blank');" />

                <br /><br/>
               <asp:Button ID="btnCloseAboutPopup" runat="server" Text="סגור" CssClass="enjoy-css" Width="114px" Height="23px" 
                        Style="position: absolute; right: 35%;" OnClick="btnClosePopup_Click"/>
            </asp:Panel>
            </asp:Panel>

       <script type="text/javascript">
            function SomeFunc(x) {
                var myId = "myUpload" + x;
                document.getElementById(myId).click();
            }
        </script>    
    </form>
</body>
</html>
