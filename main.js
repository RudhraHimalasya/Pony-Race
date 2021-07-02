var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var pony1_width=200;
var pony1_height=130;
var pony1_img="Glitter Cloud.png";
var pony1_x=2;
var pony1_y=400;

var pony2_width=200;
var pony2_height=130;
var pony2_img="Twilight Sparkle.png";
var pony2_x=2;
var pony2_y=170;

var bg_img="Untitled.png";

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
      
        console.log("You pressed UP");
        up();
       
    }

    if(keyPressed == '39'){
      
        console.log("You pressed RIGHT");
        right();
   
        
    }
    if(keyPressed == '40'){
      
        console.log("You pressed DOWN");
        down();
    }
    if(keyPressed == '37'){
      
        console.log("You pressed LEFT");
        left();
    }
    if(keyPressed == '65'){
      
        console.log("You pressed the key A");
        a();
    }
    if(keyPressed == '87'){
      
        console.log("You pressed the key W");
        w();
    }
    if(keyPressed == '68'){
      
        console.log("You pressed the key D");
        d();
        
    }
    if(keyPressed == '83'){
      
        console.log("You pressed the key S");
        s();
    }
    if(pony1_x > 680){
        console.log("Glitter Sparkle has Won");
        document.getElementById('game_status').innerHTML="Glitter Sparkle has won!!";
        pony1_x=2;
        pony2_x=2;
        pony2_y=170;
        pony1_y=400;
    }
    if(pony2_x > 680){
        console.log("Twilight Sparkle has Won");
        document.getElementById('game_status').innerHTML="Twilight Sparkle has won!!";
        pony1_x=2;
        pony2_x=2;
        pony2_y=170;
        pony1_y=400;
    }
}


function up() {
    if(pony1_y>=380){
        pony1_y=pony1_y-10;
        console.log("pony1 X ="+pony1_x+ " pony1 Y="+pony1_y);
        uploadbackgroundimg();
        uploadpony1img();
        uploadpony2img();
    }
}
function down() {
    if(pony1_y<400){
        pony1_y=pony1_y+10;
        console.log("pony1 X ="+pony1_x+ " pony1 Y="+pony1_y);
        uploadbackgroundimg();
        uploadpony1img();
        uploadpony2img();
    }
}
function left() {
    if(pony1_x>=20){
        pony1_x=pony1_x-10;
        console.log("pony1 X ="+pony1_x+ " pony1 Y="+pony1_y);
        uploadbackgroundimg();
        uploadpony1img();
        uploadpony2img();
    }
}
function right() {
    if(pony1_x<=790){
        pony1_x=pony1_x+10;
        console.log("pony1 X ="+pony1_x+ " pony1 Y="+pony1_y);
        uploadbackgroundimg();
        uploadpony1img();
        uploadpony2img();

    }
}


function w() {
    if(pony2_y>=170){
        pony2_y=pony2_y-10;
        console.log("pony2 X ="+pony2_x+ " pony2 Y="+pony2_y);
        uploadbackgroundimg();
        uploadpony2img();
        uploadpony1img();
    }
}

function s() {
    if(pony2_y<=175){
        pony2_y=pony2_y+10;
        console.log("pony2 X ="+pony2_x+ " pony2 Y="+pony2_y);
        uploadbackgroundimg();
        uploadpony2img();
        uploadpony1img();
    }
}
function d() {
    if(pony2_x<=790){
        pony2_x=pony2_x+10;
        console.log("pony2 X ="+pony2_x+ " pony2 Y="+pony2_y);
        uploadbackgroundimg();
        uploadpony2img();
        uploadpony1img();
    }
}

function a() {
    if(pony2_x>=20){
        pony2_x=pony2_x-10;
        console.log("pony2 X ="+pony2_x+ " pony1 Y="+pony2_y);
        uploadbackgroundimg();
        uploadpony2img();
        uploadpony1img();
    }
}

