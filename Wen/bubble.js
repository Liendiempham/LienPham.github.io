function Bubble (x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;

    this.display = function () {
        imageMode(CENTER);
        image(img, this.x, this.y, 260, 260);
    }

    this.update = function () {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-3, 1);
    }
 }
