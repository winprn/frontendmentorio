import React, { useEffect, useState, useRef } from 'react';
import { getAllCountries, filterByRegion, format } from '../utils/getData';

const Content = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const [filtered, setFiltered] = useState(false);
	const [countries, setCountries] = useState([]);
	const [formattedCountries, setFormattedCountries] = useState([]);
	const [displayCountries, setDisplayCountries] = useState([]);
	const offset = 10;
	const ref = useRef();

	const handleClick = () => {
		console.log('you clicked');
		setIsOpen((prev) => !prev);
	};

	const handleSelect = (e) => {
		setIsOpen(false);
		const selected = document.querySelector('.selected');
		selected.innerText = e.target.innerText;
		const region = e.target.id;

		const data = filterByRegion(countries, region);
		setDisplayCountries(format(data));
		setFiltered(region !== 'All');
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		const query = e.target.value;
		if (query === '') {
			const tmp = [];
			for (let i = 0; i < offset; ++i) {
				tmp.push(formattedCountries[i]);
			}

			setFiltered(false);
			setDisplayCountries(tmp);
		} else {
			const res = countries.filter((country) => {
				return country.name.common.toLowerCase().includes(query.toLowerCase());
			});

			setFiltered(true);
			setDisplayCountries(format(res));
		}
	};

	useEffect(() => {
		const getData = async () => {
			const data = await getAllCountries();
			setCountries(data);

			setFormattedCountries(format(data));
			setIsReady(true);
		};
		getData();
	}, []);

	useEffect(() => {
		const tmp = [];
		for (let i = 0; i < offset; ++i) {
			tmp.push(formattedCountries[i]);
		}

		setDisplayCountries(tmp);
	}, [formattedCountries]);
	// console.log({ formattedCountries });

	const handleScroll = (e) => {
		if (filtered) return;
		if (
			window.innerHeight + e.target.documentElement.scrollTop + 10 >=
			e.target.documentElement.scrollHeight
		) {
			const tmp = [];
			console.log({ formattedCountries });
			console.log(displayCountries.length);
			for (
				let i = displayCountries.length;
				i <
				Math.min(formattedCountries.length, displayCountries.length + offset);
				++i
			) {
				tmp.push(formattedCountries[i]);
			}

			setDisplayCountries((prev) => [...prev, ...tmp]);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [displayCountries]);

	useEffect(() => {
		document.addEventListener('mousedown', (e) => {
			// console.log(e);
			if (
				!ref.current.contains(e.target) &&
				!e.target.classList.contains('select') &&
				!e.target.parentElement.classList.contains('select')
			) {
				setIsOpen(false);
			}
		});

		return () => {
			document.removeEventListener('mousedown', () => {});
		};
	}, []);

	return (
		<main className='container-fluid'>
			<div className='container-fluid flex flex-col md:flex-row gap-4 items-start justify-between lg:pt-4 lg:pb-4 md:pt-4 md:pb-4 lg:pl-20 lg:pr-20 md:pl-5 md:pr-5 pl-3 pr-3 pt-4 pb-4'>
				<div className='w-full lg:w-1/3 mb-8 relative rounded-lg overflow-hidden bg-white dark:text-white dark:bg-[#2b3945]'>
					<div className='flex absolute inset-y-0 left-5 items-center pl-3 pointer-events-none'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 stroke-slate-400'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</div>
					<input
						type='text'
						placeholder='Search for a country...'
						className='dark:bg-[#2b3945] rounded-sm w-full shadow-[0_0px_10px_rgba(0,0,0,0.1)] pl-20 pt-4 pb-4 outline-none'
						onChange={handleChange}
					/>
				</div>
				<div className='w-2/3 lg:w-1/5 md:1/4 bg-white text-black dark:bg-[#2b3945] dark:text-white relative'>
					<div
						name='region'
						id='region'
						className='cursor-pointer rounded-lg select overflow-hidden flex justify-between items-center w-full h-14 shadow-[0_0px_10px_rgba(0,0,0,0.1)] pl-7 pr-5 py-4'
						onClick={handleClick}
					>
						<p className='selected'>Filter by Region</p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19 9l-7 7-7-7'
							/>
						</svg>
					</div>
					<div ref={ref}>
						{isOpen ? (
							<div className='absolute dropdown translate-y-1 rounded-lg overflow-hidden w-full flex flex-col gap-1 bg-white dark:bg-[#2b3945] dark:text-white py-4 px-7 mt-1 shadow-[0_0px_10px_rgba(0,0,0,0.1)]'>
								<p className='cursor-pointer' onClick={handleSelect} id='All'>
									All
								</p>
								<p
									className='cursor-pointer'
									onClick={handleSelect}
									id='Africa'
								>
									Africa
								</p>
								<p
									className='cursor-pointer'
									onClick={handleSelect}
									id='Americas'
								>
									America
								</p>
								<p className='cursor-pointer' onClick={handleSelect} id='Asia'>
									Asia
								</p>
								<p
									className='cursor-pointer'
									onClick={handleSelect}
									id='Europe'
								>
									Europe
								</p>
								<p
									className='cursor-pointer'
									onClick={handleSelect}
									id='Oceania'
								>
									Oceania
								</p>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>

			{
				<div className='w-full flex justify-center'>
					<div className='w-11/12 xl:grid xl:grid-cols-4 xl:gap-x-20 flex flex-col items-center'>
						{isReady ? displayCountries : <h2>Getting Data...</h2>}
					</div>
				</div>
			}
		</main>
	);
};

export default Content;
