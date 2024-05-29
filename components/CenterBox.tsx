import styled from 'styled-components';

export const CenterBox = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 5px;
	align-items: center;
	overflow: auto;
	margin: 10px 0;
	max-height: 80vh;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 576px) {
		/* Extra small devices (phones) */
		padding: 0 15px;
	}

	@media (min-width: 576px) {
		/* Small devices (landscape phones) */
		padding: 0 30px;
	}

	@media (min-width: 768px) {
		/* Medium devices (tablets) */
		padding: 0 45px;
	}

	@media (min-width: 992px) {
		/* Large devices (desktops) */
		padding: 0 60px;
	}

	@media (min-width: 1200px) {
		/* Extra large devices (large desktops) */
		padding: 0 75px;
	}
`;
