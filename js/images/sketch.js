let img;
let img2;
let images = [];
let tileSize = 50;
let imageSize = 400;
let i = 0;

function preload(){
    img = loadImage('assets/dora_1.png');
    img2 = loadImage('assets/dora_2.png');
}

function setup(){
    createCanvas(400, 400);
    img.filter(ERODE);
    setUpImages();
}

function draw() {
    images[i].display();
}

function mousePressed() {
    if (i == (images.length - 1)) {
        i = 0;
    } else {
        i++;
    }
}

function setUpImages() {
    let colourMap1 = colours(color(255, 0, 235), color(255, 235, 249));
    let colorMap2 = colours(color(0, 216, 255), color(210, 248, 255));

    ellipseImage = new EllipseImage(img, imageSize, tileSize, colourMap1);
    ellipseImage2 = new EllipseImage(img2, imageSize, tileSize, colorMap2);

    images.push(ellipseImage);
    images.push(ellipseImage2);
}

function colours(darkCol, lightCol) {
    return {
        "darkCol": darkCol,
        "lightCol": lightCol
    }
}
