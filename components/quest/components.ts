import styled from 'styled-components'

export const questImage = '/assets/questImage.png'
export const xpIcon = '/assets/exp.svg'
export const goldIcon = '/assets/gold.svg'
export const swordIcon = '/assets/sword.svg'
export const solidityIcon = '/assets/solidity.svg'
export const lowRankSword = '/assets/low-rank-sword.svg'

export const QuestCardContainer = styled.div`
	cursor: pointer;
	border: 16px solid transparent;
	border-image: url('/assets/border.png') 18 round;
	overflow: hidden;
	// padding: 16px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	&:hover {
		border-color: #40382c;
	}
`

export const QuestDetailContainer = styled.div`
	width: 800px;
	cusrsor: pointer;
	border: 1px solid #212121;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	padding: 20px;
	background-color: #080808;
	position: relative;
	margin: 0 auto;
`

export const QuestImage = styled.img`
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

export const CapsulesIcon = styled.img`
	width: 20px;
	height: 20px;
`

export const CapsulesText = styled.span`
	font-weight: bold;
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
	height: 42px;
	width: 160px;
	flex-shrink: 0;
	background-color: transparent;
	color: #b69e72;
	border-radius: 10px;
	border: 2px solid #212121;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #b69e72;
		color: #000;
	}
`

export const ButtonWithoutTransparentBg = styled.button`
	padding: 10px;
	background-color: #b69e72;
	color: #000;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #b69e72;
		color: #000;
	}
`
