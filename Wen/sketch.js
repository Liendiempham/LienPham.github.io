var bubbles = [];
var sel = [];
var img;

function preload() {
    for (var i = 0; i< 29; i++){
        sel[i] = loadImage("images/sel" + i + ".jpg");
    }

}

function setup() {
    cnv = createCanvas(1221, 880);
    bg = loadImage("images/sel.jpg");
    }

function mousePressed() {
    var r = floor(random(0, sel.length));
    var b = new Bubble(mouseX, mouseY, sel[r]);
    bubbles.push(b);
}

function draw() {
    background(bg);

    for (var i = bubbles.length-1; i >= 0; i--) {
        bubbles[i].update();
        bubbles[i].display();
    }
}
