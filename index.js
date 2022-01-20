var n = document.querySelectorAll(".pio").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
            sound(this.innerHTML.toLowerCase());
            anime(this.innerHTML.toLowerCase());
    });
}
document.addEventListener("keypress",function(eve){
            sound(eve.key.toLowerCase());
            anime(eve.key.toLowerCase());
            
});
function anime(key){
    document.querySelector("."+key).classList.add("hvr");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("hvr");
    },100);
}
function sound(key){
    switch(key){
        case "z" : var audio = new Audio("sounds/key1.wav");
                   audio.play();break;
        case "x" : var audio = new Audio("sounds/key2.wav");
                   audio.play();break;
        case "c" : var audio = new Audio("sounds/key3.wav");
                   audio.play();break;
        case "v" : var audio = new Audio("sounds/key4.wav");
                   audio.play();break;
        case "b" : var audio = new Audio("sounds/key5.wav");
                   audio.play();break;
        case "n" : var audio = new Audio("sounds/key6.WAV");
                   audio.play();break;
        case "m" : var audio = new Audio("sounds/key7.WAV");
                   audio.play();break;
        default : console.log("invalid key");
                  break;
    }
}