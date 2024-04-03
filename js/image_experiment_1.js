let img;
let colors;

tileSize = 40;

let tilesX = tileSize;
let tilesY = tileSize;


function preload(){
    img = loadImage('assets/dora_1.png');
}

function setup(){
    createCanvas(400, 400);
    img.resize(width, height);
    colors = [];
    colors[0] = ('#FF00EB');
    colors[1] = ('#FF53F0')
    colors[2] = ('#FF91F5');
    colors[3] = ('#FFAFF8');
}

function draw(){
    noStroke();

    let tileW = width / tilesX;
    let tileH = height / tilesY;
    
    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {
            
            let pX = (x*tileW);
            let pY = (y*tileH);

            let c = img.get(pX, pY);

            let b = brightness(c);
            if (round(b, 5) == 61.56863) {
                fill(colors[3]);
            } else if (b <= 66) {
                fill(colors[0]);
            } else if (b > 66 && b <= 73) {
                fill(colors[1]);
            } else if (b > 73 && b <= 78) {
                fill(colors[2]);
            } else {
                fill(colors[3]);
            }

            rect(x * tileW, y * tileH, tileW, tileH);

        }
    }

    let colour = get(mouseX, mouseY);
    console.log(brightness(colour));

}
