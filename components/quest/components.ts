import { MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'
interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

interface QuestCardContainerProps {
	children: ReactNode
	className?: string
}

interface ButtonWithoutTransparentBgProps {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLHeadingElement>
}
export const questImage = '/assets/questImage.png'
export const xpIcon = '/assets/exp.svg'
export const goldIcon = '/assets/gold.svg'
export const swordIcon = '/assets/sword.svg'
export const solidityIcon = '/assets/solidity.svg'
export const lowRankSword = '/assets/low-rank-sword.svg'

export const QuestCardContainer = styled.div<QuestCardContainerProps>`
	position: relative;
	padding: 16px;

	&:hover {
		cursor: url('/assets/sword.png'), auto;
	}

	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border: 16px solid transparent;
		border-image: url('/assets/border.png') 18 round;
		pointer-events: none;
		transition: filter 1.3s;
	}

	&:hover::after {
		border-image: url('/assets/border.png') 18 round;
		filter: brightness(3);
	}
`

export const QuestDetailContainer = styled.div`
	width: 800px;
	cursor: pointer;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	background-color: #080808;
	position: relative;
	margin: 0 auto;
`

export const QuestImage = styled.img<ImgProps>`
	width: 100%;
	height: 100px;
	object-fit: cover;
	border-radius: 10px;
`

export const QuestDetails = styled.div`
	color: #fff;
`

export const QuestName = styled.h3`
	font-size: 1.2rem;
	margin: 0;
`

export const XPContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
	gap: 4px;
`

export const XPValue = styled.span`
	font-weight: bold;
`

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
	width: 100%;
`

export const IconText = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

export const GoldValue = styled.span`
	font-weight: bold;
	display: flex;
	align-items: center;
	font-size: 14px;
	gap: 4px;
`

export const CapsulesSection = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
  border: 1px solid #212121;
	font-size: 14px;
  padding: 7px;
  border-radius: 6px;
}
`

export const CapsulesIcon = styled.img<ImgProps>`
	width: 20px;
	height: 20px;
`

export const CapsulesText = styled.span`
	font-weight: bold;
	text-overflow: ellipsis;
	max-width: 85px;
	text-wrap: nowrap;
	overflow: hidden;
`

export const Block = styled.div`
	color: #7c7c7c;
	font-family: Inter;
	font-size: 14px;
	line-height: 19px;
	margin: 12px 0 55px 0;
`
export const ButtonBlock = styled.div`
	color: #7c7c7c;
	font-family: Inter;
	font-size: 14px;
	line-height: 19px;
`

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	justify-content: space-between;
`

export const ButtonWithTransparentBg = styled.button`
	width: fit-content;
	border: 8px solid transparent;
	border-image: url('/assets/border.png') 18 round;
	color: #b69e72;
	display: flex;
	background-color: transparent;
	height: 42px;
	width: 160px;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: url('/assets/sword.png'), auto;
		filter: brightness(1.3);
	}
`

export const ButtonWithoutTransparentBg = styled.h4<ButtonWithoutTransparentBgProps>`
	width: auto;
	padding: 20px;
	display: flex;
	width: 344px;
	height: 42px;
	margin-block-start: 0;
	margin-block-end: 0;
	color: #0f0f0f;
	align-items: center;
	justify-content: center;
	background-image: url('/assets/button.png');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	transition: filter 0.3s;
	user-select: none;

	&:hover {
		cursor: url('/assets/sword.png'), auto;
		filter: brightness(1.1);
	}

	&:active {
		filter: brightness(0.5);
	}
`
