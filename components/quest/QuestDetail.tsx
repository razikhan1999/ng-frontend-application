'use client'
import { rewardAtom } from '@/atoms/atoms'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { FC } from 'react'
import { FlexBox } from '../Flex'
import QuestBorder from '../quest-border/QuestBorder'
import {
	Block,
	ButtonBlock,
	ButtonContainer,
	ButtonWithTransparentBg,
	ButtonWithoutTransparentBg,
	CapsulesIcon,
	CapsulesSection,
	CapsulesText,
	GoldValue,
	IconText,
	QuestDetailContainer,
	QuestDetails,
	QuestImage,
	QuestName,
	Row,
	XPContainer,
	XPValue,
	goldIcon,
	lowRankSword,
	questImage,
	solidityIcon,
	swordIcon,
	xpIcon
} from './components'
import { IQuestDetail, Quest } from './quest.type'

/**
 * Renders the details of a quest.
 *
 * @param {IQuestDetail} props - The props object containing the quest data.
 * @param {Quest} props.quest - The quest object containing the quest details.
 * @return {JSX.Element} The JSX element representing the quest details.
 */
const QuestDetail: FC<IQuestDetail> = ({ quest }) => {
	const [reward, setReward] = useAtom(rewardAtom)

	return (
		<QuestDetailContainer>
			<QuestBorder />
			{/* Display the quest image or a default image if not provided */}
			<QuestImage src={quest.cover ?? questImage} alt='Quest Image' />
			{/* Container for the quest details */}
			<QuestDetails>
				<Row>
					{/* Display the quest title */}
					<QuestName>{quest.title}</QuestName>
				</Row>
				<Row>
					<IconText>
						{/* Display the quest language */}
						<CapsulesSection>
							<CapsulesIcon src={solidityIcon} alt='Solidity Icon' />
							<CapsulesText>{quest.language.label}</CapsulesText>
						</CapsulesSection>
						{/* Display the quest difficulty using icons */}
						<CapsulesSection>
							{Array.from({ length: quest.difficulty }).map((_, index) => (
								<CapsulesIcon key={index} src={swordIcon} alt='Sword Icon' />
							))}
							{Array.from({ length: 5 - quest.difficulty }).map((_, index) => (
								<CapsulesIcon key={index} src={lowRankSword} alt='Sword Icon' />
							))}
						</CapsulesSection>
					</IconText>
					<FlexBox>
						{/* Display the gold reward */}
						<GoldValue>
							<img src={goldIcon} alt='Gold Icon' />
							<span> {quest.rewards.gold}</span>
						</GoldValue>
						{/* Display the experience points */}
						<XPContainer>
							<img src={xpIcon} alt='XP Icon' />
							<XPValue>{quest.rewards.expPoints}</XPValue>
						</XPContainer>
					</FlexBox>
				</Row>
			</QuestDetails>
			{/* Display the quest description */}
			<Block>{quest.description}</Block>
			<ButtonBlock>
				<ButtonContainer>
					{/* Link to go back to the quests list */}
					{/* @ts-ignore */}
					<Link href={`/quests/`} passHref>
						<ButtonWithTransparentBg>Go Back</ButtonWithTransparentBg>
					</Link>
					{/* Button to airdrop rewards to the guardian */}
					<ButtonWithoutTransparentBg
						onClick={() => {
							// Update global Jotai state with new reward values
							setReward({
								...reward,
								xp: reward.xp + quest.rewards.expPoints,
								gold: reward.gold + quest.rewards.gold
							})
						}}
					>
						AirDrop Rewards to the Guardian
					</ButtonWithoutTransparentBg>
				</ButtonContainer>
			</ButtonBlock>
		</QuestDetailContainer>
	)
}

export default QuestDetail
