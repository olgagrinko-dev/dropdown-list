const img = document.querySelector(`.dropdown`);
let dl = document.querySelector(`.dropdown-list`);

img.addEventListener(`click`, function () {

    if (dl.style.display === `none`) {
        dl.style.display = `flex`;
        document.querySelector('.img').style = `background-image: url(./assece/arrow-down.svg)`;
    } else {
        dl.style.display = `none`;
        document.querySelector(`.img`).style = `background-image: url(./assece/arrow-up.svg)`;
    }
})