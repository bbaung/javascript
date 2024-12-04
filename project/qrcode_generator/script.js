//  alert("worked")
let imgBox = document.querySelector("#imgBox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");

function qrGenerate(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}

