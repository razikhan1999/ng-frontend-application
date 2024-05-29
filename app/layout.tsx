import SmokeEffect from '@/components/SmokeEffect'
import AppBar from '@/components/app-bar/AppBar'
import dynamic from 'next/dynamic'
import { ClientProviders } from './providers'
import StyledComponentsRegistry from './registry'

const MouseParticlesDynamic = dynamic(() => import('@/components/mouse-particle/CustomMouseParticle'), { ssr: false })

export default function RootLayout({ children }: { children: any }) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />
				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body>
				{/* @ts-ignore */}
				<MouseParticlesDynamic
					g={1}
					color={['#BEA77E', '##8E8E8E', '#212121', '#7A7A7A', '#0F0F0F']}
					cull='container,image-wrapper'
				/>
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
				{/* @ts-ignore */}
				<SmokeEffect />
			</body>
		</html>
	)
}
