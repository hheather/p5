let img;
let images = [];
let tileSize = 50;
let imageSize = 400;
let i = 0;

function preload(){
    img = loadImage('assets/dora_1.png');
    img.filter(ERODE);
}

function setup(){
    createCanvas(400, 400);
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
    let colourMap1 = colours(color(255, 0, 235), color(255, 255, 255));
    let colorMap2 = colours(color(255, 255, 255), color(255, 0, 235));

    ellipseImage = new EllipseImage(img, imageSize, tileSize, colourMap1);
    ellipseImage2 = new EllipseImage(img, imageSize, tileSize, colorMap2);

    images.push(ellipseImage);
    images.push(ellipseImage2);
}

function colours(darkCol, lightCol) {
    return {
        "darkCol": darkCol,
        "lightCol": lightCol
    }
}
