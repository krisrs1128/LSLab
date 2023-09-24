
//OPC.button("btoButton", "back to origin");
const agentsNum = 500;
const sensorOffset = 20;
const sensorAngle = Math.PI / 7;
const turnAngle = Math.PI / 5;
const colors = ["#A62447", "#79358C", "#D7D9D8", "#D9A273", "#D96A6A"];
let agents;

function setup() {
  createCanvas(150, 315);
  pixelDensity(1);
  background(255, 210, 225);
  agents = new Agents();
}

function draw() {
  background(247, 247, 247, 20);
  loadPixels();
  for (let i = 0; i < 10; i++) {
    agents.update();
  } 
  updatePixels();
}

class Agent {
  constructor() {
    this.x = width * random();
    this.y = height * random();
    this.color = color(random(colors));
    this.dir = random(TWO_PI);
  }

  updateDirection() {
    const right = this.sense(+sensorAngle);
    const center = this.sense(0);
    const left = this.sense(-sensorAngle);

		const threeWays = [left, center - 1 , right];
		const minIndex = threeWays.indexOf(min(...threeWays));
		this.dir += turnAngle * (minIndex - 1);
  }
  
  sense(dirOffset) {
    const angle = this.dir + dirOffset;
    let x = floor(this.x + sensorOffset * cos(angle));
    let y = floor(this.y + sensorOffset * sin(angle));
    const index = (x + y * width) * 4;
    return pixels[index];
  }

  updatePosition() {
    this.x += cos(this.dir);
    this.y += sin(this.dir);
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;

    const index = floor(this.x) + floor(this.y) * width;
    pixels.set(this.color.levels, index * 4);
    //pixels.set([0, 0, 0], index * 4);
  }
}

class Agents {
  constructor() {
    this.agents = Array(agentsNum)
      .fill()
      .map((e) => new Agent());
  }
  update() {
    this.agents.forEach((e) => e.updateDirection());
    this.agents.forEach((e) => e.updatePosition());
  }
}
