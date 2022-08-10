const options = document.querySelectorAll('.option');
const btnSubmit = document.querySelector('.btn-submit');
const stars = document.querySelector('.stars');
const heading = document.querySelector('.heading');
const rating = document.querySelector('.rating');
const errMessage = document.querySelector('.err');
const thankYou = document.querySelector('.thank-you');
const num = document.querySelector('.num');
let prev = -1;

for (let i = 0; i < options.length; ++i) {
    options[i].addEventListener('click', () => {
        errMessage.classList.add('disappear');
        const numStars = i + 1;
        stars.innerHTML = '';
        for (let j = 0; j < numStars; ++j) {
            const star = document.createElement('div');
            const img = document.createElement('img');
            star.classList.add('star');
            img.setAttribute('src', './images/icon-star.svg');
            star.append(img);

            stars.append(star.cloneNode(true));
            heading.classList.add('disappear');
        }

        if (prev !== -1) {
            options[prev].classList.remove('selected');
        }
        prev = i;
        options[i].classList.add('selected');

        console.log(options);
    })
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const tmp = [...options];
    // console.log(tmp);
    const hasChosenOne = tmp.some((option, index) => {
        // console.log(option.classList);
        return options[index].classList.contains('selected');
    })

    if (!hasChosenOne) {
        errMessage.classList.remove('disappear');
    } else {
        rating.classList.add('disappear');
        thankYou.classList.remove('disappear');
        num.innerText = prev + 1;
    }
})