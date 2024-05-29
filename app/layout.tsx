import AppBar from '@/components/app-bar/AppBar';
import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';

export default function RootLayout({
	children
}: {
	children: any;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />
				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body>
				{/* @ts-ignore */}
				<StyledComponentsRegistry>
				{/* @ts-ignore */}
					<ClientProviders>
				{/* @ts-ignore */}
						<AppBar />
				{/* @ts-ignore */}
						{children}
					</ClientProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
