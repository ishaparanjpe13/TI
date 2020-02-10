let pressed = false;
let couleur = 0;
let cnv;

function setup() {
  let cnv = createCanvas(400, 400);
  colorMode(HSB, 90);
  //noStroke();
  btClick = createButton ("SaveDesign");
  btClick.mouseClicked(clickFn);
  
}

function draw() {
  if (pressed) {
    translate(width / 2, height / 2);
    ellipse(mouseX - width / 2, mouseY - height / 2, 50);
    for (let i = 0; i < 16; i++) {
      fill(map(i, 0, 15, 0, 100), 100, 100);
      rotate(PI / 8);
      ellipse(mouseX - width / 2, mouseY - height / 2, 50);
    }
  }

}
function clickFn() {
  save("myCanvas.jpg");
  if (btClick== true){
    
  }
    
}


function mousePressed() {
  pressed = true;
}

function mouseReleased() {
  pressed = false;
}