var hamburger = document.querySelector("i");
var s = document.querySelector(".mobile ul");

hamburger.addEventListener("click", function(){
    // toggle mobile menu on off
    console.log("s");
    s.classList.toggle("off");
});