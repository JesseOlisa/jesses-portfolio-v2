'use client';

import React from 'react';

import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectSection from '@/components/ProjectSection';

const Home = () => {
	return (
		<main className='w-full min-h-screen relative'>
			<HeroSection />
			<SkillsSection />
			<ProjectSection />
		</main>
	);
};

export default Home;
