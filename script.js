const btnSelect = document.querySelectorAll('.btn--select');
console.log(btnSelect);
const btnSelected = Array.from(btnSelect);
console.log(btnSelected);
const submitBtn = document.querySelector('.btn');
const card = document.querySelector('.card');
const cardThanks = document.querySelector('.card__thanks');
const ratin = document.querySelector('.rating');
let getNum;
calcRating();
function calcRating() {
  btnSelected.forEach(el => {
    el.addEventListener('click', function (e) {
      el.classList.toggle('btn--selected');
      getNum = el.innerText;
    });
  });
}
submitBtn.addEventListener('click', function () {
  card.classList.add('hidden');
  cardThanks.classList.remove('hidden');
  ratin.textContent = getNum;
});
