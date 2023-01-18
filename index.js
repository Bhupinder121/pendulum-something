function setup(){
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(0);
    stroke(0, 0, 255);
    noFill();
    for(let i = 0; i <= 400; i+=20){
        halfCircle(i);
    }
    // noFill();
    // bezier(0, height/2, width/2, 0, width/2, 0, width, height/2,)
}

function halfCircle(space){
    beginShape();
    curveVertex(0, height/2);
    curveVertex(0, height/2);

    
    curveVertex(width/2, height/2-space);


    curveVertex(width, height/2);
    curveVertex(width, height/2);
    endShape();
}