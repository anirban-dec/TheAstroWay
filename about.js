let fun = document.getElementById("more");
let buton=document.getElementById("btnn");

function slide() {

    if (fun.style.display === "block") {
        fun.style.display = "none";
        buton.innerHTML="More"
        
    }
    else{
        fun.style.display = "block";
        buton.innerHTML="Less"

    }
    
}