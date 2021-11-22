console.log("theMessage is here! (the javascript is here)")

let t1 = document.getElementById("p1");
let t2 = document.getElementById("p2");
let t3 = document.getElementById("p3");
let t4 = document.getElementById("p4");
let t5 = document.getElementById("p5");

let t6 = document.getElementById("p6");
let t7 = document.getElementById("p7");
let t8 = document.getElementById("p8");
let t9 = document.getElementById("p9");

// let para = document.querySelector("p")

//---------add event to the text------------//

  t1.addEventListener("mouseover", msov);
  t1.addEventListener("mouseout", msout);

  t2.addEventListener("mouseover", msov2);
  t2.addEventListener("mouseout", msout2);

  t3.addEventListener("mouseover", msov3);
  t3.addEventListener("mouseout", msout3);

  t4.addEventListener("mouseover", msov4);
  t4.addEventListener("mouseout", msout4);

  t5.addEventListener("mouseover", msov5);
  t5.addEventListener("mouseout", msout5);

  t6.addEventListener("mouseover", msov6);
  t6.addEventListener("mouseout", msout6);

  t7.addEventListener("mouseover", msov7);
  t7.addEventListener("mouseout", msout7);

  t8.addEventListener("mouseover", msov8);
  t8.addEventListener("mouseout", msout8);

  t9.addEventListener("mouseover", msov9);
  t9.addEventListener("mouseout", msout9);

//--------------function 1------------------//
  function msov(){
    t1.style.color = "white";
  }

  function msout(){
    t1.style.color = "black";
  }
//--------------function 2------------------//
  function msov2(){
    t2.style.color = "white";
  }

  function msout2(){
    t2.style.color = "black";
  }
//--------------function 3------------------//
function msov3(){
    t3.style.color = "white";
  }

  function msout3(){
    t3.style.color = "black";
  }
//--------------function 4------------------//
function msov4(){
    t4.style.color = "white";
  }

  function msout4(){
    t4.style.color = "black";
  }
//--------------function 5------------------//
function msov5(){
    t5.style.color = "white";
  }

  function msout5(){
    t5.style.color = "black";
  }
  //--------------function 6------------------//
function msov6(){
    t6.style.color = "white";
  }

  function msout6(){
    t6.style.color = "black";
  }
  //--------------function 7------------------//
function msov7(){
    t7.style.color = "white";
  }

  function msout7(){
    t7.style.color = "black";
  }
  //--------------function 8------------------//
function msov8(){
    t8.style.color = "white";
  }

  function msout8(){
    t8.style.color = "black";
  }
  //--------------function 9------------------//
function msov9(){
    t9.style.color = "white";
  }

  function msout9(){
    t9.style.color = "black";
  }