let btn = document.querySelector(".bnt")
let spennr = document.querySelector(".spneer ")
let a = document.querySelector(".boon")

function gg(){
    if(btn.textContent == "dark mood"){
        btn.textContent = "light  mood";
        document.body.style.backgroundColor = "black"      
       }
    else{
        btn.textContent = "dark mood";
        document.body.style.backgroundColor = "white"

     }
    
}  
window.onload = function(){
     spennr.classList = "hide"
}





  