let tileSize = 60;
let imageSize = 400;
let tilesX = tileSize;
let tilesY = tileSize;
let tileW = imageSize / tilesX;
let tileH = imageSize / tilesY;

let img;
let img2;
let images = [];
let coloursMap;
let percentiles = {};
let i = 0;

function preload(){
    img = loadImage('assets/dora_1.png');
    img2 = loadImage('assets/dora_2.png');
}

function setup(){
    let coloursMap1 = {
        'darkest': color(255, 51, 240),
        'dark': color(255, 93, 228),
        'med': color(255, 163, 240),
        'light': color(255, 215, 248)
    }
    let coloursMap2 = {
        'darkest': color(155, 0, 127),
        'dark': color(255, 51, 240),
        'med': color(252, 123, 229),
        'light': color(255, 159, 238)
    }

    createCanvas(imageSize, imageSize);
    img.resize(imageSize, imageSize);
    img2.resize(imageSize, imageSize);
    img2.filter(INVERT);

    imageBrightness1 = new ImageBrightness(img, coloursMap1);
    imageBrightness2 = new ImageBrightness(img2, coloursMap2);
    images.push(imageBrightness1, imageBrightness2);
}

function draw() {
    displayImage(images[i]);
}

function mousePressed() {
    clear();
    if (i == (images.length - 1)) {
        i = 0;
    } else {
        i++;
    }
}

function displayImage(myImage) {
    percentiles = myImage.percentiles();
    coloursMap = myImage.coloursMap;
    let translateBy = (width / tileSize) / 2
    translate(translateBy, translateBy);

    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            let pX = (x*tileW);
            let pY = (y*tileH);

            let pixCol = myImage.img.get(pX, pY);
            let b = brightness(pixCol);
            drawArc(b, x, y);
        }
    }
}

function drawArc(value, x, y) {
    noStroke();
    if (value < percentiles.p20) {
        fill(coloursMap.darkest);
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI * 2);
    } else if (value >= percentiles.p20 && value < percentiles.p40) {
        fill(coloursMap.dark);
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI + HALF_PI);
    } else if (value >= percentiles.p40 && value < percentiles.p60) {
        fill(coloursMap.med);
        arc(x * tileW, y * tileH, tileW, tileH, 0, PI);
    } else if (value >= percentiles.p60 && value <= percentiles.p80) {
        fill(coloursMap.light);
        arc(x * tileW, y * tileH, tileW, tileH, 0, HALF_PI);
    } else {
    }
  }

  