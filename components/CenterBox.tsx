import styled from 'styled-components'

export const MainContainer = styled.div`
	padding: 0 20px;
`

export const MainBox = styled.div`
	display: flex;
	justify-content: center;
`

export const CenterBox = styled.div`
	position: relative;
	width: fit-content;
	height: 100%;
	padding: 20px 12px 20px 20px;
	background: black;

	@media (max-width: 576px) {
		/* Extra small devices (phones) */
		padding: 0 15px;
	}

	@media (min-width: 576px) {
		/* Small devices (landscape phones) */
		padding: 0 0;
	}

	// @media (min-width: 768px) {
	// 	/* Medium devices (tablets) */
	// 	padding: 0 45px;
	// }

	// @media (min-width: 992px) {
	// 	/* Large devices (desktops) */
	// 	padding: 0 60px;
	// }

	// @media (min-width: 1200px) {
	// 	/* Extra large devices (large desktops) */
	// 	padding: 0 75px;
	// }
`

export const QuestInnerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	-webkit-box-pack: start;
	justify-content: flex-start;
	align-items: flex-start;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
	align-items: center;
	overflow: auto;
	margin: 10px 0;
	max-height: 80vh;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	padding: 20px;
`
