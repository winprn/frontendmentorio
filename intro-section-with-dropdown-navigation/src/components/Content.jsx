import React, { useEffect, useState } from 'react';
import {
	clientAudiophile,
	clientDatabiz,
	clientMaker,
	clientMeet,
	imageHeroDesktop,
	imageHeroMobile,
} from '../assets';
import '../styles/Content.scss';

const clientsLogos = [
	{
		src: clientDatabiz,
	},
	{
		src: clientAudiophile,
	},
	{
		src: clientMeet,
	},
	{
		src: clientMaker,
	},
];

const Content = () => {
	const [image, setImage] = useState(imageHeroDesktop);

	useEffect(() => {
		if (document.body.clientWidth <= 1000) {
			setImage(imageHeroMobile);
		}
	}, [document.body.clientWidth]);

	return (
		<div className='wrapper'>
			<div className='left-col'>
				<h1 className='title'>Make remote work</h1>
				<p className='info'>
					Get your team in sync, no matter your location.
					<br />
					Streamline processes, create team rituals, and watch productivity
					soar.
				</p>
				<a href='#' className='cta button'>
					Learn more
				</a>

				<div className='logos'>
					{clientsLogos.map((logo, index) => {
						return <img key={index} src={logo.src} alt={`Clients' logo`} />;
					})}
				</div>
			</div>
			<div className='right-col'>
				<img src={image} alt='Man typing on a laptop' />
			</div>
		</div>
	);
};

export default Content;
