import styled from 'styled-components';

export const questImage = '/assets/questImage.png';
export const xpIcon = '/assets/exp.png';
export const goldIcon = '/assets/gold.png';
export const swordIcon = '/assets/sword.svg';
export const solidityIcon = '/assets/solidity.svg';

export const QuestCardContainer = styled.div`
	width: 550px;
	cusrsor: pointer;
	border: 1px solid;
	border-radius: 8px;
	overflow: hidden;
	padding-bottom: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const QuestDetailContainer = styled.div`
	width: 800px;
	cusrsor: pointer;
	border: 1px solid black;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const QuestImage = styled.img`
	width: 100%;
	height: 150px;
`;

export const QuestDetails = styled.div`
	padding: 1rem;
	color: #fff;
`;

export const QuestName = styled.h3`
	font-size: 1.2rem;
	margin: 0;
`;

export const XPContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
`;

export const XPValue = styled.span`
	font-weight: bold;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
	width: 100%;
`;

export const IconText = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const GoldValue = styled.span`
	font-weight: bold;
	display: flex;
	align-items: center;
	font-size: 14px;
`;

export const CapsulesSection = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
  border: 1px solid white;
	font-size: 14px;
  padding: 7px;
  border-radius: 15px;
}
`;

export const CapsulesIcon = styled.img`
	width: 20px;
	height: 20px;
`;

export const CapsulesText = styled.span`
	font-weight: bold;
`;

export const Block = styled.div`
	margin: 5px 20px 40px 20px;
	color: #7c7c7c;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	justify-content: space-between;
`;

export const ButtonWithTransparentBg = styled.button`
	padding: 10px;
	background-color: transparent;
	color: #b69e72;
	border-radius: 10px;
	border: 2px solid #b69e72; /* Optional: Add a border to distinguish the button */
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;

	&:hover {
		background-color: #b69e72;
		color: #000;
	}
`;

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
`;
