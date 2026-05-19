import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { frontendTools } from '../../utils/data';

const SkillsSection = () => {
	let isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 768;
	return (
		<section className='relative px-12 bg-zinc-800/20 py-16 border-y border-white/5 overflow-hidden'>
			{/* Decorative background image */}
			<motion.div
				initial={{ opacity: 0, x: isMobileScreen ? -280 : -200 }}
				whileInView={{ opacity: 1, x: isMobileScreen ? -280 : -150 }}
				transition={{
					delay: 0.6,
					duration: 0.8,
					type: 'spring',
					stiffness: 80,
				}}
				viewport={{ amount: 0.3, once: true }}
				className='absolute pointer-events-none'
			>
				<Image
					src='/skills.png'
					alt='skills hero Image'
					width={350}
					height={100}
					className='w-auto h-auto opacity-40'
				/>
			</motion.div>

			<div className='relative z-10'>
				<p className='text-xs uppercase tracking-widest text-[#BF40BF] text-center mb-2 font-medium'>
					Toolkit
				</p>
				<h2 className='text-3xl md:text-4xl text-center font-bold mb-3'>
					My Skills
				</h2>
				<p className='opacity-60 text-center text-sm max-w-md mx-auto'>
					Technologies I&apos;ve been working with recently — and not limited to:
				</p>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.0, type: 'spring', stiffness: 60 }}
					viewport={{ amount: 0.3, once: true }}
					className='w-full md:max-w-2xl md:mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 mt-10'
				>
					{frontendTools.map((tool, i) => (
						<motion.div
							key={tool.name}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.05, duration: 0.4 }}
							viewport={{ amount: 0.2, once: true }}
							className='group flex flex-col items-center gap-y-2.5 py-5 px-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xs cursor-default transition-all duration-200 hover:border-white/20 hover:bg-white/8'
							style={{
								boxShadow: 'none',
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLElement).style.boxShadow = `0 0 22px ${tool.color}25`;
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLElement).style.boxShadow = 'none';
							}}
						>
							<Image
								src={tool.image}
								alt={`${tool.name}_logo`}
								width={48}
								height={48}
								className={`relative drop-shadow-none transition-all ease-in-out duration-200 group-hover:drop-shadow-[0_0_0.6rem_${tool.color}90] group-hover:scale-[1.12]`}
							/>
							<p className='text-[0.8rem] opacity-60 group-hover:opacity-100 cursor-default transition-opacity ease-in-out duration-200 text-center'>
								{tool.name}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default SkillsSection;
