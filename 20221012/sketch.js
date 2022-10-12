function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0);
  noFill()
  stroke(255)

  for(var i =0;i<int(width/50);i++){
    for(var j=0;j<int(height/50);j++){
      stroke("#7EC4CF")
      ellipse(25+(i*50),25+(j*50),mouseX/30)
      stroke(mouseX%256)
      rectMode(CENTER)
      rect(25+(i*50),25+(j*50),mouseX/30)
      stroke(mouseY%256)
      ellipse(50+(i*50),50+(j*50),mouseX/30)
    }
  }
}