import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Header.scss';

const Header = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	useEffect(() => {
		const inputs = document.querySelectorAll('input');
		const selectTheme = document.querySelector('.select-theme');
		const body = document.querySelector('body');

		inputs.forEach((input) => {
			input.addEventListener('click', () => {
				selectTheme.classList.remove('one');
				selectTheme.classList.remove('two');
				selectTheme.classList.remove('three');
				selectTheme.classList.add(input.id);

				if (input.id === 'one') {
					body.classList.remove('theme2', 'theme3');
				} else if (input.id === 'two') {
					body.classList.remove('theme3');
					body.classList.add('theme2');
				} else {
					body.classList.remove('theme2');
					body.classList.add('theme3');
				}
			});
		});

		// return () => {
		// 	inputs.removeEventListener('click', {});
		// };
	}, []);

	return (
		<header>
			<h3>calc</h3>
			<div className='theme'>
				<p>Theme</p>
				<div className='select-theme'>
					<div>
						<label htmlFor='one'>1</label>
						<input id='one' type='radio' name='theme'></input>
					</div>
					<div>
						<label htmlFor='two'>2</label>
						<input id='two' type='radio' name='theme'></input>
					</div>
					<div>
						<label htmlFor='three'>3</label>
						<input id='three' type='radio' name='theme'></input>
					</div>
					<div className='indicator'></div>
				</div>
			</div>
		</header>
	);
};

export default Header;
