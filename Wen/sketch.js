var bubbles = [];
var sel = [];

function preload() {
    for (var i = 0; i< 3; i++){
        sel[i] = loadImage("images/sel" + i + ".jpg");
    }

}

function setup() {
    cnv = createCanvas(600, 400);
    }

function mousePressed() {
    var r = floor(random(0, sel.length));
    var b = new Bubble(mouseX, mouseY, sel[r]);
    bubbles.push(b);
}

function draw() {
    background(0);

    for (var i = bubbles.length-1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
    }
}
