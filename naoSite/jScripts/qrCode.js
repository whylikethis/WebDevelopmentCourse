

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
