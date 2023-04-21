import React from 'react';

const Header = () => {
	return (
		<header className='flex-between px-6 md:px-12 py-5'>
			<code>Jesse.Olisa</code>
			<button className='bg-[#BF40BF]/90 hover:bg-[#BF40BF]/100 transition px-2 py-2 text-sm rounded-lg'>
				<a
					href='/jesse_ogbonna_CV.pdf'
					download='Jesse_Ogbonna_CV'
				>
					My Resume
				</a>
			</button>
		</header>
	);
};

export default Header;
