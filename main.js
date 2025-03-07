let container = document.querySelector(".container");

let area = document.querySelector(".area");

container.addEventListener("click", (e) => {
  // console.log(e.target.textContent);
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "Del":
        del();
        break;
      case "=":
        evaluate();
      default:
        addToArea(e.target.textContent);
    }
  }
});

function clear() {
  area.textContent = "";
}

function addToArea(value) {
  area.textContent += value;
}

function del() {
  // let newArr=Array.from(area.textContent)
  // newArr.splice(newArr.length-1,1)
  // newArr.pop()
  // area.textContent=newArr.join('')
  let currentArea = area.textContent;
  area.textContent = currentArea.substring(0, currentArea.length - 1);
}

function evaluate() {
  try {
    let expression = area.textContent.replace("=", "");

    let calculation = math.evaluate(expression);
    area.textContent = calculation;
    console.log(calculation);
  } catch (error) {
    area.textContent = "Invalid Operation";
  }
}
