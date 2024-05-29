'use client';
import React from 'react';

import {
	NavbarContainer,
	LogoContainer,
	LogoImage,
	NavLinks,
	NavLink,
	NavLinkImage,
	CountText,
	AvatarImage
} from './components';
import { useAtom } from 'jotai';
import { rewardAtom } from '@/atoms/atoms';

const coinImage = '/assets/gold.png';
const xpImage = '/assets/exp.png';
const avatarImage = '/assets/avatar.png';
const logoSVG = '/ng_n_g_logo.svg';

/**
 * Renders the AppBar component.
 *
 * @return {JSX.Element} The rendered AppBar component.
 */
const AppBar = () => {
	/**
 	* State defined by jotai
 	*/
	const [reward] = useAtom(rewardAtom);

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
	);
};

export default AppBar;
