/*//////////////////////////////MOVE/////////////////////////*/

let btn1=document.querySelector("#btn1");
let scene=document.querySelector("#scene");
btn1.addEventListener("click", move);

function move(event){
    event.preventDefault();

    if(scene.classList.contains("move30")){
        scene.classList.remove("move30");
    }

    if(scene.classList.contains("movefrom30")){
        scene.classList.remove("movefrom30");
    }



    if(scene.classList.contains("glow")){
        scene.classList.remove("glow");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }



    scene.classList.toggle("move");

}

/*//////////////////////////////MOVE 30/////////////////////////*/

let btn2=document.querySelector("#btn2");

btn2.addEventListener("click", move30);

function move30(event){

    event.preventDefault();

    if(scene.classList.contains("move")){
        scene.classList.remove("move");
    }

    if(scene.classList.contains("movefrom30")){
        scene.classList.remove("movefrom30");
    }



    if(scene.classList.contains("glow")){
        scene.classList.remove("glow");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }


    scene.classList.toggle("move30");
}

/*//////////////////////////////MOVE FROM 30/////////////////////////*/

let btn3=document.querySelector("#btn3");

btn3.addEventListener("click", movefrom30);

function movefrom30(event){

    event.preventDefault();

    if(scene.classList.contains("move30")){
        scene.classList.remove("move30");
    }

    if(scene.classList.contains("move")){
        scene.classList.remove("move");
    }



    if(scene.classList.contains("glow")){
        scene.classList.remove("glow");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }


    scene.classList.toggle("movefrom30");
}

/*//////////////////////////////JUMP/////////////////////////*/

let btn4=document.querySelector("#btn4");
let mario=document.querySelector("#mario")
btn4.addEventListener("click", jump);

function jump(event){

    event.preventDefault();

    if(mario.classList.contains("fade")){
        mario.classList.remove("fade");
    }

    if(mario.classList.contains("fallD")){
        mario.classList.remove("fallD");
    }



    if(mario.classList.contains("speak")){
        mario.classList.remove("speak");
    }

    if(mario.classList.contains("shake")){
        mario.classList.remove("shake");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    mario.classList.toggle("jump");
}

/*//////////////////////////////FADE/////////////////////////*/

let btn5=document.querySelector("#btn5");
btn5.addEventListener("click", fade);

function fade(event){

    event.preventDefault();

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("fallD")){
        mario.classList.remove("fallD");
    }



    if(mario.classList.contains("speak")){
        mario.classList.remove("speak");
    }

    if(mario.classList.contains("shake")){
        mario.classList.remove("shake");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }

     if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    mario.classList.toggle("fade");
}


/*//////////////////////////////GLOW/////////////////////////*/

let btn6=document.querySelector("#btn6");
btn6.addEventListener("click", glow);

function glow(event){

     event.preventDefault();

    if(scene.classList.contains("move30")){
        scene.classList.remove("move30");
    }

    if(scene.classList.contains("movefrom30")){
        scene.classList.remove("movefrom30");
    }



    if(scene.classList.contains("move")){
        scene.classList.remove("move");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }



    scene.classList.toggle("glow");
}


/*//////////////////////////////Fall DOWN/////////////////////////*/

let btn7=document.querySelector("#btn7");
btn7.addEventListener("click", fallD);

function fallD(event){

    event.preventDefault();

    if(mario.classList.contains("fade")){
        mario.classList.remove("fade");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }



    if(mario.classList.contains("speak")){
        mario.classList.remove("speak");
    }

    if(mario.classList.contains("shake")){
        mario.classList.remove("shake");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }


    mario.classList.toggle("fallD");
}


/*////////////////////////////SPEAK/////////////////////////*/

let btn8=document.querySelector("#btn8");
btn8.addEventListener("click", speak, openAudio);

function speak(event){

    event.preventDefault();

    if(mario.classList.contains("fade")){
        mario.classList.remove("fade");
    }

    if(mario.classList.contains("fallD")){
        mario.classList.remove("fallD");
    }



    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("shake")){
        mario.classList.remove("shake");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    mySound.play();
    mario.classList.toggle("speak");

}

function openAudio(){

    document.getElementById("mySound").style.width = "40%";
}

/*//////////////////////////////SHAKE/////////////////////////*/

let btn9=document.querySelector("#btn9");
btn9.addEventListener("click", shake);

function shake(event){

    event.preventDefault();

    if(mario.classList.contains("fade")){
        mario.classList.remove("fade");
    }

    if(mario.classList.contains("fallD")){
        mario.classList.remove("fallD");
    }



    if(mario.classList.contains("speak")){
        mario.classList.remove("speak");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }

    if(mario.classList.contains("cool2")){
        mario.classList.remove("cool2");
    }

    if(scene.classList.contains("cool")){
        scene.classList.remove("cool");
    }

    mario.classList.toggle("shake");
}

/*//////////////////////////////COOL/////////////////////////*/

let btn10=document.querySelector("#btn10");
btn10.addEventListener("click", cool);

function cool(event){

    event.preventDefault();

    if(mario.classList.contains("fade")){
        mario.classList.remove("fade");
    }

    if(mario.classList.contains("fallD")){
        mario.classList.remove("fallD");
    }



    if(mario.classList.contains("speak")){
        mario.classList.remove("speak");
    }

    if(mario.classList.contains("shake")){
        mario.classList.remove("shake");
    }

    if(mario.classList.contains("jump")){
        mario.classList.remove("jump");
    }


    if(scene.classList.contains("move30")){
        scene.classList.remove("move30");
    }

    if(scene.classList.contains("movefrom30")){
        scene.classList.remove("movefrom30");
    }



    if(scene.classList.contains("glow")){
        scene.classList.remove("glow");
    }

    if(scene.classList.contains("jump")){
        scene.classList.remove("jump");
    }


    mario.classList.toggle("cool2");
    scene.classList.toggle("cool");
}

/*////////////////////////////////////////////AUDIO////////////////////////////*/

let mySound=document.querySelector("#mySound");
let playBtn=document.querySelector("#play-btn");
let pauseBtn=document.querySelector("#pause-btn");
let stopBtn=document.querySelector("#stop-btn");
let volume15Btn=document.querySelector("#volume15-btn");
let volume100Btn=document.querySelector("#volume100-btn");

playBtn.addEventListener("click", playSound)
pauseBtn.addEventListener("click", pauseSound)
stopBtn.addEventListener("click", stopSound)
volume15Btn.addEventListener("click", volume15)
volume100Btn.addEventListener("click", volume100)

function playSound(){
    mySound.play();
}

function pauseSound(){
    mySound.pause();
}

function stopSound(){
    mySound.pause();
    mySound.currentTime=0;
}

function volume15(){
    mySound.volume=0.15;
}

function volume100(){
    mySound.volume=1;
}


