<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Main.aspx.cs" Inherits="Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>המשחקים שלי - פוצץ ת'בלון</title>
    <link href="Style/StyleCssGame.css" rel="stylesheet" />

    <style type="text/css">

        th{
         border-bottom: solid black;
         border-top: solid black;
        }

        .auto-style1 {
            height: 33px;
            width: 984px;
        }
        .auto-style2 {
            height: 33px;
            width: 1010px;
        }
        .auto-style3 {
            height: 33px;
            width: 964px;
        }
        .auto-style4 {
            height: 33px;
            width: 966px;
        }
    </style>
    <script src="JS/jquery-3.3.1.min.js"></script>
    <script src="JS/JavaScript.js"></script>

<script type="text/javascript">
    function Under10() { //משחקים עם מתחת ל10 שאלות נצבעים באדום
        var myDoc = document.getElementsByClassName("QuestionInGame");
        var i;
        for (i = 0; i < myDoc.length; i++) {
            if (parseInt(myDoc[i].innerHTML) < 10) {
                myDoc[i].style.color = "red";} } }
</script>   

</head>
<body dir="rtl" onload="Under10();">
    <form id="form1" runat="server">
            <asp:Panel ID="topPanel" runat="server" BackColor="#CEEDFD">
        <asp:Image ID="Image1" runat="server" ImageUrl="~/Img/Logo.png" Height="43px" Width="101px" />
        &nbsp;&nbsp;&nbsp;
        <asp:Panel ID="topPanelLeft" runat="server" style="float:left; padding-top: 15px;">
        <asp:Button ID="Button3" runat="server" Text="עזרה" ForeColor="#999999" CssClass="HeaderBtn" style="cursor:not-allowed;" />&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button2" runat="server" Text="אודות" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="About_Click"/>&nbsp;&nbsp;&nbsp;
        <asp:Button ID="Button4" runat="server" Text="למשחק" CssClass="HeaderBtn" style="cursor: pointer;" OnClick="GoToGame_Click"  OnClientClick="document.getElementById('form1').target ='_blank';"/>&nbsp;&nbsp;&nbsp;
        </asp:Panel>
    </asp:Panel> <br/>

                <table class="auto-style4">
            <tr>
                <td class="auto-style1">
                    <asp:Label ID="Label11" runat="server" Text="שם המשחק" Font-Size="10pt"></asp:Label>
                </td>
                <td class="auto-style1">
                    <asp:TextBox ID="txtGameName" onkeyup="CountChr1();" runat="server" Width="195px" placeholder="כתוב את שם המשחק"></asp:TextBox>
                </td>
                <td class="auto-style1">
                    <asp:Label ID="lblGStrLeft" runat="server" Text="0/20" Font-Size="8pt"></asp:Label>
                </td>
                <td class="auto-style2">
                    <asp:Label ID="Label12" runat="server" Text="זמן מענה לשאלה" Font-Size="10pt"></asp:Label>
                </td>
                <td class="auto-style3">
                    <asp:DropDownList ID="ddlGameTime" runat="server" Width="168px">
                        <asp:ListItem Value="30">30 שניות</asp:ListItem>
                        <asp:ListItem Value="60">60 שניות</asp:ListItem>
                        <asp:ListItem Value="90">90 שניות</asp:ListItem>
                        <asp:ListItem Value="999">ללא הגבלה</asp:ListItem>
                    </asp:DropDownList>
                </td>
                <td class="auto-style1">
                    &nbsp;<asp:Button ID="btnUpdateGame" runat="server" OnClick="btnCreateGame_Click" CssClass="enjoy-css" Text="צור משחק" Width="114px" Height="23px" Enabled="False" />
                </td>
            </tr>
        </table>

        <br />
        <div id ="GridViewDiv">
        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/XML/GameXML.xml" XPath="/quizTree/topic"></asp:XmlDataSource>
        <asp:GridView ID="GridView1" runat="server" CssClass="GridViewHeader" AutoGenerateColumns="False" DataSourceID="XmlDataSource1" Width="902px" CellPadding="4" ForeColor="Black" GridLines="None" >
            <Columns>
                    <asp:TemplateField HeaderText="שם המשחק">
                        <ItemTemplate>
                            <asp:Label ID="GameName" runat="server" Text='<%#XPathBinder.Eval(Container.DataItem, "subject").ToString()%>'></asp:Label>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="מס' שאלות" >
                        <ItemTemplate>
                            <asp:Label ID="NumOfQuestions" CssClass ="QuestionInGame" runat="server" Text='<%#XPathBinder.Eval(Container.DataItem, "@NumOfQuestions").ToString()%>'></asp:Label>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="קוד משחק" SortExpression="GameCode" >
                        <ItemTemplate>
                            <asp:Label ID="GameCode" runat="server" Text='<%#XPathBinder.Eval(Container.DataItem, "@GameCode").ToString()%>' OnClientHover="test();"></asp:Label>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

                    <asp:TemplateField HeaderText="עריכה" >
                        <ItemTemplate>
                       <asp:ImageButton ID="EditBtn" ImageUrl="~/Img/edit.png" ItemID='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" OnClick="btnEditGame_Click"/>
                    </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

                 <asp:TemplateField HeaderText="מחיקה">
                        <ItemTemplate>
                            <asp:ImageButton ID="DeleteBtn" ImageUrl="~/Img/trash.png" ItemID='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" OnClick="btnDeleteGame_Click" />
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

                 <asp:TemplateField HeaderText="פרסום" >
                        <ItemTemplate>
                            <div class="tooltip">
                             <asp:CheckBox ID="chkPublish" checked='<%#Convert.ToBoolean(XPathBinder.Eval(Container.DataItem,"@isPublish"))%>' ItemID='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' 
                                runat="server" AutoPostBack="true"  OnCheckedChanged="isPass_CheckedChanged"  class='<%#CheckIfCanPublish(XPathBinder.Eval(Container.DataItem,"@id"))%>'  />
                              <span class="tooltiptext">דרושות לפחות 10 שאלות לפרסום המשחק </span>
                                
                                </div>
                        </ItemTemplate>
                        <ItemStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                    </asp:TemplateField>

            </Columns>

            <AlternatingRowStyle BackColor="White" />
            <EditRowStyle BackColor="#E7E7E7" />
            <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
            <HeaderStyle BackColor="#9EDCFC" Font-Bold="True" ForeColor="Black" Font-Strikeout="False"  />
            <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
            <RowStyle BackColor="#E7E7E7" />
            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
            <SortedAscendingCellStyle BackColor="#F5F7FB" />
            <SortedAscendingHeaderStyle BackColor="#6D95E1" />
            <SortedDescendingCellStyle BackColor="#E9EBEF" />
            <SortedDescendingHeaderStyle BackColor="#4870BE" />
        </asp:GridView>
        </div>

        <asp:Panel ID="grayWindows" runat="server">
         <!-- פופ-אפ למחיקה - כאן אפשר להוסיף את הפקדים הרלוונטים -->
        <asp:Panel ID="DeleteConfPopUp" CssClass="PopUp" runat="server" Height="200px" Width="400px"  BorderStyle="Solid">
            <br />
            <asp:Label ID="Label14" runat="server" Text="שים לב!" Width="100%" Style="text-align:center;"></asp:Label>
            <br />
            <br />
            <asp:Label ID="Label15" runat="server" Text="לא ניתן לשחזר משחק שנמחק." Width="104%" Style="text-align:center;"></asp:Label>
            <br />
            <asp:Label ID="Label1" runat="server" Text="האם אתה בטוח שברצונך למחוק את המשחק" Width="104%" Style="text-align:center;"></asp:Label>
            <br /><br />
           <asp:Label ID="lblPopUpQtitle" runat="server" Style="text-align:center;" Text="?" Width="100%" Font-Bold="True"></asp:Label>
             <br />
             <br />
            <asp:Button ID="btnClosePopup" runat="server" Text="לא, חזור לטבלה" CssClass="enjoy-css" Width="114px" Height="23px" Style="margin-right:20px;" OnClick="btnClosePopup_Click"/>
            <asp:Button ID="btnPopupOK" runat="server" Text="כן, אני בטוח" CssClass="enjoy-css" Width="114px" Height="23px" Style="margin-left:20px; float: left;" OnClick="btnPopupOK_Click" ForeColor="Black" />
            </asp:Panel>

           <!-- פופ-אפ לאודות -->
           <asp:Panel ID="AboutPopUp" CssClass="PopUp" runat="server" Height="310px" Width="450px"  BorderStyle="Solid">
               
               <asp:Label ID="Label6" runat="server" Text="אודות" Width="445px" style="text-align: center; border-bottom: solid; padding:3px;" Font-Size="Large" Font-Bold="True"></asp:Label>
               <br/>

               <asp:Label ID="Label2" runat="server" Text="אפיון ופיתוח: " Font-Bold="True" Width="440px" style="text-align: center; padding-top:10px;padding-bottom:5px;"></asp:Label><br/>
               <asp:Label ID="Label3" runat="server" Text="איתי עינתי וסתיו בר שי"  Width="440px" style="text-align: center; padding:3px;"></asp:Label>
                  <br/><br/>
               <asp:Label ID="Label4" runat="server" Text="אופיין ופותח במסגרת פרויקט בקורסים:" Font-Bold="True" Width="440px" style=" text-align: center; padding:3px;" ></asp:Label>
               <br/>
               <asp:Label ID="Label5" runat="server" Text="סביבות לימוד אינטראקטיביות 2 + תכנות 2 + " Width="440px" style="text-align: center; padding:3px;"></asp:Label>
               <asp:Label ID="Label7" runat="server" Text="תכנות אינטראקטיבי 2  תשע''ח" Width="440px" style="text-align: center; padding:3px;"></asp:Label>

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
