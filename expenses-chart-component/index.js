const amounts = document.querySelectorAll('.amount');
const columns = document.querySelectorAll('.column');

const getData = async () => {
    const res = await axios.get('./data.json');
    return res.data;
}

getData().then((data) => {
    for (let i = 0; i < data.length; ++i) {
        amounts[i].innerText = data[i].amount;
        columns[i].style.height = `${data[i].amount * 2}px`;
    }
})

for (let i = 0; i < columns.length; ++i) {
    columns[i].addEventListener('pointerenter', () => {
        amounts[i].classList.add('show');
        columns[i].classList.add('blur');
    })

    columns[i].addEventListener('pointerleave', () => {
        amounts[i].classList.remove('show');
        columns[i].classList.remove('blur');
    })
}