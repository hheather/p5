function setup() {
    createCanvas(400, 400);
    background(220);
    noLoop();
}

function draw() {
    // Using translation coupled with tile size
    fill(204, 101, 192, 127);
    noStroke();

    let tile_size = 80;
    let max_tile = width / tile_size;
    let half_tile = tile_size / 2;

    translate(half_tile, half_tile);

    for (let i = 0; i < max_tile; i ++) {
        push();
        for (let j = 0; j < max_tile; j ++) {
            make_tile();
            translate(tile_size, 0);
        }
        pop();
        translate(0, tile_size);
    }

}


function make_tile(x, y, d) {
    for (let i = 0; i < 20; i ++) {
        ellipse(0, 20, 15, 40);
        rotate(PI/10);
    }
}
