
let p , q;

function setup() {
  createCanvas(400, 400);
  p = 0;
  q = width;
}

function draw() {
  background(220);
  
  let w = 55;
  let h = 80;
  let a = 80;
  let b = 55;
  rect(p,height/3-h/2,w,h);
  rect(q,width/2-w/2,a,b);
  p = p + 5;
  if(p > width) {
    p = 0;
  }
  q = q - 5;
  if ( q < 0){
    q = 640;
  }
  
 
}

