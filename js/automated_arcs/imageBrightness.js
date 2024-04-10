class ImageBrightness {

    constructor(img){ 
        this.img = img;
        this.brightnessArray = this.sortedBrightnessArray();
    }
    
    sortedBrightnessArray() {
        let array = [];
        for (let y = 0; y < this.img.height; y++) {
            for (let x = 0; x < this.img.width; x++) {
                let pixelColor = this.img.get(x, y);
                let brightnessValue = brightness(pixelColor);
                array.push(brightnessValue);
            }
        }
        return array.sort();
    }

    percentiles() {
        let array = this.brightnessArray;
        let n = array.length;
        let p0 = array[0];
        let p20 = array[Math.floor(n * 0.2)];
        let p40 = array[Math.floor(n * 0.4)];
        let p60 = array[Math.floor(n * 0.6)];
        let p80 = array[Math.floor(n * 0.8)];
        let p100 = array[n - 1];

        return {
            p0: p0,
            p20: p20,
            p40: p40,
            p60: p60,
            p80: p80,
            p100: p100
        };
    }
}

