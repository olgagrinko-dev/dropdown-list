const img = document.querySelector(`.dropdown`);
const dl = document.querySelector(`.dropdown-list`);
const p = document.querySelector(`.dropdown p`);

img.addEventListener(`click`, function () {
    if (dl.style.display === `none`) {
        dl.style.display = `flex`;
        document.querySelector('.img').style = `background-image: url(./assece/arrow-down.svg)`;
    } else {
        dl.style.display = `none`;
        document.querySelector(`.img`).style = `background-image: url(./assece/arrow-up.svg)`;
    }
})

dl.addEventListener(`click`, function (event) {    
    p.textContent = event.target.textContent;
})