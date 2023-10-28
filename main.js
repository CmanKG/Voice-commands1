function setup(){
    canvas=createCanvas(900,600)
    screen_width=window.innerWidth;
}
x=0
y=0
function preload(){
    loadimage="red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg"
}
drawapple=""
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
document.getElementById("status").innerHTML="system is listening please speak"
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="speech has been recognised as"+content
    if (Number.isInteger(to_number)) {
       x=Math.floor(Math.random()*900) 
       y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="started drawing apple"
    drawapple="set"  
    to_number=Number(content);
    }
    }
     function draw(){
        if (drawapple=="set") {
        radius=Math.floor(Math.random()*100) 
        document.getElementById("status").innerHTML = to_number + "Apples drawn";
        apple(x,y,radius)
        document.getElementById("status").innerHTML="apple is drawn"
        drawapple=""
        }
     }
function speak(){
    call_speak()
}