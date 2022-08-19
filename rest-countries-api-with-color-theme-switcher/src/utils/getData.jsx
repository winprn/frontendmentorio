import axios from 'axios';
import Card from '../components/Card';
const BASE_URL = 'https://restcountries.com/v3.1/';
const OFF_SET = 10;
let ALL_COUNTRIES = [];

export const getAllCountries = async () => {
	try {
		const url = `${BASE_URL}/all`;
		const res = await axios.get(url);
		const data = await res.data;
		const numberFormatter = Intl.NumberFormat('en-US');
		// console.log(data);

		let idx = 1;
		for (let country of data) {
			country.population = numberFormatter.format(country.population);
			country.fixedIndex = idx++;
		}
		ALL_COUNTRIES = [...data];
		return ALL_COUNTRIES;
	} catch (e) {
		console.log(e);
	}
};

export const filterByRegion = (data, region) => {
	if (region !== 'All') {
		const filteredContries = data.filter((country) => {
			return country.region === region;
		});

		return filteredContries;
	} else {
		const tmp = [];
		for (let i = 0; i < OFF_SET; ++i) {
			tmp.push(data[i]);
		}

		return tmp;
	}
};

export const filterById = async (id) => {
	id = parseInt(id);
	console.log({ id });
	if (Number.isNaN(id)) return ['a'];
	if (ALL_COUNTRIES.length === 0) {
		await getAllCountries();
	}

	const filteredContries = ALL_COUNTRIES.filter((country) => {
		return country.fixedIndex === id;
	});

	return filteredContries;
};

export const format = (data) => {
	return data.map((country) => {
		return (
			<Card
				key={country.fixedIndex}
				id={country.fixedIndex}
				name={country?.name.common}
				imgSrc={country?.flags.png}
				population={country?.population}
				region={country?.region}
				capital={country?.capital?.[0]}
			/>
		);
	});
};
