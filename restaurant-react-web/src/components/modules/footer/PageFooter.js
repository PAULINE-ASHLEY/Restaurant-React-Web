import React from 'react';
import { logo } from 'assets/images';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
	EmailButton,
	LocationButton,
} from 'components/widgets/Buttons';

function PageFooter() {
	return (
		<>
			<div className='text-black grid grid-cols-3 border-t-2 border-black border-solid'>
				<div>
					<Link to='/' className='shrink-0 grow-0 rounded-full'>
						<img src={logo} width={60} height={60} alt='restaurant logo' />
					</Link>
					<p className='pt-6 text-xl font-medium'>Ashley's Kitchen</p>
					<p className='pt-2 font-normal'>
						Search all homes for sale, check out home <br />
						values in the neighborhood and get advice <br /> on buying or
						selling from our experts.
					</p>
				</div>
				<div>
					<h3 className='font-semibold text-2xl mt-5 mb-2 text-black'>
						Navigate
					</h3>
					<div className='grid gap-2 grid-cols-2 mt-6'>
						<div className='flex flex-col'>
							<LinkButton to='/'>Home</LinkButton>
							<LinkButton to='/'>News</LinkButton>
							<LinkButton to='/Contact'>Contact</LinkButton>
							<LinkButton to='/'>Developments</LinkButton>
							<LinkButton to='/'>Get In Touch</LinkButton>
						</div>

						<div className='flex flex-col'>
							<LinkButton to='/Buy'>Buy</LinkButton>
							<LinkButton to='/Rent'>Rent</LinkButton>
							<LinkButton to='/'>Careers</LinkButton>
							<LinkButton to='/'>Services</LinkButton>
							<LinkButton to='/'>Privacy Policy</LinkButton>
						</div>
					</div>
				</div>
				<div>
					<h3 className='font-semibold text-2xl mt-5 mb-2 text-black'>
						Contact Us
					</h3>
					<div className='text-black flex gap-x-2'>
						<LocationButton />
						5040 Real Paradise, Kenya
					</div>
					<div className='text-black flex gap-x-2 pt-4'>
						<EmailButton />
						info@realparadise.com
					</div>
					<h3 className='font-semibold text-2xl mt-5 mb-2'>
						Get In Touch With Us
					</h3>
					<div className='flex gap-x-4'>
						<InstagramButton />
						<LinkedInButton />
						<FacebookButton />
						<TwitterButton />
						<YoutubeButton />
					</div>
				</div>
			</div>

			<div className='text-black grid grid-cols-3 w-full'>
				<div>
					<p className='text-black font-normal pt-4'>
						© Copyright 2023 BWC All rights reserved.
					</p>
				</div>
				<div></div>
				<div></div>
			</div>
		</>
	);
}

export default PageFooter;
