'use client'

import instance from '@/app/requests/axios'
import { CenterBox, MainBox } from '@/components/CenterBox'
import QuestDetail from '@/components/quest/QuestDetail'
import { Quest } from '@/components/quest/quest.type'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

/**
 * Retrieves a quest by its ID.
 *
 * @param {string} id - The ID of the quest.
 * @return {Promise<Quest>} A promise that resolves to the quest data.
 */
const getQuest = async (id: string): Promise<Quest> => {
	// Fetch quest data from the server
	const { data } = await instance.get(`/quest?questSlug=${id}`)
	return data // Return the quest data
}

/**
 * Renders the QuestDetailPage component.
 *
 * @return {JSX.Element} The rendered QuestDetailPage component.
 */
const QuestDetailPage = () => {
	// Get the quest ID from the URL parameters
	const { id } = useParams() as { id: string }

	// Use useQuery hook to fetch quest data
	const {
		data: quest,
		isLoading,
		isError
	} = useQuery<Quest>({
		queryKey: ['quest', id], // Unique key for the query
		queryFn: () => getQuest(id) // Function to fetch quest data
	})

	// If data is loading, display a loading message
	if (isLoading) return <div>Loading...</div>
	// If there is an error, display an error message
	if (isError) return <div>An error occurred</div>

	// Render the QuestDetail component if quest data is available
	return (
		quest && (
			<MainBox>
				{/* Center the QuestDetail component */}
				<CenterBox>
					<QuestDetail quest={quest} />
				</CenterBox>
			</MainBox>
		)
	)
}

export default QuestDetailPage
