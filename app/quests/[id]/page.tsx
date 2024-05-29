'use client';

import instance from '@/app/requests/axios';
import { CenterBox } from '@/components/CenterBox';
import QuestDetail from '@/components/quest/QuestDetail';
//@ts-ignore
import { useQuery } from '@tanstack/react-query';
//@ts-ignore
import { useParams } from 'next/navigation';
import { Quest } from '@/components/quest/quest.type';

/**
 * Retrieves a quest by its ID.
 *
 * @param {string} id - The ID of the quest.
 * @return {Promise<Quest>} A promise that resolves to the quest data.
 */
const getQuest = async (id: string): Promise<Quest> => {
  const { data } = await instance.get(`/quest?questSlug=${id}`);
  return data;
};

/**
 * Renders the QuestDetailPage component.
 *
 * @return {JSX.Element} The rendered QuestDetailPage component.
 */
const QuestDetailPage = () => {
  const { id } = useParams() as { id: string };

  const { data: quest, isLoading, isError } = useQuery<Quest>({
    queryKey: ['quest', id],
    queryFn: () => getQuest(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred</div>;

  return (
    quest && (
      <div>
				{/* @ts-ignore */}
        <CenterBox>
				{/* @ts-ignore */}
          <QuestDetail quest={quest} />
        </CenterBox>
      </div>
    )
  );
};

export default QuestDetailPage;