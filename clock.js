function setup () {
  createCanvas (400,400);
  angleMode (DEGREES);
}
function draw () {
  background (0);
  
  let hr = hour ();
  let mn = minute();
  let sc = second ();

strokeWeight (8);
  stroke (255,100,150);
  noFill ();
  let end1 = map(sc,0,width,0,360);
  arc (200, 200, 300, 300, 0,end1);
  
  stroke (150,100,255);
  let end2 = map(mn,0,60,0,360);
  arc (200, 200, 280, 280, 0,end2);
  
  stroke (150,255,100);
  let end3 = map(hr,0,12,0,360);
  arc (200, 200, 260, 260, 0,end3);
  
  //strokeWeight (4);
  //stroke (255);
  //noFill ();
 //ellipse (200, 200, 300, 300);
  
  
  
  fill (255);
noStroke ();
text (hr + ':' + mn + ':' + sc , 10, 200);
}