function setup() {
  createCanvas(400, 400);
  p=0;
}
function draw(){
background(220,540,180,2);
  let w=55;
  let h=80;
  rect(p,height/2-h/2,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
 
  rect(width/2-w/2,p,w,h);
  p=p+1;
  if(p>height)
p=0;
}