var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var pony1_width=120;
var pony1_height=70;
var pony1_img="Glitter Cloud.png";
var pony1_x=730;
var pony1_y=30;

var pony2_width=120;
var pony2_height=70;
var pony2_img="Twilight Sparkle.png";
var pony2_x=40;
var pony2_y=40;

var bg_img="Racetrack.JPG";

var bg_img_tag,
pony1_img_tag,
pony2_img_tag;

function add(){
    bg_img_tag=new Image();

    bg_img_tag.src=bg_img;

    bg_img_tag.onload=uploadbackgroundimg;

    pony1_img_tag=new Image();
    pony1_img_tag.src=pony1_img;
    
    pony1_img_tag.onload=uploadpony1img;

    pony2_img_tag=new Image();
    pony2_img_tag.src=pony2_img;
    
    pony2_img_tag.onload=uploadpony2img;
}

function uploadbackgroundimg(){
    ctx.drawImage(bg_img_tag,0,0, canvas.width ,canvas.height);      
   }
   
   function uploadpony1img(){
       ctx.drawImage(pony1_img_tag,pony1_x,pony1_y,pony1_width,pony1_height);
   }

   function uploadpony2img(){
    ctx.drawImage(pony2_img_tag,pony2_x,pony2_y,pony2_width,pony2_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
      
        console.log("You pressed UP")
    }

    if(keyPressed == '39'){
      
        console.log("You pressed RIGHT")
    }
    if(keyPressed == '40'){
      
        console.log("You pressed DOWN")
    }
    if(keyPressed == '37'){
      
        console.log("You pressed LEFT")
    }
    if(keyPressed == '65'){
      
        console.log("You pressed the key A")
    }
    if(keyPressed == '87'){
      
        console.log("You pressed the key W")
    }
    if(keyPressed == '68'){
      
        console.log("You pressed the key D")
    }
    if(keyPressed == '83'){
      
        console.log("You pressed the key S")
    }
}