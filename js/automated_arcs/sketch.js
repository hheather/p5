let img;
let tileSize = 60;
let imageSize = 400;
let percentiles = {};
let tilesX = tileSize;
let tilesY = tileSize;
let tileW = imageSize / tilesX;
let tileH = imageSize / tilesY;

function preload(){
    img = loadImage('assets/dora_1.png');
}

function setup(){
    createCanvas(imageSize, imageSize);
    img.resize(imageSize, imageSize);

    imageBrightness = new ImageBrightness(img);
    percentiles = imageBrightness.percentiles();
}

function draw() {
    let translateBy = (width / tileSize) / 2
    translate(translateBy, translateBy);
    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {

        let pX = (x*tileW);
        let pY = (y*tileH);

        let pixCol = img.get(pX, pY);
        let b = brightness(pixCol);
        drawArc(b, x, y);
      }
    }
}

function drawArc(value, x, y) {
    noStroke();
    if (value < percentiles.p20) {
        // darkest = full circle
        fill('#FF00D4');
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI * 2);
    } else if (value >= percentiles.p20 && value < percentiles.p40) {
        fill('#FF5DE4');
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI + HALF_PI);
    } else if (value >= percentiles.p40 && value < percentiles.p60) {
        fill('#FFA3F0');
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI);
    } else if (value >= percentiles.p60 && value <= percentiles.p80) {
        fill('#FFD7F8');
        arc(x * tileW, y * tileH, tileW, tileH, 0, HALF_PI);
    } else {
        // lightest = nothing
    }
  }
