import React, { useState } from 'react';
import Button from './Button';
import '../styles/Content.scss';

const keypad = [
	{
		text: '7',
		type: 'normal',
	},
	{
		text: '8',
		type: 'normal',
	},
	{
		text: '9',
		type: 'normal',
	},
	{
		text: 'del',
		type: 'func del',
	},
	{
		text: '4',
		type: 'normal',
	},
	{
		text: '5',
		type: 'normal',
	},
	{
		text: '6',
		type: 'normal',
	},
	{
		text: '+',
		type: 'normal op',
	},
	{
		text: '1',
		type: 'normal',
	},
	{
		text: '2',
		type: 'normal',
	},
	{
		text: '3',
		type: 'normal',
	},
	{
		text: '-',
		type: 'normal op',
	},
	{
		text: '.',
		type: 'normal dot',
	},
	{
		text: '0',
		type: 'normal',
	},
	{
		text: '/',
		type: 'normal op',
	},
	{
		text: 'x',
		type: 'normal op',
	},
	{
		text: 'reset',
		type: 'large func reset',
	},
	{
		text: '=',
		type: 'large equal',
	},
];

const Content = () => {
	const [answer, setAnswer] = useState(0);
	const [lastAns, setLastAns] = useState(0);
	const [cur, setCur] = useState(0);
	const [op, setOp] = useState('');
	const [equal, setEqual] = useState(false);

	const compute = (a, b, op) => {
		switch (op) {
			case '-':
				return a - b;
			case 'x':
				return a * b;
			case '/':
				return a / b;
			default:
				return a + b;
		}
	};

	const handleClick = (e) => {
		const { className } = e.target;
		// console.log(className);
		if (className.includes('equal')) {
			// console.log(op);
			setEqual((prev) => true);
			setAnswer((prev) => {
				return compute(cur, prev, op);
			});
		} else if (className.includes('op')) {
			setOp((prev) => e.target.innerText);
			if (equal) {
				setEqual((prev) => false);
				setCur(answer);
				setAnswer(0);
				return;
			}
			// console.log(op);
			if (cur !== 0) {
				setCur((prev) => {
					return compute(cur, answer, op);
				});
				setAnswer((prev) => 0);
			} else {
				setCur((prev) => answer);
				setAnswer((prev) => 0);
			}
		} else if (className.includes('reset')) {
			setAnswer((prev) => 0);
			setCur((prev) => 0);
		} else if (className.includes('del')) {
			setAnswer((prev) => Math.floor(prev / 10));
		} else {
			if (equal) {
				setLastAns((prev) => cur);
				setCur((prev) => 0);
				setAnswer((prev) => 0);
			}
			setAnswer((prev) => prev * 10 + parseInt(e.target.innerText));
		}
	};

	return (
		<section>
			<div className='output'>
				<small>{cur ? cur.toFixed(2) : lastAns.toFixed(2)}</small>
				<p>{answer.toFixed(2)}</p>
			</div>
			<div className='grid'>
				{keypad.map((key) => {
					const { text, type } = key;
					return (
						<Button
							key={text}
							op
							text={text}
							type={type}
							onClick={handleClick}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Content;
