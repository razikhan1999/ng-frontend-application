'use client';
import { CenterBox } from '@/components/CenterBox';
import { Quest } from '@/components/quest/quest.type';
import { useQuery } from '@tanstack/react-query';
import QuestCard from '../../components/quest/QuestCard';
import instance from '../requests/axios';

const getQuests = () => instance.get('/quests').then(({ data }) => data);

const QuestsPage = () => {
	const {
		data: questData,
		isLoading,
		isError
	} = useQuery({
		//@ts-ignore
		queryKey: 'quests',
		queryFn: getQuests
	});

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>An error occurred</div>;

	return (
		<div>
			{/* @ts-ignore */}
			<CenterBox>
			{/* @ts-ignore */}
				{questData && questData.map((quest: Quest) => <QuestCard key={quest.slug} quest={quest} />)}
			</CenterBox>
		</div>
	);
};

export default QuestsPage;
