import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, imgSrc, population, region, capital }) => {
	return (
		<div className='w-3/4 xl:w-full mb-10 rounded-md overflow-hidden bg-white dark:bg-[#2b3945] dark:text-white shadow-[0_0px_10px_rgba(0,0,0,0.1)]'>
			<img className='h-[190px] w-full' src={imgSrc} />
			<section className='px-8 pt-6 pb-12'>
				{/* <h3 className='font-extrabold text-lg mb-4'>{name}</h3> */}
				<Link className='block font-extrabold text-lg mb-4' to={`/${id}`}>
					{name}
				</Link>
				<p className='font-semibold'>
					Population: <span className='font-light'>{population}</span>
				</p>
				<p className='font-semibold'>
					Region: <span className='font-light'>{region}</span>
				</p>
				<p className='font-semibold'>
					Capital: <span className='font-light'>{capital}</span>
				</p>
			</section>
		</div>
	);
};

export default Card;
