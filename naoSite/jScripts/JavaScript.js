$(document).ready(function () {
    $(".naoNav").load("nav.html"); //טוען את התפריט
    
    $('#main').hide();
    $('#main').slideDown(1000);

    //אפשרות לפתיחה או סגירה של התפריט בסוויפ
    $('body').swipe({
        swipe: function (event, direction, distance, duration, fingerCount) {
            switch (direction) {
                case "left":
                   
                    w3_open();
                    break;
                case "right":
                    w3_close();
                    break;
            }
        }

    });

});

var rndPics = [];
function loadPics() { //עבור חידת התמונות 
    //טוען את התמונות מקובץ ג'ייסון
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            JsonPicsObj = JSON.parse(this.responseText);
            for (i in JsonPicsObj) {
                rndPics.push(JsonPicsObj[i]);
            }
            rndPicsFunc(); //קורא לפונקציה שמבצעת את הערבוב
        }
    };
    xmlhttp.open("GET", "imgJson.json", true);
    xmlhttp.send();

}

function rndPicsFunc() { //פונקציה שמבצעת את ערבוב התמונות
    document.getElementById("imgdiv").innerHTML = "";
    rndPics.sort(function (a, b) { return 0.5 - Math.random() });

    for (i in rndPics) {
        document.getElementById("imgdiv").innerHTML +=
            "<img class='imgRnd' id='" + rndPics[i] + "' onclick='imgModal(event);' src='images/heros/" + rndPics[i] + "' />";
    }
    $('.imgRnd').hide();
    $('.imgRnd').show(2000);
}

function imgModal(event) { //מגדיל את התמונה
    var modal = document.getElementById('myModal');
    //var idname = event.target.id;
   // var img = document.getElementById(idname.toString());
    var modalImg = document.getElementById("imgBig");
    var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = "הראו לנאו את התמונה לקבלת משוב" //this.alt;
    

    //בלחיצה על כפתור הסגירה של ההגדלת תמונה
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
        rndPicsFunc(); //קורא לפונקציה שמבצעת את הערבוב
    }
}




function w3_open() { //פתיחת תפריט האתר
    document.getElementById("main").style.marginRight = "30%";
    document.getElementById("mySidebar").style.width = "30%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';


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

    if (codeTxt == 'naonao') {
        $('.rightCode').hide();
        $('.rightCode').slideDown("slow");

        setTimeout(function () {
            location.href = 'riddle2_545.htm';
        }, 2000); 
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
            location.href = 'riddle2part2_328.htm';
        }, 5000);
    }
    else {
        
        $('.wrongCode').hide();
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
        $('.wrongCode').slideDown("slow");
       // $('.wrongCode').show(1000);
        
      // location.href = '#bottomPage';
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