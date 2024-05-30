import {
	BorderBottomLeft,
	BorderBottomRight,
	BorderContainer,
	BorderInnerContainer,
	BorderOverlay,
	BorderTopLeft,
	BorderTopRight,
	BottomLeftImg,
	BottomLeftImgInner,
	BottomRightImg,
	BottomRightImgInner,
	TopLeftImg,
	TopLeftImgInner,
	TopRightImg,
	TopRightImgInner
} from './styles'

const ornamentedSegment = '/assets/containers/ornamented-corner.svg'

const QuestBorder = () => {
	return (
		<BorderContainer>
			<BorderInnerContainer>
				<BorderOverlay />
				<BorderTopLeft />
				<BorderBottomLeft />
				<BorderTopRight />
				<BorderBottomRight />
				<TopLeftImg>
					<TopLeftImgInner src={ornamentedSegment} />
				</TopLeftImg>
				<TopRightImg>
					<TopRightImgInner src={ornamentedSegment} />
				</TopRightImg>
				<BottomLeftImg>
					<BottomLeftImgInner src='/assets/containers/ornamented-corner.svg' />
				</BottomLeftImg>
				<BottomRightImg>
					<BottomRightImgInner src='/assets/containers/ornamented-corner.svg' />
				</BottomRightImg>
			</BorderInnerContainer>
		</BorderContainer>
	)
}

export default QuestBorder
