var imgs = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
    "img/img5.png"
];

var i =0;

document.getElementById("siguiente").addEventListener("click", insertar)

function insertar(){
    if (1<4){
        i++
    }
    document.getElementById("siguiente").setAttribute("src", imgs[i]);
}
document.getElementById("img").addEventListener("click", anterior);

function anterior(){
    if (i>0){
        i--
    }
    document.getElementById("img").setAttribute("src", imgs[i]);
}