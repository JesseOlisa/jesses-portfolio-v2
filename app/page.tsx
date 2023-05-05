'use client';

import React from 'react';

import HeroSection from '@/app/components/HeroSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectSection from '@/app/components/ProjectSection';
import Footer from '@/app/components/Footer';

const Home = () => {
	return (
		<main className='w-full min-h-screen relative'>
			<HeroSection />
			<SkillsSection />
			<ProjectSection />
			<Footer />
		</main>
	);
};

export default Home;
