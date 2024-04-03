var col = {
    r: 0,
    g: 0,
    b: 0,
}

var curve = {
    vertex_x: 0,
    vertex_y: 0,
    control_x: 0,
    control_y: 0,
    final_x: 0,
    final_y: 0,
}

function setup() {
    createCanvas(400, 400);
    noLoop();
    // frameRate(2);
}

function draw() {
    background(220);
    let max_curves = 5;
    for (let i = 0; i < max_curves; i++) {
        make_curve()
    }
}

function make_curve() {
    stroke_count = random(0, 200);
    vertex_multiplier = random(0, 5)
    x_multiplier = random(0, 20);
    y_multiplier = random(0, 5);

    randomRgbColor();
    stroke(col.r, col.g, col.b);
    strokeWeight(1);
    noFill();

    randomCurve();

    for (let i = 0; i < stroke_count; i++) {
        beginShape();
        vertex(
            curve.vertex_x + i * vertex_multiplier, 
            curve.vertex_y - i * vertex_multiplier
        );
        quadraticVertex(
            curve.control_x + i * x_multiplier, 
            curve.control_y * y_multiplier, 
            curve.final_x, 
            curve.final_y);
        endShape();
    }
}

function randomRgbColor() {
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);
}

function randomCurve() {
    curve.vertex_x = random(0,399);
    curve.vertex_y = random(0,399);
    curve.control_x = random(0,99);
    curve.control_y = random(0,99);
    curve.final_x = random(0,399);
    curve.final_y = random(0,399);
}
