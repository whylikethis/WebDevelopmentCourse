
$(document).ready(function () { //רץ כאשר העמוד נטען

    //תגדיר לתוך משתנים את האורך והרוחב של החלון
    var windowsW = $(document).width();
    var windowsH = $(document).height();

    //תגדיר ערכים אלה לפאנל של החלון האפור
    //יגרום לכך שהחלון האפור תמיד יהיה בגודל של החלון שלנו
    $("#grayWindows").css("width", windowsW);
    $("#grayWindows").css("height", windowsH);

    //--------------------------------------------------
    //--------ביטול האפשרות לפרסום משחק-----
    //עובר על כל אלמנט עם הקלאס הנל
    $(".disabled").each(function (e) {
         
        $(this).find("input").attr("disabled", true);
        $(this).find("input").attr("checked", false);
    });

    //שלא יהיה טול טיפ במשחקים שניתנים לפרסום       
    $(".enabledd").each(function (e) {
        $(this).siblings('.tooltiptext').css("display", "none");
    });

});

function CountChr1() {
    var tboxName = event.target.id;
    var isNewQuestion;


    //תווים בתיבת משחק
    var ChrNum = document.getElementById("txtGameName").value.length;
    document.getElementById("lblGStrLeft").innerHTML =
    "20 / " + ChrNum;

    if (ChrNum <= 20 && ChrNum > 0) {
        document.getElementById("lblGStrLeft").style.color = "green";
        document.getElementById("btnUpdateGame").disabled = false;
    }
    else {
        document.getElementById("lblGStrLeft").style.color = "red";
        document.getElementById("btnUpdateGame").disabled = true;
    }



    //תווים בתיבת השאלה
    var ChrNum = document.getElementById("txtQuestion").value.length;
    document.getElementById("lblQStrLeft").innerHTML =
    "99 / " + ChrNum;

    if (ChrNum <= 99 && ChrNum > 0) {
        document.getElementById("lblQStrLeft").style.color = "green";
       var q = 1;
    }
    else {
        document.getElementById("lblQStrLeft").style.color = "red";
    }



    //תווים בתיבות תשובה
    for (i = 1 ; i <= 4; i++) {
        var txtElementName = "txtAnswer" + i;
        var lblElementName = "lblA" + i + "StrLeft";
        var ChrNum = document.getElementById(txtElementName).value.length;
        document.getElementById(lblElementName).innerHTML =
         "60 / " + ChrNum;


        if (document.getElementById(txtElementName).disabled == true) {
            document.getElementById(lblElementName).innerHTML = "";
        }


        if (lblElementName != "") {
            if (ChrNum <= 60 && ChrNum > 0) {
                document.getElementById(lblElementName).style.color = "green";
            }
            else {
                document.getElementById(lblElementName).style.color = "red";
            }
        }
        }



    //מוציא את הכפתורי שמירה מדיסאבל

    //מזהה אם מדובר בפעולת עדכון שאלה או שאלה חדשה
    var VSNewOrUpdate = document.getElementById("HiddenVSNewOrUpdate").value; 
    if (VSNewOrUpdate == "New") {
        var NewOrUpdate = "btnAddQuestion";
    }
    else {
       var NewOrUpdate = "btnUpdate";
    }


    //מזהה כמה תשובות יש לשאלה
    var VSNumOfAns = document.getElementById("HiddenVSNumOfAns").value;

    //קיצור לאסטטיקה וקריאה נוחה
    var q = document.getElementById("lblQStrLeft").style.color;
    var a = document.getElementById("lblA1StrLeft").style.color;
    var b = document.getElementById("lblA2StrLeft").style.color;
    var c = document.getElementById("lblA3StrLeft").style.color;
    var d = document.getElementById("lblA4StrLeft").style.color;



    if (VSNumOfAns == "4" && q == "green" && a != "red" && b != "red" && c != "red" && d != "red") {
        document.getElementById(NewOrUpdate).disabled = false;
    }
    else if (VSNumOfAns == "3" && q == "green" && a != "red" && b != "red" && c != "red") {
        document.getElementById(NewOrUpdate).disabled = false;
    }
    else if (VSNumOfAns == "2" && q == "green" && a != "red" && b != "red") {
        document.getElementById(NewOrUpdate).disabled = false;
    }
    else {
        document.getElementById(NewOrUpdate).disabled = true;
    }
    

}


////אנימציה לכפתורים
//$(function () {
//    $("#button").click(function () {
//        $("#button").addClass("onclic", 250, validate);
//    });

//    function validate() {
//        setTimeout(function () {
//            $("#button").removeClass("onclic");
//            $("#button").addClass("validate", 450, callback);
//        }, 2250);
//    }
//    function callback() {
//        setTimeout(function () {
//            $("#button").removeClass("validate");
//        }, 1250);
//    }
//});

