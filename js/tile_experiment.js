function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    tile_size = 50;
    max_tile = width / tile_size;
    half_tile = tile_size / 2

    for (var i=0; i<max_tile; i++) {
        for (var j=0; j<max_tile; j++) {
            var x = i * 50 + half_tile;
            var y = j * 50 + half_tile;
            make_tile(x, y, tile_size);
        }
    }
}

function make_tile(x, y, d) {
    ellipse(x, y, d);
}
