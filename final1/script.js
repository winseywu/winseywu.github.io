var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })


function ChangeTxt() {
    var x = document.getElementById("Father");
    if (x.innerHTML === "爹地!") {
      x.innerHTML = "Daddy!";
    } else {
      x.innerHTML = "爹地!";
    }
  }

  function ChangeTxt1() {
    var y = document.getElementById("Poop");
    if (y.innerHTML === "我要屙屎!") {
      y.innerHTML = "I need to poop!";
    } else {
      y.innerHTML = "我要屙屎!";
    }
  }