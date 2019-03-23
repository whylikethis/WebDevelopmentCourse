// פונקציה אנונימית שתקרה בהרצת העמוד-  לפתיחה, סגירה תפריט ניווט צדדי
$(document).ready(function () {

    //שליפת הג'ייסון והצבת סרטוני הווידאו בתוך העמוד שלנו באמצעות לולאה
    //  משתנה שמכיל בתוכו את הקישורים המובילים אל התוכן שיש להציב
    var content = document.getElementsByClassName('content')
    //לולאה שעוברת על כל התכנים במערך שבג'ייסון ומציבה אותם במקומם'
    for (var i = 0; i < content.length; i++) {
        content[i].src = json['content' + (i + 1)]
    }

    var sidebar = document.getElementById('sidebar')
    //משתנה שמכיל את האלמנטים לפי הקלאס במיקום הראשון
    var sidebarOverlay = document.getElementsByClassName('sidebar-overlay')[0]
    var container = document.getElementsByClassName('container')[0]
    var sidebarBtnClose = document.getElementById('sidebarBtnClose')
    var sidebarLinks = document.getElementsByClassName('sidebar-link')
    var sidebarBtnOpen = document.getElementById('sidebarBtnOpen')
    //הגדרה שתפריט הניווט יהיה סגור בפתיחה
    sidebar.style.visibility = "hidden";

    //הגדרות בפתיחת תפריט הניווט 
    var openSidebar = function () {
        sidebar.style.visibility = "visible";
        sidebarOverlay.style.right = '0'
        sidebar.style.right = '0'
    }
    //הגדרות לסגירת תפריט הניווט 

    var closeSidebar = function (e) {
        e.cancelBubble = true
        sidebarOverlay.style.right = '-100%'
        sidebar.style.right = '-50%'
    }

    //ליסנרים לפעולת הלחיצה המגדירים פתיחה או סגירת תפריט הניווט
    sidebarOverlay.addEventListener('click', closeSidebar)
    sidebarBtnClose.addEventListener('click', closeSidebar)
    sidebarBtnOpen.addEventListener('click', openSidebar)

    //לולאה שעוברת על כל ההקישורים בתפריט הניווט וסוגרת את תפריט הניווט לאחר לחיצה על אחד מהנושאים
    for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener('click', closeSidebar)
    }
});

// פונקציה ששולחת את המשתמש לראש העמוד בלחיצה על הכפתור
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// כאשר המשתמש לוחץ על הכפתור הוא יגיע לראש העמוד
function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

