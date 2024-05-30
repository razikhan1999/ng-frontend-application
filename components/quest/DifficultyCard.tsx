import { FC } from 'react'
import { BorderContainer } from '../BorderContainer'
import { CapsulesIcon, lowRankSword, swordIcon } from './components'
import { IQuestCard } from './quest.type'

/**
 * DifficultyCard component to display the difficulty level of a quest using sword icons.
 *
 * @component
 * @param {IQuestCard} props - Props containing quest data.
 * @returns {JSX.Element} The rendered DifficultyCard component.
 */
const DifficultyCard: FC<IQuestCard> = ({ quest }) => {
	return (
		<BorderContainer>
			{/* Render full swords representing the difficulty level of the quest */}
			{Array.from({ length: quest.difficulty }).map((_, index) => (
				<CapsulesIcon key={index} src={swordIcon} alt='Sword Icon' />
			))}

			{/* Render low-rank swords to fill up to a total of 5 swords */}
			{Array.from({ length: 5 - quest.difficulty }).map((_, index) => (
				<CapsulesIcon key={index} src={lowRankSword} alt='Sword Icon' />
			))}
		</BorderContainer>
	)
}

export default DifficultyCard
