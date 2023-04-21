import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';

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
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
