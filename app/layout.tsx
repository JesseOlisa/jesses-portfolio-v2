import './globals.css';
import Head from 'next/head';
import Header from '@/app/components/Header';

export const metadata = {
	title: 'Jesse Olisa',
	description:
		"Welcome to Jesse Olisa's portfolio. Web Developer and Frontend Engineer from West Africa.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Head>
				<meta
					name='google-site-verification'
					content='zSQw_SrYKkUNHr6G84F4JoqUa81ZtmyaFy_44uBOJG8'
				/>
			</Head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
