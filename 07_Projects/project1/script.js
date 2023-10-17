const body = document.querySelector("body");
const btns = document.querySelectorAll(".button");

btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;

    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;

    } else if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
      
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
