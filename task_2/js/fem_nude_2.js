let size;
let d = 40;
grid_count = 10;

function setup() {
    createCanvas(400, 400);
    size = width/grid_count;
    angleMode(DEGREES);
}
  
function draw() {
  background(255, 205, 252);
  draw_figure();
}

function draw_figure(){
  stroke(0);
  // noFill()
  // for(let i = 0; i < grid_count; i++) {
  //   for(let j = 0; j < grid_count; j++) {
  //     rect(i*size, j*size, size)
  //   }
  // }

  noStroke();
  fill(255, 51, 240);

  // arm pit
  arc(1*size, 0*size, d, d, 180, 270);
  arc(2*size, 0*size, d, d, 90, 180);
  // arc(0*size, 0*size, d, d, 0, 90);
  arc(2*size, 1*size, d, d, 0, 90);
  arc(1*size, 2*size, d, d, 0, 90);
  arc(1*size, 3*size, d, d, 180, 270);
  arc(0*size, 3*size, d, d, 0, 90);

  arc(2*size, 2*size, d, d, 90, 180);
  arc(2*size, 3*size, d, d, 270, 0);
  arc(3*size, 3*size, d, d, 0, 180);
  arc(3*size, 4*size, d, d, 90, 270);

  // right breast
  arc(8*size, 1*size, d, d, 90, 0);
  arc(8*size, 2*size, d, d, 270, 0);
  arc(9*size, 2*size, d, d, 90, 180);
  arc(9*size, 3*size, d, d, 180, 270);
  arc(8*size, 3*size, d, d, 0, 90);
  arc(8*size, 4*size, d, d, 90, 270);
  arc(7*size, 4*size, d, d, 180, 270);

  // left breast
  arc(3*size, 3*size, d, d, 270, 0);
  arc(3*size, 2*size, d, d, 90, 180);
  arc(5*size, 2*size, d, d, 0, 90);
  arc(5*size, 3*size, d, d, 180, 270);
  arc(4*size, 3*size, d, d, 0, 180);
  arc(4*size, 2*size, d, d, 0, 270);
  
  // hip
  arc(8*size, 4*size, d, d, 180, 270);
  arc(8*size, 5*size, d, d, 270, 0);
  arc(9*size, 5*size, d, d, 90, 180);

  // hip
  arc(3*size, 5*size, d, d, 0, 90);
  arc(3*size, 6*size, d, d, 90, 270);
  arc(2*size, 7*size, d, d, 270, 90);
  arc(2*size, 8*size, d, d, 90, 270);
  arc(2*size, 9*size, d, d, 0, 360);
  arc(2*size, 10*size, d, d, 0, 360);

  arc(3*size, 5*size, d, d, 270, 0);
  arc(9*size, 6*size, d, d, 270, 90);
  arc(9*size, 7*size, d, d, 270, 0);
  arc(10*size, 7*size, d, d, 90, 180);
  arc(10*size, 8*size, d, d, 180, 270);

  // belly button
  arc(6*size, 5*size, d, d, 0, 90)
  arc(6*size, 6*size, d, d, 270, 0)

  // stomach
  arc(5*size, 8*size, d, d, 90, 180);
  arc(5*size, 9*size, d, d, 270, 0);
  arc(8*size, 8*size, d, d, 180, 90);
  arc(8*size, 9*size, d, d, 180, 270);
  // arc(6*size, 10*size, d, d, 180, 270);
  arc(6*size, 9*size, d, d, 90, 180);
  arc(7*size, 9*size, d, d, 0, 90);
  arc(6*size, 10*size, d, d, 270, 0);
  arc(7*size, 10*size, d, d, 180, 270);

  // shading
  
  fill(255, 138, 247);
  
  // right
  arc(7*size, 3*size, d, d, 180, 270);
  arc(7*size, 3*size, d, d, 0, 90);
  arc(7*size, 4*size, d, d, 90, 270);
  arc(7*size, 5*size, d, d, 270, 0);
  arc(8*size, 5*size, d, d, 90, 180);
  arc(8*size, 6*size, d, d, 90, 0);
  arc(8*size, 7*size, d, d, 270, 90);
  // arc(8*size, 8*size, d, d, 180, 270);
  arc(9*size, 7*size, d, d, 90, 180);
  arc(7*size, 8*size, d, d, 0, 90);
  arc(9*size, 8*size, d, d, 0, 90);

  // left side
  arc(5*size, 7*size, d, d, 90, 180);
  arc(4*size, 4*size, d, d, 270, 0);
  arc(5*size, 5*size, d, d, 180, 270);
  arc(4*size, 5*size, d, d, 0, 90);
  arc(4*size, 8*size, d, d, 0, 270);

  arc(6*size, 1*size, d, d, 180, 270);
  arc(6*size, 2*size, d, d, 270, 0);
  arc(6*size, 3*size, d, d, 180, 270);
  arc(6*size, 7*size, d, d, 270, 0);
  arc(6*size, 7*size, d, d, 90, 180);

  // collar bone
  arc(2*size, 2*size, d, d, 180, 270);
  arc(2*size, 2*size, d, d, 0, 90);
  arc(2*size, 1*size, d, d, 270, 0);
  arc(1*size, 2*size, d, d, 270, 0);
  arc(1*size, 2*size, d, d, 90, 180);
  arc(0*size, 3*size, d, d, 270, 0);
}
