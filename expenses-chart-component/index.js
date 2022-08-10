const amounts = document.querySelectorAll('.amount');
const columns = document.querySelectorAll('.column');

const today = new Date()
	.toLocaleDateString('en-US', { weekday: 'long' })
	.slice(0, 3)
	.toLowerCase();

const getData = async () => {
	try {
		const res = await axios.get('./data.json');
		console.log(res);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

getData().then((data) => {
	for (let i = 0; i < data.length; ++i) {
		amounts[i].innerText = data[i].amount;
		if (data[i].day === today) {
			columns[i].classList.add('current');
		}
		columns[i].style.height = `${data[i].amount * 2}px`;
	}
});

for (let i = 0; i < columns.length; ++i) {
	columns[i].addEventListener('pointerenter', () => {
		amounts[i].classList.add('show');
		columns[i].classList.add('blur');
	});

	columns[i].addEventListener('pointerleave', () => {
		amounts[i].classList.remove('show');
		columns[i].classList.remove('blur');
	});
}
