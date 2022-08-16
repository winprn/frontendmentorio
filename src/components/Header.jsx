import React, { useEffect, useState, useRef } from 'react';
import '../styles/Header.scss';
import DropDownMenu from './DropDownMenu';
import DropDownItems from './DropDownItems';
import DropDownItem from './DropDownItem';
import {
	logo,
	iconArrowDown,
	iconArrowUp,
	iconCalendar,
	iconTodo,
	iconReminders,
	iconPlanning,
	iconMenu,
	iconCloseMenu,
} from '../assets/';

const firstDropDownItems = [
	{
		text: 'Todo List',
		icon: iconTodo,
	},
	{
		text: 'Calendar',
		icon: iconCalendar,
	},
	{
		text: 'Reminders',
		icon: iconReminders,
	},
	{
		text: 'Planning',
		icon: iconPlanning,
	},
];

const secondDropDownItems = [
	{
		text: 'History',
	},
	{
		text: 'Our Team',
	},
	{
		text: 'Blog',
	},
];

const Header = () => {
	const [isOpen, setIsOpen] = useState([false, false]);
	const [isShow, setIsShow] = useState(false);
	const menuRef = useRef();
	const menuRef2 = useRef();

	const handleMouseOver = (e) => {
		// console.log(e);
		setIsOpen((prev) => {
			// console.log(prev);
			const newState = [...prev];
			for (let i = 0; i < newState.length; ++i) {
				if (i === e.target.id) {
					newState[i] = true;
				} else newState[i] = false;
			}
			newState[parseInt(e.target.id)] = true;
			return (prev = [...newState]);
		});
	};

	const closeAll = () => {
		setIsOpen((prev) => {
			const newState = [...prev];
			for (let i = 0; i < newState.length; ++i) {
				newState[i] = false;
			}
			return (prev = [...newState]);
		});
	};

	const handleClick = () => {
		setIsShow((prev) => !prev);
	};

	useEffect(() => {
		document.addEventListener('mousedown', (e) => {
			if (
				!menuRef.current.contains(e.target) &&
				!menuRef2.current.contains(e.target)
			) {
				closeAll();
			}
		});
	});

	return (
		<div className='header'>
			<div className='group'>
				<img src={logo} alt='snap' />
				<div className='menu'>
					<div className='contain'>
						<a id='0' href='#' onClick={handleMouseOver}>
							Features{' '}
							{!isOpen[0] ? (
								<img src={iconArrowDown} alt='' />
							) : (
								<img src={iconArrowUp} alt='' />
							)}
						</a>
						<div ref={menuRef}>
							<DropDownMenu isOpen={isOpen[0]}>
								<DropDownItems>
									{firstDropDownItems.map((item, index) => {
										const { text, icon } = item;
										return <DropDownItem key={index} text={text} icon={icon} />;
									})}
								</DropDownItems>
							</DropDownMenu>
						</div>
					</div>
					<div className='contain'>
						<a id='1' href='#' onClick={handleMouseOver}>
							Company{' '}
							{!isOpen[1] ? (
								<img src={iconArrowDown} alt='' />
							) : (
								<img src={iconArrowUp} alt='' />
							)}
						</a>
						<div ref={menuRef2}>
							<DropDownMenu isOpen={isOpen[1]}>
								<DropDownItems>
									{secondDropDownItems.map((item, index) => {
										const { text, icon } = item;
										return <DropDownItem key={index} text={text} icon={icon} />;
									})}
								</DropDownItems>
							</DropDownMenu>
						</div>
					</div>
					<a href='/'>Careers</a>
					<a href='/'>About</a>
				</div>
			</div>
			<div className='join'>
				<a href='' className='login'>
					Login
				</a>
				<a href='' className='button'>
					Register
				</a>
			</div>

			<div className='hamburger' onClick={handleClick}>
				{!isShow ? (
					<img src={iconMenu} alt='' />
				) : (
					<>
						<img src={iconCloseMenu} alt='' />
					</>
				)}
			</div>
			{isShow ? (
				<>
					<div className='black'></div>
					<div className='container'>
						<div className='contain'>
							<a id='0' href='#' onClick={handleMouseOver}>
								Features{' '}
								{!isOpen[0] ? (
									<img src={iconArrowDown} alt='' />
								) : (
									<img src={iconArrowUp} alt='' />
								)}
							</a>
							<div ref={menuRef}>
								<DropDownMenu isOpen={isOpen[0]}>
									<DropDownItems>
										{firstDropDownItems.map((item, index) => {
											const { text, icon } = item;
											return (
												<DropDownItem key={index} text={text} icon={icon} />
											);
										})}
									</DropDownItems>
								</DropDownMenu>
							</div>
						</div>
						<div className='contain'>
							<a id='1' href='#' onClick={handleMouseOver}>
								Company{' '}
								{!isOpen[1] ? (
									<img src={iconArrowDown} alt='' />
								) : (
									<img src={iconArrowUp} alt='' />
								)}
							</a>
							<div ref={menuRef2}>
								<DropDownMenu isOpen={isOpen[1]}>
									<DropDownItems>
										{secondDropDownItems.map((item, index) => {
											const { text, icon } = item;
											return (
												<DropDownItem key={index} text={text} icon={icon} />
											);
										})}
									</DropDownItems>
								</DropDownMenu>
							</div>
						</div>
						<a href='/'>Careers</a>
						<a href='/'>About</a>
						<div className='join'>
							<a href='/' className='login'>
								Login
							</a>
							<a href='/' className='button'>
								Register
							</a>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default Header;
