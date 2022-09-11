let display = document.getElementById("numbers");
let hide = document.getElementById("hide");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Del":
        display.innerText = "";
        break;
      case "ENTER":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "ERR0R";
        }
        break;
      default:
        if (e.target.innerText) {
          hide.style.display = "none";
          display.innerText += e.target.innerText;
        } else {
        }
    }
  });
});
