import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { filterById } from '../utils/getData';

const CountryInfo = () => {
	const [info, setInfo] = useState([]);
	const id = useParams().id;
	useEffect(() => {
		const getInfo = async () => {
			setInfo(await filterById(id));
		};
		getInfo();
	}, []);
	console.log(info);

	return (
		<main className='container-fluid dark:text-white'>
			<div className='w-1/3 lg:w-1/12 lg:ml-20 py-1 pl-8 ml-6 mb-16 bg-white dark:bg-[#2b3945] shadow-[0_0px_10px_rgba(0,0,0,0.1)]'>
				<Link to='/' className='flex gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M7 16l-4-4m0 0l4-4m-4 4h18'
						/>
					</svg>
					<p>Back</p>
				</Link>
			</div>
			<div className='w-11/12 flex flex-col ml-4 lg:flex-row lg:gap-32 lg:items-center lg:justify-center'>
				<img
					src={info[0]?.flags.png}
					alt=''
					className='w-full lg:w-1/3 mb-10'
				/>
				<div>
					<h1 className='text-2xl mb-6 font-extrabold'>
						{info[0]?.name.common}
					</h1>
					<div className='lg:flex lg:gap-32 lg:w-full'>
						<section className='mb-10'>
							<p className='mb-3'>
								<span className='font-semibold'>Native Name:</span>{' '}
								{info[0]?.altSpellings[1]}
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Population:</span>{' '}
								{info[0]?.population}
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Region:</span> {info[0]?.region}
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Sub Region:</span>{' '}
								{info[0]?.subregion}
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Capital:</span>{' '}
								{info[0]?.capital[0]}
							</p>
						</section>
						<section className='mb-10'>
							<p className='mb-3'>
								<span className='font-semibold'>Top Level Domain:</span>{' '}
								{info[0]?.tld[0]}
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Currencies:</span>{' '}
								<>
									{Object.values(info[0] ? info[0]?.currencies : {}).map(
										(a, index, arr) => {
											return (
												<span key={index}>
													{a.name}
													{index === arr.length - 1 ? '' : ','}{' '}
												</span>
											);
										}
									)}
								</>
							</p>
							<p className='mb-3'>
								<span className='font-semibold'>Languages:</span>{' '}
								<>
									{Object.values(info[0] ? info[0]?.languages : {}).map(
										(a, index, arr) => {
											return (
												<span key={index}>
													{a}
													{index === arr.length - 1 ? '' : ','}{' '}
												</span>
											);
										}
									)}
								</>
							</p>
						</section>
					</div>
					<section className='flex flex-col gap-3 lg:flex-row'>
						<h3 className='font-semibold'>Border Countries:</h3>
						<div className='flex gap-1'>
							{info[0]?.borders?.map((country, index) => {
								return (
									<p
										key={index}
										className='font-light text-sm px-6 py-1 bg-white dark:bg-[#2b3945] dark:text-white shadow-[0_0px_10px_rgba(0,0,0,0.1)] mb-10'
									>
										{country}
									</p>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default CountryInfo;
