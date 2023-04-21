import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section className='flex-start md:flex-center flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:py-12 w-full min-h-[85vh] md:gap-x-36 bg-backdrop px-12'>
			<div>
				<h1 className='flex flex-col font-semibold mb-8'>
					<span>Hi.</span>
					<span>I'm Jesse.</span>
					<span className='text-[#BF40BF] font-semibold relative drop-shadow-[0_0_0.3rem_#BF40BF60]'>
						Frontend Developer.
					</span>
					<motion.span
						initial={{
							width: '10%',
						}}
						animate={{
							width: '90%',
						}}
						transition={{ ease: 'easeIn', delay: 0.8, duration: 1.3 }}
						className='block h-1 mt-1 bg-profile-bg max-w-sm'
					></motion.span>
				</h1>
				<p className='max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90 mb-3'>
					I enjoy building various frontend products with great user experience.
				</p>
				<p className='max-w-lg text-[0.9rem] md:text-[1.1rem] opacity-90'>
					I have used various frontend tools to turn ideas and design templates
					into real life products.
				</p>
			</div>
			<motion.div
				initial={{
					padding: '1rem',
				}}
				animate={{
					padding: '0.5rem',
				}}
				transition={{
					delay: 0.5,
					ease: 'easeInOut',
				}}
				className='bg-profile-bg rounded-full'
			>
				<Image
					src='/profile.png'
					alt="Jesse's memoji"
					width={350}
					height={50}
					priority
					className='bg-black/95 rounded-full'
				/>
			</motion.div>
		</section>
	);
};

export default HeroSection;
