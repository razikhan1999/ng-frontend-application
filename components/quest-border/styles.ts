import styled from 'styled-components'
const ornamentedSegment = '/assets/containers/ornamented-segment.svg'
interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const BorderContainer = styled.div`
	position: absolute;
	inset: 0px;
	z-index: 300;
	pointer-events: none;
`

export const BorderInnerContainer = styled.div`
	position: relative;
	border: 1px solid rgb(47, 43, 36);
	width: 100%;
	height: 100%;
`

export const BorderOverlay = styled.div`
	position: absolute;
	inset: 0px 0px 0px 36px;
	width: calc(100% - 64px);
	margin: 4px 0px;
	border-top: 2px solid rgb(64, 56, 44);
	border-bottom: 2px solid rgb(64, 56, 44);
`

export const BorderTopLeft = styled.div`
	position: absolute;
	top: 36px;
	left: 4px;
	height: calc(50% - 40px);
	width: 2px;
	background-color: rgb(64, 56, 44);

	&::after {
		content: url(${ornamentedSegment});
		position: absolute;
		left: 0px;
		bottom: -10px;
		width: 6px;
		height: 16px;
	}
`

export const BorderBottomLeft = styled.div`
	position: absolute;
	bottom: 36px;
	left: 4px;
	width: 2px;
	height: calc(50% - 40px);
	background-color: rgb(64, 56, 44);
`

export const BorderTopRight = styled.div`
	position: absolute;
	top: 36px;
	right: 4px;
	height: calc(50% - 40px);
	width: 2px;
	background-color: rgb(64, 56, 44);

	&::after {
		content: url(${ornamentedSegment});
		position: absolute;
		right: 0px;
		bottom: -10px;
		width: 6px;
		height: 16px;
		transform: scaleX(-1);
	}
`

export const BorderBottomRight = styled.div`
	position: absolute;
	bottom: 36px;
	right: 4px;
	width: 2px;
	height: calc(50% - 40px);
	background-color: rgb(64, 56, 44);
`

export const TopLeftImg = styled.div`
	top: 4px;
	left: 4px;
	position: absolute;
	height: 32px;
	width: 32px;
`

export const TopLeftImgInner = styled.img<ImgProps>`
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	object-fit: cover;
	color: transparent;
`

export const TopRightImg = styled.div`
	top: 4px;
	right: 4px;
	transform: scaleX(-1);

	position: absolute;
	height: 32px;
	width: 32px;
`

export const TopRightImgInner = styled.img<ImgProps>`
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	object-fit: cover;
	color: transparent;
`

export const BottomLeftImg = styled.div`
	bottom: 4px;
	left: 4px;
	transform: scaleX(-1) rotate(180deg);

	position: absolute;
	height: 32px;
	width: 32px;
`

export const BottomLeftImgInner = styled.img<ImgProps>`
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	object-fit: cover;
	color: transparent;
`

export const BottomRightImg = styled.div`
	bottom: 4px;
	right: 4px;
	transform: rotate(180deg);

	position: absolute;
	height: 32px;
	width: 32px;
`

export const BottomRightImgInner = styled.img<ImgProps>`
position: absolute;
height: 100%;
width: 100%;
left: 0;
top: 0;
right: 0;
bottom: 0;
object-fit: cover;
color: transparent;
}
`
