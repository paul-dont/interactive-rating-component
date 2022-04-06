const btnSelect = document.querySelectorAll('.btn--select');
const submitBtn = document.querySelector('.btn');
const card = document.querySelector('.card');
const cardThanks = document.querySelector('.card__thanks');
const rating = document.querySelector('.rating');
let getNum;
let selection = false;
function calcRating() {
  btnSelect.forEach(el => {
    el.addEventListener('click', function (e) {
      el.classList.toggle('btn--selected');
      getNum = el.innerText;
      selection = true;
    });
  });
}
calcRating();

submitBtn.addEventListener('click', function () {
  if (selection) {
    card.classList.add('hidden');
    cardThanks.classList.remove('hidden');
    rating.textContent = getNum;
  }
});
