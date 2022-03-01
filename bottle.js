img = ""
status = "";
objects = [];

function preload(){
    img = loadImage("bottle.jpeg");
}

function setup(){
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = 'Status: Detecting Objects';
}

function modelLoaded(){
console.log('modelLoaded');
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
        
    }
    console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i< objects.length; i++){
            document.getElementById("status").innerHTML= "Status: Object detected";
            document.getElementById("number_objects").innerHTML = "Number of Objects detected are:" + objects.length;
 
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%", objects[i].x+ 15, objects[i].y + 15 );
            noFill();
     stroke("#FF0000");
     rect(objects[1].x, objects[i].y, objects[i].width, objects[i].height); 
            
        }
     }

}