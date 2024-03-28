function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
  left_hip();
  right_thigh();
  left_waist();
  inner_thigh();
  belly_button();
  right_waist();
}

function left_hip() {
  // Diagram to show how the quadratic vertex is plotted,
  // as well as representing the "left hip" of the figure.
  stroke('black');
  strokeWeight(5);
  point(50, 350);
  point(120, 200);
  point(150, 210);
  
  stroke('red');
  strokeWeight(1);
  noFill();
  
  beginShape();
    vertex(50, 350);
    quadraticVertex(120, 200, 150, 210);
  endShape();
}


function right_thigh() {
  let stroke_count = 10;
  let thigh_thickness = 5;
  // let thigh_length = 130;
  let thigh_length = 40;

  stroke('black');
  strokeWeight(5);
  // vertex plotted
  point(thigh_length, 300);
  // final x and y coordinates plotted
  point(245, 260);

  stroke('red');
  strokeWeight(1);
  noFill();

  for (let i = 0; i < stroke_count; i++) {
    beginShape();
      vertex(thigh_length, 300);
      quadraticVertex(160+i*13, 320+i*thigh_thickness, 245, 260+i);
    endShape();
    }
}

function left_waist() {
  stroke('black');
  bezier(196, 185, 263, 124, 199, 131, 275, 143);
}

function belly_button() {
  // # TODO: How can I rotate/stretch?
  ellipse(215, 212, 4, 6);
}

function inner_thigh() {
  bezier(201, 260, 128, 256, 162, 280, 160, 247);
}

function right_waist() {
  arc(310, 240, 110, 50, PI, PI + QUARTER_PI);
}
