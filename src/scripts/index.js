const rateList = document.querySelectorAll(".rating-list li");
const btnSubmit = document.querySelector(".submit");
const rated = document.getElementById("rated");
const ratingSection = document.getElementById("container");
const thanksSection = document.getElementById("thanks-container");

let rate = 0;

rateList.forEach((rateItem) => {
  rateItem.addEventListener("click", (e) => {
    const selected = document.querySelector(".rate-selected");
    if (selected) {
      selected.classList.remove("rate-selected");
    }
    rateItem.classList.add("rate-selected");
    rate = rateItem.innerHTML;
  });
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (rate) {
    rated.innerText = rate;
    ratingSection.style.display = "none";
    thanksSection.style.display = "flex";
  }
});
