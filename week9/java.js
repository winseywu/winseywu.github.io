function setup() {
    createCanvas(400, 400);
    background(255,255,0)
    stroke(255,0,0,100)
  
    fill(0, 0, 255, 150);
    drawCircle(0, height/2, 100);
    drawCircle(width/2, height/2, 100);
    drawCircle(width, height/2, 100);
    
    drawCircle(0, height, 100);
    drawCircle(width/2, height, 100);
    // drawCircle(width, height, 100);
    
    // drawCircle(0, 0, 100);
    drawCircle(width/2, 0, 100);
    drawCircle(width, 0, 100);
  }
  
  function drawCircle (x, y, size) { 
    if (size < 10) return; // STOP AT SOME POINT
    
    ellipse(x, y, size);
    
    drawCircle(x - size/2, y, size/2);
    drawCircle(x + size/2, y, size/2);
    drawCircle(x + size/2, y - size/2, size/2);
    drawCircle(x - size/2, y + size/2, size/2);
  
  }