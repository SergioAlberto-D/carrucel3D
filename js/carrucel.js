var imgs = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

var i =0;

document.getElementById("siguiente").addEventListener("click", insertar)

function insertar(){
    if (1<4){
        i++
    }
    document.getElementById("siguiente").setAttribute("src", imgs[i]);
}
document.getElementById("anterior").addEventListener("click", anterior);

function anterior(){
    if (i>0){
        i--
    }
}