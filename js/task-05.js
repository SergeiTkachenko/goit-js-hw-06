const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  outputEl.textContent = inputEl.value;
  if (outputEl.textContent === "") {
    outputEl.textContent = "Anonymous";
    // чи можна зробити щоб на 24 рядку замість 'Anonymous' якось вписати дефолтне значення??
  }
});
