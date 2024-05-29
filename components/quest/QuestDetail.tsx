'use client'
import { rewardAtom } from '@/atoms/atoms'
import { useAtom } from 'jotai'
import Link from 'next/link'
import { FC } from 'react'
import { FlexBox } from '../Flex'
import {
	Block,
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
	questImage,
	solidityIcon,
	swordIcon,
	xpIcon
} from './components'
import { Quest } from './quest.type'

interface IQuestDetail {
	quest: Quest
}

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
			<QuestImage src={quest.cover ?? questImage} alt='Quest Image' />
			<QuestDetails>
				<Row>
					<QuestName>{quest.title}</QuestName>
				</Row>
				<Row>
					<IconText>
						<CapsulesSection>
							<CapsulesIcon src={solidityIcon} alt='Solidity Icon' />
							<CapsulesText>{quest.language.label}</CapsulesText>
						</CapsulesSection>
						<CapsulesSection>
							{Array.from({ length: quest.difficulty }).map((ar, index) => (
								<CapsulesIcon key={index} src={swordIcon} alt='Sword Icon' />
							))}
							{Array.from({ length: 5 - quest.difficulty }).map((_ar, index) => (
								<CapsulesIcon key={index} src={'/knife.svg'} alt='Sword Icon' />
							))}
						</CapsulesSection>
					</IconText>
					<FlexBox>
						<GoldValue>
							<img src={goldIcon} alt='Gold Icon' />
							<span> {quest.rewards.gold}</span>
						</GoldValue>
						<XPContainer>
							<img src={xpIcon} alt='XP Icon' />
							<XPValue>{quest.rewards.expPoints}</XPValue>
						</XPContainer>
					</FlexBox>
				</Row>
			</QuestDetails>
			<Block>{quest.description}</Block>
			<Block>
				<ButtonContainer>
					{/* @ts-ignore */}
					<Link href={`/quests/`} passHref>
						<ButtonWithTransparentBg>Go Back</ButtonWithTransparentBg>
					</Link>
					<ButtonWithoutTransparentBg
						/**
						 * Update global jotai state
						 */
						onClick={() => {
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
			</Block>
		</QuestDetailContainer>
	)
}

export default QuestDetail
