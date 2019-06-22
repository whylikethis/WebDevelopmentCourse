$(document).ready(function () {
    $(".naoNav").load("nav.html"); //טוען את התפריט

    $('#main').hide();
    $('#main').slideDown(1000);


    //אפשרות לפתיחה או סגירה של התפריט בסוויפ
        $('.bodyClass').swipe({
            swipe: function (event, direction, distance, duration, fingerCount) {
                switch (direction) {
                    case "left":

                        w3_open();
                        break;
                    case "right":
                        w3_close();
                        break;
                }
            },
            // Here your list of excluded elements ...
            excludedElements: "label, button, input, select, textarea"
        });


    //אפשרות דפדוף בגלרייה של חידה 4 
    $('.modal').swipe({
        swipe: function (event, direction, distance, duration, fingerCount) {
            switch (direction) {
                case "left":
                    picGallery(1);
                    break;
                case "right":
                    picGallery(-1);
                    break;
            }
        },
        // Here your list of excluded elements ...
        excludedElements: "label, button, input, select, textarea"
    });


    whenEnter(); //לחיצה על אנטר בתיבת טקסט
});


var rndPics = [];
var fname;
function loadPics(fname) { //עבור חידת התמונות 
    //טוען את התמונות מקובץ ג'ייסון
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            JsonPicsObj = JSON.parse(this.responseText);
            for (i in JsonPicsObj) {
                rndPics.push(JsonPicsObj[i]);
            }
            
            rndPicsFunc(fname); //קורא לפונקציה שמבצעת את הערבוב
        }
    };
    xmlhttp.open("GET", "img_" + fname +".json", true); //מביא את קובץ הגיסון בהתאם לעמוד
    xmlhttp.send();

}

function rndPicsFunc(fname) { //פונקציה שמבצעת את ערבוב התמונות
    document.getElementById("imgdiv").innerHTML = "";

    if (fname == 'heros') { //ערבוב תמונות רק בחידה בלאק ממבה
        rndPics.sort(function (a, b) { return 0.5 - Math.random() });
    }

    for (i in rndPics) {
        document.getElementById("imgdiv").innerHTML +=
            "<img class='imgRnd' id='" + rndPics[i] + "' alt='"+ i.toString() +"' onclick='imgModal(event,&#39;" + fname + "&#39;);' src='images/" + fname +"/" + rndPics[i] + "' />";
    }
    $('.imgRnd').hide();
    $('.imgRnd').show(2000);
}


var imgurl;
function imgModal(event, fname) { //מגדיל את התמונה
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("imgBig");
    var captionText = document.getElementById("caption");
        document.getElementById("alt").innerText = event.target.alt.toString();
    //var alt = event.target.alt;

        modal.style.display = "block";
        modalImg.src = event.target.src;
        

    if (fname == 'heros') {//אם אנחנו בחידת בלאק ממבה
        captionText.innerHTML = "הראו לנאו את התמונה לקבלת משוב" //this.alt;
    }
    else {//אם אנחנו בחידת דרקון כחול
        var ImgCaptionText = "בחר את מיקום התמונה במשפט או סגור לביטול <br/> "

        var wordsInNiv = $('#WordsInNiv').text();
        for (var i = 1; i <= wordsInNiv; i++) {
            ImgCaptionText += "<input class='BtnNiv' onclick='NivImgClick(" + i.toString() + ");' id='btnNiv" + i.toString() + "' type='button' value='" + i.toString() + "' />   "
        }
        captionText.innerHTML = ImgCaptionText; 
        imgurl = modalImg.src;
    }

    //בלחיצה על כפתור הסגירה של ההגדלת תמונה
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";

        if (fname == 'heros') {
            rndPicsFunc('heros'); //קורא לפונקציה שמבצעת את הערבוב
        }
    }
}

//אפקט גלרייה בחידה 4 למעבר נוח
function picGallery(n) {
    var CurrentAlt = document.getElementById("alt").innerText;
    var newNum = n + parseInt(CurrentAlt);
    showNextPic(newNum);
}

function showNextPic(n) {
    var x = document.getElementsByClassName("imgRnd");
    if (n >= (x.length - 1)) { n = 0 }
    if (n < 0) { n = x.length -1 }
    var NextAlt= $('[alt=' + n.toString() + ']').attr('alt').toString();
    var NextSrc = $('[alt=' + n.toString() + ']').attr('src').toString();

    var modalImg = document.getElementById("imgBig");
    modalImg.alt = NextAlt;
    modalImg.src = NextSrc;

    document.getElementById("alt").innerText = NextAlt;
}


function NivImgClick(n) { 
    //לחיצה על כפתור כלשהו בתוך התמונה גדולה בחידת הדרקון
    //שולחת תמונה קטנה למיקום בתוך המסגרת המתאימה
    var modal = document.getElementById('myModal');
    modal.style.display = "none";


    var nivNum = $('#NivNum').text();
    var nivDiv = "#Niv" + nivNum.toString() + "_w" + n.toString();
    var imgTag = "<img id='Niv" + nivNum.toString() + "_Img" + + n.toString() +"' class='smallPicNivImg' src='" + imgurl +"' />";
    $(nivDiv).html(imgTag);
}

var peMefik;
var borAm;
function checkNiv(n) { //בדיקת המשפט בתוך חידת הדרקון
    var nivNames = new Array();
    var wordsInNiv = $('#WordsInNiv').text();

    for (var i = 1; i <= wordsInNiv; i++) {
        var id = "#Niv" + n.toString() + "_Img" + i.toString();
        var imgsrc = $(id).attr('src');

        try {//רק אם המשתמש לוחץ על כפתור בדוק בלי למלא את כל התמונות אז תציג משוב שלילי
            var index = imgsrc.lastIndexOf("/") + 1;
        }
        catch (err) {
            $("#Niv" + n + "Feedback").html("<img src='images/X.png' class='smallPicNivImg'/>");
        }

        var imgname = imgsrc.substr(index);
        nivNames.push(imgname);
    }

    var nivNum = $('#NivNum').text();
    if (peMefik != 1 && nivNames[0] == "pe.jpg" && nivNames[1] == "mefik.jpg" && nivNames[2] == "margliut.jpg") {
        peMefik = 1;
        good();
        nivNum++;
        $('#NivNum').text(nivNum);
        
    }

    else if (borAm != 1 && nivNames[0] == "bor.jpg" && nivNames[1] == "am.jpg" && nivNames[2] == "hahartz.jpg") {
        borAm = 1;
        good();
        nivNum++;
        $('#NivNum').text(nivNum);
        
    }
    else if (nivNames[0] == "enter.jpg" && nivNames[1] == "wine.jpg" && nivNames[2] == "out.jpg" && nivNames[3] == "secret.jpg") {
        good();
    }
    else {

        $("#Niv" + n + "Feedback").html("<img src='images/X.png' class='smallPicNivImg'/>");
    }

    function good() {
        alert("כל הכבוד וזה");
        $("#btnNiv" + n).hide();
        $("#Niv" + n + "_Img1").css("opacity", "0.7");
        $("#Niv" + n + "_Img2").css("opacity", "0.7");
        $("#Niv" + n + "_Img3").css("opacity", "0.7");
        if (n == 3) { $("#Niv" + n + "_Img4").css("opacity", "0.6"); }

        $("#Niv" + n + "Feedback").hide();
        $("#Niv" + n + "Feedback").html("<img src='images/V.png' class='smallPicNivImg'/>");
        $("#Niv" + n + "Feedback").show("slow");

        $("#Niv" + (n + 1)).css("display", "inline-flex");
        $("#Niv" + (n + 1) + "wrap").show("slow");
    };

    if ($('#NivNum').text() == "3") {
        $('#WordsInNiv').text("4");
    }

}


function w3_open() { //פתיחת תפריט האתר
    document.getElementById("main").style.marginRight = "33%";
    document.getElementById("mySidebar").style.width = "33%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';

    //אם ביו אר אל יש את מילת הקוד אז תראה את החידות בתפריט
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get('user');

    if (userParam == "AdminNav") {
        $('#aafId').removeClass("aafNone");
        $('#aafId').addClass("aafUnset");

        $("a").each(function () {
            var href = $(this).attr('href');
            $(this).attr("href", href + "?user=AdminNav");
        });
    }

    //לולאה שעוברת על כל התגיות א ואם התוכן שווה לדיב בעמוד אז תוסיף קלאס שצובע בכחול
    var activeNav = $('.activePageNav').text();
    $("a").each(function (i) { 
        if ($(this).text() == activeNav) {
            $(this).addClass("ActiveNav");
        }
});
}

function w3_close() { // סגירת תפריט האתר
    document.getElementById("main").style.marginRight = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}


function enterGame() { //כדי לעבור את עמוד השער יש להזין את הקוד הנכון
    var codeTxt = $('.codeTxt').val();

    if (codeTxt.toLowerCase() == 'naonao') {
        $('.wrongCode').hide();
        $('.rightCode').hide();
        $('.rightCode').slideDown("slow");

        setTimeout(function () {
            location.href = pageNavigat('riddle2_545.htm');
        }, 2000); 
    }
    else if (codeTxt.toLowerCase() == 'naonaoadmin') {
        location.href = 'riddle2_545.htm?user=AdminNav';
    }
    else {
        $('.wrongCode').hide();
        $('.wrongCode').slideDown("slow");
    }
}

function galleryCode() { //כדי לעבור את שאלת הגלרייה יש להזין את הקוד הנכון
    var codeTxt = $('.codeTxt').val();

    if (codeTxt == 1924) {
        $('.wrongCode').hide();
        $('.rightCode').hide();
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        $('.rightCode').slideDown("slow");

        setTimeout(function () {
            location.href = pageNavigat('riddle2part2_328.htm');
        }, 5000);
    }
    else {
        $('.wrongCode').hide();
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        $('.wrongCode').slideDown("slow");
    }
}

function SongCode() { //כדי לעבור את שאלת השיר יש להזין את הקוד הנכון
    var codeTxt = $('.codeTxt').val();

    if (codeTxt == 'נעמי שמר') {
        $('.wrongCode').hide();
        $('.rightCode').hide();
        $('.rightCode').slideDown("slow");

        setTimeout(function () {
            $('#txtSongRId').prop('disabled', true);
            $('#btnSongRId').prop('disabled', true);
            $('#Riddle2EndDiv').hide();
            $('#Riddle2EndDiv').show(1000);
        }, 2000);
    }
    else {
        $('.wrongCode').hide();
        $('.wrongCode').slideDown("slow");
    }
}

function Riddle2EndCode() { //כדי לעבור את השאלה האחרונה בחידה השניה יש להזין את הקוד הנכון
    var codeTxt2End = $('.codeTxt2End').val();

    if (codeTxt2End == 1965) {
        $('.codeTxt2End').prop('disabled', true);
        $('#btn2End').prop('disabled', true);
        $('.wrongCode2End').hide();
        $('.rightCode2End').hide();
        $('.rightCode2End').slideDown("slow");
        $('#btnGoToR3').slideDown("slow");
        
        setTimeout(function () {
          //  location.href = 'riddle2part2_328.htm';
        }, 2000);
    }
    else {
        $('.rightCode2End').hide();
        $('.wrongCode2End').hide();
        $('.wrongCode2End').slideDown("slow");
    }
}

function pageNavigat(href) {
    //בכל מעבר לעמוד חדש במידה ויש את מילת הקוד ביו אר אל אז תעביר אותה לעמוד הבא
    const urlParams = new URLSearchParams(window.location.search);
    const userParam = urlParams.get('user');

    if (userParam == "AdminNav") {
        return href + "?user=AdminNav";
    }
    else {
        return href;
    }
}

function whenEnter() {
    //בעת הקלדה בתיבת הטקסט לחיצה על אנטר או אישור במקלדת מפעילה את הכפתור
    $("#gateCodeTxt").keyup(function (event) {
        if (event.keyCode === 13) { $("#gateCodeBtn").click(); }
    });

    $("#Riddle2Txt1").keyup(function (event) {
        if (event.keyCode === 13) { $("#Riddle2Btn1").click(); }
    });


    $("#txtSongRId").keyup(function (event) {
        if (event.keyCode === 13) { $("#btnSongRId").click(); }
    });

    $("#codeTxt2EndId").keyup(function (event) {
        if (event.keyCode === 13) { $("#btn2End").click(); }
    });

    $("#Riddle3Txt").keyup(function (event) {
        if (event.keyCode === 13) { $("#Riddle3Btn").click(); }
    });
}

function Riddle3Btn() {
    $(".wrongCode").hide();
    $(".rightCode").hide();

    var abc = "אבגדהוזחטיכלמנסעפצקרשתךםןףץ";
    var abc2 = "abcdefghijklmnopqrstuvwxyz";
    var heGematria = "1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900";
    var arrGematria = heGematria.split(',');

    var endWord = " ";

    for (var j = 0; j < $('#Riddle3Txt').val().length; j++) {
        var txtChar = $('#Riddle3Txt').val().substr(j, 1);
        for (var i = 0; i < abc.length; i++) {
            if (txtChar == abc[i]) {
                endWord += arrGematria[i]
            }
            if (txtChar == abc2[i]) {
                endWord += arrGematria[i]
            }
        }
    };

    $('#Riddle3Txt').focus();

    odoo.default({ el: '.js-odoo', from: " " + $('#Riddle3Txt').val(), to: endWord, animationDelay: 1000 });


    setTimeout(function () {

        if ($('#Riddle3Txt').val() == "דיו") {

            $(".wrongCode").hide();
            $(".rightCode").show(1000);
        }
        else {
            $(".wrongCode").show(1000);
            $(".rightCode").hide();
        }

    }, 4000);
}
