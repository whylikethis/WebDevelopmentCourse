﻿$(document).ready(function () {

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
            "<img class='imgRnd' id='" + rndPics[i] + "' onclick='itaiimgmodal(event);' src='images/heros/" + rndPics[i] + "' />";
    }
    $('.imgRnd').hide();
    $('.imgRnd').show(2000);
}

function itaiimgmodal(event) { //מגדיל את התמונה
    var modal = document.getElementById('myModal');
    var idname = event.target.id
   // var img = document.getElementById(idname.toString());
    var modalImg = document.getElementById("img01");
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
}
function w3_close() { // סגירת תפריט האתר
    document.getElementById("main").style.marginRight = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}


function enterGame() { //כדי לעבור את עמוד השער יש להזין את הקוד הנכון
    var codeTxt = $('#codeTxt').val();

    if (codeTxt == 'about') {
        $('.rightEnterCode').hide();
        $('.rightEnterCode').show(1000);

        setTimeout(function () {
            location.href = 'about.htm';
        }, 2000); 
    }
    else {
        $('.wrongEnterCode').hide();
        $('.wrongEnterCode').show(1000);
    }
}


$('.qrPage').ready(function startScanQR() {
    //סריקת קוד QR
    let scanner = new Instascan.Scanner({ video: document.getElementById('QrPreview') });

    scanner.addListener('scan', function (content) {
        console.log(content);
        alert(content);
        window.open(content, "_blank");
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });


});

//החלפת מצלמות
var CountCameras = 0;
function changeCams1() {
    //alert("im here");
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {

            alert("u have " + cameras.length + " cams on your divice. CountCameras: " + CountCameras);
            CountCameras++;
            if (cameras.length > CountCameras) {
                alert("im in if");
                scanner.start(cameras[CountCameras]);
            }
            else {
                alert("im in else");
                scanner.start(cameras[0]);
                CountCameras = 0;
            }

        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });
}