'use client'
import { CenterBox, MainContainer, QuestInnerContainer } from '@/components/CenterBox'
import QuestBorder from '@/components/quest-border/QuestBorder'
import { Quest } from '@/components/quest/quest.type'
import { useQuery } from '@tanstack/react-query'
import QuestCard from '../../components/quest/QuestCard'
import instance from '../requests/axios'

/**
 * Function to retrieve list of quests from the server.
 *
 * @returns {Promise<Quest[]>} A promise that resolves to the quests data.
 */
const getQuests = () => instance.get('/quests').then(({ data }) => data)

/**
 * Renders the QuestsPage component.
 *
 * @returns {JSX.Element} The rendered QuestsPage component.
 */
const QuestsPage = () => {
	// Use useQuery hook to fetch quests data
	const {
		data: questData, // Quest data obtained from the API
		isLoading, // Loading state
		isError // Error state
	} = useQuery({
		//@ts-ignore
		queryKey: 'quests', // Unique key for the query
		queryFn: async () => {
			const data = await getQuests()
			console.log(data, 'data')
			return data
		} // Function to fetch quests data
	})

	// If data is loading, display a loading message
	if (isLoading) return <div className='loading-indicator'>Loading...</div>
	// If there is an error, display an error message
	if (isError) return <div>An error occurred</div>

	return (
		<MainContainer>
			{/* Container to center the quest cards */}
			{/* @ts-ignore */}
			<CenterBox>
				<QuestBorder />
				<QuestInnerContainer>
					{/* Render each quest card */}
					{/* @ts-ignore */}
					{questData && questData.map((quest: Quest) => <QuestCard key={quest.slug} quest={quest} />)}
				</QuestInnerContainer>
			</CenterBox>
		</MainContainer>
	)
}

export default QuestsPage
