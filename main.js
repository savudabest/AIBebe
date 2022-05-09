Status = "";
BEBE = "";

function preload(){
    BEBE = LoadImage("ellbeeveeee.jpg");
}

function setup() {
	canvas = createCanvas(640,350);
    canvas.position(315, 200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);

}

function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    object_detector.detect(BEBE,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(BEBE,0,0,640,350);
}