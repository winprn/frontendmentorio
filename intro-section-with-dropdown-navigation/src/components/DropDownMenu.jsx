import React from 'react';

const DropDownMenu = ({ children, isOpen, handleMouseOut }) => {
	let classes = 'dropdown-menu';
	if (isOpen) classes += ' active';
	return (
		<div onMouseLeave={handleMouseOut} className={classes}>
			{children}
		</div>
	);
};

export default DropDownMenu;
