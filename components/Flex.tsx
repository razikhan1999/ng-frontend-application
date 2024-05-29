import styled from 'styled-components';

export const FlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: end;
	gap: 10px;
	@media (max-width: 800px) {
		flex-direction: row;
	}
`;

export const FlexInner = styled.div<{ percent?: number }>`
	flex: ${(props) => props.percent || 50}%;
`;

export const FlexInnerResponsive = styled.div<{ percent?: number }>`
	flex: ${(props) => props.percent || 50}%;
	@media (max-width: 800px) {
		flex: 100%;
	}
`;
