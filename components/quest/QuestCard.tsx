import Link from 'next/link' // Import Link from next/link
import { FC } from 'react'
import {
	CapsulesIcon,
	CapsulesSection,
	CapsulesText,
	GoldValue,
	IconText,
	QuestCardContainer,
	QuestDetails,
	QuestImage,
	QuestName,
	Row,
	XPContainer,
	XPValue,
	goldIcon,
	lowRankSword,
	questImage,
	swordIcon,
	xpIcon
} from './components'
import { IQuestCard } from './quest.type'

/**
 * QuestCard component to display individual quest details in a card format.
 *
 * @component
 * @param {IQuestCard} props - Props containing quest data.
 * @param {Object} props.quest - Quest object containing details about the quest.
 * @param {string} props.quest.slug - Unique slug identifier for the quest.
 * @param {string} props.quest.cover - URL of the quest cover image.
 * @param {string} props.quest.title - Title of the quest.
 * @param {Object} props.quest.rewards - Rewards associated with the quest.
 * @param {number} props.quest.rewards.expPoints - Experience points awarded for the quest.
 * @param {number} props.quest.rewards.gold - Gold awarded for the quest.
 * @param {Object} props.quest.language - Language details of the quest.
 * @param {string} props.quest.language.label - Label for the quest language.
 * @param {number} props.quest.difficulty - Difficulty level of the quest (1-5).
 * @param {Object} props.quest.type - Type details of the quest.
 * @param {string} props.quest.type.label - Label for the quest type.
 *
 * @returns {JSX.Element} The rendered QuestCard component.
 */
const QuestCard: FC<IQuestCard> = ({ quest }) => {
	return (
		// @ts-ignore
		<Link href={`/quests/${quest.slug}`} passHref>
			{/* Main container for the quest card */}
			<QuestCardContainer className='quest-card'>
				{/* Display the quest image or a default image if not provided */}
				<QuestImage src={quest.cover ?? questImage} alt='Quest Image' />
				{/* Container for the quest details */}
				<QuestDetails>
					<Row>
						{/* Display the quest title */}
						<QuestName>{quest.title}</QuestName>
						{/* Container for displaying experience points */}
						<XPContainer>
							<img src={xpIcon} alt='XP Icon' />
							<XPValue>{quest.rewards.expPoints}</XPValue>
						</XPContainer>
					</Row>
					<Row>
						<IconText>
							{/* Display the quest language */}
							<CapsulesSection>
								<CapsulesIcon src={swordIcon} alt='Sword Icon' />
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
							{/* Display the quest type */}
							<CapsulesSection>
								<CapsulesText>{quest.type.label}</CapsulesText>
							</CapsulesSection>
						</IconText>
						{/* Display the gold reward */}
						<GoldValue>
							<img src={goldIcon} alt='Gold Icon' />
							<span> {quest.rewards.gold}</span>
						</GoldValue>
					</Row>
				</QuestDetails>
			</QuestCardContainer>
		</Link>
	)
}

export default QuestCard
