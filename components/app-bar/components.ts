import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;
	color: #fff;
`

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`

export const LogoImage = styled.img`
	width: 100px;
	height: 100px;
`

export const NavLinks = styled.ul`
	list-style: none;
	display: flex;
	gap: 1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}
`

export const NavLink = styled.li`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
`

export const NavLinkImage = styled.img`
	width: 20px;
	height: 20px;
`

export const AvatarImage = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid #b69e72;
`

export const CountText = styled.span`
	color: #b69e72;
`
