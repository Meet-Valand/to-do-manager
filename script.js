const checkboxes = document.querySelectorAll(".todoCheckbox");
const inputs = document.querySelectorAll(".todoInput");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const correspondingInput = inputs[Array.from(checkboxes).indexOf(checkbox)];
    if (checkbox.checked) {
      correspondingInput.classList.add("strikethrough");
    } else {
      correspondingInput.classList.remove("strikethrough");
      correspondingInput.value = "";
    }
  });
});
