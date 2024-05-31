'use client'

import { rewardAtom } from '@/atoms/atoms'
import { useAtom } from 'jotai'
import {
	AvatarImage,
	CountText,
	LogoContainer,
	LogoImage,
	NavLink,
	NavLinkImage,
	NavLinks,
	NavbarContainer
} from './components'

const coinImage = '/assets/gold.svg'
const xpImage = '/assets/exp.svg'
const avatarImage = '/assets/avatar.png'
const logoSVG = '/ng_n_g_logo.svg'

/**
 * Renders the AppBar component.
 *
 * @return {JSX.Element} The rendered AppBar component.
 */
const AppBar = () => {
	/**
	 * State defined by jotai
	 */
	const [reward] = useAtom(rewardAtom)

	return (
		<NavbarContainer>
			<LogoContainer>
				<LogoImage src={logoSVG} alt='Logo' />
			</LogoContainer>
			<NavLinks>
				<NavLink>
					<NavLinkImage src={coinImage} alt='Coin' />
					<CountText>{reward.gold}</CountText>
				</NavLink>
				<NavLink>
					<NavLinkImage src={xpImage} alt='XP' />
					<CountText>{reward.xp}</CountText>
				</NavLink>
				<NavLink>
					<AvatarImage src={avatarImage} alt='Avatar' />
				</NavLink>
			</NavLinks>
		</NavbarContainer>
	)
}

export default AppBar
