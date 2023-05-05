import './globals.css';
import Header from '@/app/components/Header';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
	title: 'Jesse Olisa',
	description:
		"Welcome to Jesse Olisa's portfolio. Web Developer and Frontend Engineer from West Africa.",
	verification: {
		google: 'zSQw_SrYKkUNHr6G84F4JoqUa81ZtmyaFy_44uBOJG8',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Analytics />
				<Header />
				{children}
			</body>
		</html>
	);
}
