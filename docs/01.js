

document.getElementById("perfil").style.display ="none";
document.getElementById("portafolio").style.display ="none";
function home(e){
    document.getElementById("home").style.display ="";
    document.getElementById("perfil").style.display ="none";
    document.getElementById("portafolio").style.display ="none";

}
function perfil(e){
    document.getElementById("perfil").style.display ="";
    document.getElementById("home").style.display ="none";
    document.getElementById("portafolio").style.display ="none";
}
function portafolio(e){
    
    document.getElementById("portafolio").style.display ="";
    document.getElementById("perfil").style.display ="none";
    document.getElementById("home").style.display ="none";

}