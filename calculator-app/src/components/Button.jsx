import React from 'react';

const Button = ({ text, type, onClick }) => {
	const className = 'btn' + ' ' + type;
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
