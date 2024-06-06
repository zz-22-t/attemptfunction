
var step = 5;///time
var col = {
  r: 0,
  g: 0,
  b: 0,
}///color

//let r = 1;
let angle = 0;
let font;
let points;[];


var rad = 1

function preload() {
  
  font= loadFont('assets/SpaceMono-Regular.ttf')
  ///font= loadFont('assets/SpaceMono-Bold.ttf')
  ///font= loadFont('assets/NanumGothicCoding-Bold.ttf')
}



function pointtoShape(x,y,size){
  
  points = font.textToPoints("Pizza",x,y,size ,{
   sampleFactor:.1536,
    //simplifyThreshold:0
  });
}

function setup() {
  createCanvas(800, 800);
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  noStroke();
  fill(col.r, col.g, col.b);
  textSize(15);
  textFont(font);
  
  pointtoShape(100,500,150)
  ///points = font.textToPoints("Z A I R A",50,200,70 ,{
    ///sampleFactor:0.6,
   /// simplifyThreshold:0
  ///});


   
print(points);

  angleMode(DEGREES);
}


function draw() {
  background(0);


 
  ///animate text
  r = pow(1.8,rad);
  for (let i = 0; i < points.length; i++) {
    ellipse(points[i].x+r*sin(angle + i*15),points[i].y,5,5);
    }

    ///angle += 0;
    
   
      }




///function mouseClicked() {
///step = step + 1;
///rad = rad +1;

///}