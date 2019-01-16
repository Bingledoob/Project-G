let gnome;
let x, y;
let dx, dy;
let gnomeGrunt;
let state;
let click;

function preload() {
  state = 0;
  gnomeGrunt = loadSound("assets/gnomegrunt.mp3");
  gnome = loadImage("assets/gnome.png");
  click = loadImage("assets/click.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2 - gnome.width / 2;
  y = height/2 - gnome.height / 2;
  dx = random(3, 8);
  dy = random(3, 8);
}

function draw() {
  if (state === 0) {
    image(click, 0, 0);
  }
  if (state === 1) {
    moveGnome();
    displayGnome();
    gnomeGrunt.play();
  }
}

function mousePressed() {
  if (state === 0) {
    state = 1;
  }
}

function moveGnome() {
  x += dx;
  y += dy;

  if (y + gnome.height >= height || y <= 0) {
    dy = dy * -1;
  }
  if (x + gnome.width >= width || x <= 0) {
    dx = dx * -1;
  }
}

function displayGnome() {
  image(gnome, x, y);
}
