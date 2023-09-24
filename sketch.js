let maxDiam = 50; //large circle max
let minDiam = 5; //small circle min
let circles = []; // Store some circle properties

function setup() {
  createCanvas(700, 900);
  background(255);
  noStroke();
  fill(255, 0, 0);

  let density = 200;
  let spacing = minDiam * 2;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      let overlapping = false;

      if (random(1) < density) {
        let tDiam = random(minDiam, maxDiam);

        for (let draws = 0; draws < 20; draws++) {
          let xpos = x + random(-spacing / 2, spacing / 2);
          let ypos = y + random(-spacing / 2, spacing / 2);

          for (let circle of circles) {
            let geneX = circle.x;
            let geneY = circle.y;
            let geneDiam = circle.diameter;
            let minDist = (geneDiam / 2) + (tDiam/2) ;
            let distance = dist(xpos, ypos, geneX, geneY);//calculate distance

            if (distance < minDist) {
              overlapping = true;
              break;
            }
          }

          if (!overlapping) {
            ellipse(xpos, ypos, tDiam, tDiam);
            circles.push({ x: xpos, y: ypos, diameter: tDiam });
            break;
          }
        }
      }
    }
  }
}

function draw() {
  // Empty this draw function to avoid motion
}
