//---- vars ------//

let picStart;

let textStart = 100;
let textsSpace = 50;

// ----- dialouge ----- //

let introDia = {
  
    a: "Genshin Impact is a open world game, where the players as the Traveller in the world of Teyvat.",
    b: "The Travellers can be male if the player chose Aether, or female if the player chose Lumine.",
    c: "In my case, I chose Lumine as the traveller.",
    d: "In the beginning of the game, Traveller lost her brother while they were travelling in between different worlds,",
    e: "and the Traveller began a journey in this foreign world, Teyvat, to find traces of her lost sibling.",
    f: "On the way, the Traveller made a lot of friends from different regions in Teyvat.",
    g: "The following story happened during Halloween in Mondstadt with the Traveller and her friends.",
  }

  // ----- ----- ----- ----- //

function preload(){
  picStart = loadImage("pictures/login_page.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  
  intro();

}

function intro(){
  
  imageMode(CENTER);
  image(picStart, width/2,height/2, windowWidth, windowHeight);

  textAlign(CENTER);
  textSize(24);
  fill(0);   
  text(introDia.a , windowWidth/2, textStart);
  text(introDia.b , windowWidth/2, textStart + textsSpace);
  text(introDia.c , windowWidth/2, textStart + 2*textsSpace);
  text(introDia.d , windowWidth/2, textStart + 4*textsSpace);
  text(introDia.e , windowWidth/2, textStart + 5*textsSpace);
  text(introDia.f , windowWidth/2, textStart + 6*textsSpace);
  text(introDia.g , windowWidth/2, textStart + 8*textsSpace);

}
