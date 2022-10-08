

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

   let buttonsInner = this.innerHTML;
   makeSound(buttonsInner);
   animation(buttonsInner);

});
}



document.addEventListener("keydown", function(e) {

 makeSound(e.key);
 animation(e.key);

});





function makeSound(key) {

       switch (key) {
    case "w":
        let crash = new Audio("crash.mp3");
        crash.currentTime= 0;
        crash.play();
        break;

    case "a":
        let kick = new Audio("kick-bass.mp3");
         kick.currentTime= 0;
        kick.play();
        break;

    case "s":
        let snare = new Audio("snare.mp3");
        snare.currentTime= 0;   
        snare.play();
        break;   
        
    case "d":
        let tom1 = new Audio("tom-1.mp3");
        tom1.currentTime= 0;   
        tom1.play();
        break;        
        
    case "j":
        let tom2 = new Audio("tom-2.mp3");
         tom2.currentTime= 0;  
        tom2.play();
        break;
        
    case "k":
        let tom3 = new Audio("tom-3.mp3");
        tom3.currentTime= 0;   
        tom3.play();
        break; 
        
    case "l":
        let tom4 = new Audio("tom-4.mp3");
        tom4.currentTime= 0;   
        tom4.play();
        break;     

    default: console.log(buttonsInner);
   }

}

function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    }, 100);



}













