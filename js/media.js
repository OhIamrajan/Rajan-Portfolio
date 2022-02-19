let width = screen.width;
let deskMedia = document.getElementById('for-default');  
let mobMedia = document.getElementById('media-mobile');  
let menuButt = document.getElementById('for-menu');  
if(width<500){
    menuButt.style.display = "block";
    deskMedia.style.display = "none";
    mobMedia.style.display = "none";
}
else if(width>=500){
    deskMedia.style.display = "block";
    mobMedia.style.display = "none";
    menuButt.style.display = "none";

}
menuButt.addEventListener('click',()=>{
    if(mobMedia.style.display == "none"){
        mobMedia.style.display = "block";
    }
    else if(mobMedia.style.display == "block"){
        mobMedia.style.display = "none";
    }
});