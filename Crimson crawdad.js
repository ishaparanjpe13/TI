function setup() {
  createCanvas(400, 400);
  fill(255,120);
  for(let i =0; i<width;i+=3)
  {
    let n=map(i,0,width,3,12);
    polygon(i,height/2,i/5,n);
  }
}

function draw() {
  background(220,12);
}
function mouseClicked()
{
polygon(mouseX,mouseY,50,random(3,9));
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    //vertex(sx, sy,12,20);
    ellipse(sx,sy,10,20);
  }
  endShape(CLOSE);
}
