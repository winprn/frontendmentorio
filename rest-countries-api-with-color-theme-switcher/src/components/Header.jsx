import React from 'react';

const Header = () => {
	const handleClick = () => {
		document.body.classList.toggle('dark');
	};

	return (
		<header className='container-fluid lg:pt-4 lg:pb-4 md:pt-4 md:pb-4 lg:pl-20 lg:pr-20 md:pl-5 md:pr-5 pl-3 pr-3 pt-7 pb-7 mb-4 shadow-sm flex items-center justify-between bg-white dark:bg-[#2b3945] dark:text-white'>
			<h1 className='font-extrabold lg:text-2xl md:text-xl text-md'>
				Where in the world?
			</h1>
			<button className='flex items-center gap-2' onClick={handleClick}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5 dark:fill-white'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
					/>
				</svg>
				<p className='text-sm md:text-md lg:text-[18px]'>Dark Mode</p>
			</button>
		</header>
	);
};

export default Header;
