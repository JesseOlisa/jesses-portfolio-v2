import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { frontendTools } from '../utils/data';

const SkillsSection = () => {
	return (
		<section className='relative px-12 bg-zinc-800/30 py-14 bg-opacity-20 border-y border-white border-opacity-10'>
			<motion.div
				initial={{ opacity: 0, x: window.innerWidth < 768 ? -280 : -200 }}
				whileInView={{ opacity: 1, x: window.innerWidth < 769 ? -280 : -150 }}
				transition={{
					delay: 0.6,
					duration: 0.8,
					type: 'spring',
					stiffness: 80,
				}}
				viewport={{ amount: 0.3, once: true }}
				className='absolute'
			>
				<Image
					src='/skills.png'
					alt='skills hero Image'
					width={350}
					height={100}
				/>
			</motion.div>
			<h2 className='text-3xl md:text-4xl text-center uppercase mb-5 md:mb-1'>
				My Skills
			</h2>
			<p className='opacity-75 text-center'>
				Here are some few technologies I have been working with recently but not
				limited to:
			</p>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, type: 'spring' }}
				viewport={{ amount: 0.3, once: true }}
				className='w-full md:max-w-2xl md:mx-auto grid gap-y-8 md:gap-y-10 grid-cols-2 md:grid-cols-5 mt-8'
			>
				{frontendTools.map((tool) => (
					<div
						key={tool.name}
						className='flex-center flex-col gap-y-2 group'
					>
						<Image
							src={tool.image}
							alt={`${tool.name}_logo`}
							width={60}
							height={60}
							className={`relative drop-shadow-none transition-all ease-in-out duration-200 group-hover:drop-shadow-[0_0_0.7rem_${tool.color}70] group-hover:scale-[1.1]`}
						/>
						<p className='text-[0.95rem] opacity-70 group-hover:opacity-100 cursor-default transition-opacity ease-in-out duration-200'>
							{tool.name}
						</p>
					</div>
				))}
			</motion.div>
		</section>
	);
};

export default SkillsSection;
