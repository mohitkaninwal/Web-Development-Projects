document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
  
    let currentInput = "";
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = button.innerText;
  
        if (buttonText === "=") {
          try {
            currentInput = eval(currentInput);
            display.value = currentInput;
          } catch (error) {
            display.value = "Error";
          }
        } else if (buttonText === "AC") {
          currentInput = "";
          display.value = "";
        } else {
          currentInput += buttonText;
          display.value = currentInput;
        }
      });
    });
  });
  