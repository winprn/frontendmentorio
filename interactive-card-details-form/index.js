const cardName = document.querySelector('#card-name');
const displayName = document.querySelector('.card-name');
const cardNumber = document.querySelector('#card-number');
const displayNumber = document.querySelector('.card-number');
const expMonth = document.querySelector('#card-month');
const displayMonth = document.querySelector('.card-month');
const expYear = document.querySelector('#card-year');
const displayYear = document.querySelector('.card-year');
const inputCCV = document.querySelector('#card-ccv');
const displayCCV = document.querySelector('.card-ccv');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.continue');
const rightEl = document.querySelector('.right');
const congratsEl = document.querySelector('.congrats');

const inputs = [cardName, cardNumber, expMonth, expYear, inputCCV];
const displays = [
  displayName,
  displayNumber,
  displayMonth,
  displayYear,
  displayCCV,
];
const defaults = ['Jane Appleseed', '0000 0000 0000 0000', '00', '00', '000'];
const errEl = document.createElement('p');
errEl.classList.add('error');
errEl.textContent = 'Invalid';

const getGroup = (str) => {
  return Math.round((str.length - 1) / 4);
};

for (let i = 0; i < inputs.length; ++i) {
  inputs[i].addEventListener('input', () => {
    const parent = inputs[i].parentElement;
    if (inputs[i].classList.contains('error')) {
      inputs[i].classList.remove('error');
      parent.removeChild(inputs[i].nextSibling);
    }
    if (inputs[i].value !== '') {
      //   if (inputs[i].id === 'card-number') {
      //     let currentGroup = getGroup(inputs[i].value);
      //     console.log(currentGroup);
      //     let final = '';
      //     for (let j = currentGroup * 4; j < inputs[i].value.length; ++j) {
      //       final += inputs[i].value[j];
      //     }
      //     group[currentGroup].innerText = final;
      //   }
      displays[i].innerText = inputs[i].value;
    } else {
      displays[i].innerText = defaults[i];
    }
  });
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let OK = 1;
  for (let input of inputs) {
    errEl.innerText = '';
    if (input.value === '') {
      errEl.innerText = `Can't be blank`;
    } else if (input.id === 'card-number' || input.type === 'number') {
      let tmpArr = input.value.split('');
      let ok = tmpArr.every((el) => {
        return el === ' ' || !Number.isNaN(parseInt(el));
      });

      if (!ok) {
        errEl.innerText = `Numbers only`;
      }
    }

    if (errEl.innerText !== '') {
      if (!input.classList.contains('error')) {
        input.insertAdjacentElement('afterend', errEl.cloneNode(true));
        input.classList.add('error');
        OK = 0;
      }
    } else {
      input.classList.remove('error');
    }
  }

  if (OK) {
    rightEl.classList.add('invisible');
    congratsEl.classList.remove('invisible');
  }
});

btn2.addEventListener('click', () => {
  rightEl.classList.remove('invisible');
  congratsEl.classList.add('invisible');
  for (let i = 0; i < inputs.length; ++i) {
    inputs[i].value = '';
    displays[i].innerText = defaults[i];
  }
});
