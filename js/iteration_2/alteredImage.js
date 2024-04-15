class EllipseImage {

    constructor(img, imageSize, tileSize, colourMap){ 
        this.img = img;
        this.imageSize = imageSize;
        this.tileSize = tileSize;
        this.colourMap = colourMap;
    }

    display() {
        this.img.resize(this.imageSize, 0);
        let translateBy = (width / tileSize) / 2
        translate(translateBy, translateBy);

        let tilesX = this.tileSize;
        let tilesY = this.tileSize;
        let tileW = this.imageSize / tilesX;
        let tileH = this.imageSize / tilesY;
        
        noStroke();
        for (let x = 0; x < tilesX; x++) {
            for (let y = 0; y < tilesY; y++) {
                let pX = (x*tileW);
                let pY = (y*tileH);
                let c = this.img.get(pX, pY);
                
                let b = brightness(c);
                let bMapped = map(b, 0, 100, 0, 1);
                
                let col = lerpColor(this.colourMap.darkCol, this.colourMap.lightCol, bMapped);
                fill(col);

                ellipse(x * tileW, y * tileH, tileW, tileH);
            }
        }
    }
}
