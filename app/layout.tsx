import '../styles/globals.css';
import Header from './Header';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<Header />
				<div className="p-5">{children}</div>
			</body>
		</html>
	);
}
