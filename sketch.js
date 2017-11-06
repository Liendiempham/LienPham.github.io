var img;  // Declare variable 'img'.

function preload() {
    img = loadImage("assets/dogsTalking.jpg");  // Load the image
}

function setup() {
  createCanvas(800, 600);
  noLoop();
  //image(img, 0, 0);
}

function draw() {
  // Displays the image at its actual size at point (0,0), the top left
  // Note, this image size is 800x538 pixels
  image(img, 0, 0);

  // If your image is bigger than 800x600, you might need to scale it down
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, 0, img.width/2, img.height/2);
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside target 1
  if (mouseX < 400 && mouseY > 50 && mouseY < 400)
  {
    // This creates a "p" style HTML element below canvas using DOM library
    // Reference for DOM library: https://p5js.org/reference/#/libraries/p5.dom
    //createP("toot, toot, bepop");

    //this will create text OVER image, in a box from 0,0 to 0, 100
    displayText("testing a longer phrase or paragraph", 20, 20, 100, 300);
  }

  else if (mouseX > 400 && mouseX < 800)
  {
    //createP("woof");

    //this will create text OVER image, in a box from 200,0 to 400, 100
    displayText("i love ice cream and chocolate and smores", 200, 0, 400, 100);
  }

  else if (){

  }

  else if (){

  }
}

function displayText(words, wordsX1, wordsY1, wordsX2, wordsY2) {
  fill(255, 0, 0);
  textSize(32);
  text(words, wordsX1, wordsY1, wordsX2, wordsY2);
}
