import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../utils/data';

import { IoMdClose } from 'react-icons/io';
import { FiExternalLink } from 'react-icons/fi';

import { projectType } from '../types/projectType';

const ProjectSection = () => {
	const [showCard, setShowCard] = useState<undefined | projectType>(undefined);

	return (
		<section className='mt-12 px-10 mb-10'>
			<h2 className='text-3xl md:text-4xl text-center uppercase mb-5 md:mb-1'>
				Featured Projects
			</h2>
			<p className='opacity-75 text-center'>
				Here are some of the projects I worked on:
			</p>

			<div className='flex-center gap-6 flex-wrap mt-8'>
				{projects.map((project) => (
					<motion.div
						key={project.name}
						layoutId={project.name}
						className='cursor-pointer max-w-[20rem] group rounded-lg border border-neutral-900 transition-colors hover:shadow-md hover:shadow-white/5'
						onClick={() => setShowCard(project)}
					>
						<Image
							src={project.image}
							alt={`${project.name} preview`}
							width={350}
							height={100}
							className='rounded-t-md'
						/>
						<div className='py-5 px-2 bg-black group-hover:bg-neutral-800/30 rounded-b-lg'>
							<h4>{project.name}</h4>
							<p className='text-sm opacity-75 mt-1'>{project.shortDesc}</p>
						</div>
					</motion.div>
				))}
			</div>

			{showCard && (
				<AnimatePresence mode='wait'>
					<motion.div
						key='modal'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='w-full z-10 h-screen fixed bg-black/75 flex-center top-0 left-0'
					>
						<motion.div
							layoutId={showCard.name}
							initial={{ opacity: 0.5 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0.5 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className=' max-w-[320px] md:max-w-[25rem] min-h-[20rem] bg-zinc-900 mt-5 mx-auto z-10 text-sm text-white'
						>
							<div className='relative'>
								<Image
									src={showCard.image}
									alt={`${showCard.name} preview`}
									width={350}
									height={100}
									className='rounded-t-md w-full'
								/>
								<button
									onClick={() => setShowCard(undefined)}
									className='bg-black absolute right-1 top-1 transition-opacity opacity-50 hover:opacity-70 rounded-full p-1 text-white'
								>
									<IoMdClose size={20} />
								</button>
							</div>
							<div className='px-5 py-4 flex flex-col gap-2 text-gray-200'>
								<h2 className='text-lg text-white'>{showCard.name}</h2>
								<p className='text-xs italic text-gray-400 -mt-2'>
									{showCard.category}
								</p>
								<div>
									<h5 className='text-gray-200 mb-1'>Description:</h5>
									<p className='text-xs opacity-80 font-extralight'>
										{showCard.longDesc}
									</p>
								</div>
								<div>
									<h5 className='text-gray-200 mb-1'>Built With:</h5>
									<p className='text-xs font-extralight opacity-80'>
										{showCard.built}
									</p>
								</div>
								<div className='flex gap-4 mt-2'>
									<Link
										href={showCard.siteLink}
										target='_blank'
										rel='noopener noreferrer'
										className='bg-[#BF40BF] text-white py-1 px-2 text-xs rounded-xl transition-transform hover:scale-[1.1]'
									>
										Visit Site
										<FiExternalLink className='inline-block -mt-1 ml-1' />
									</Link>
									<Link
										href={showCard.codeLink}
										target='_blank'
										rel='noopener noreferrer'
										className='bg-gray-700 text-white py-1 px-2 text-xs rounded-xl'
									>
										View Code
									</Link>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</AnimatePresence>
			)}
		</section>
	);
};

export default ProjectSection;
