// QuestCard.tsx

import React, { FC } from 'react';
import Link from 'next/link'; // Import Link from next/link
import {
	QuestCardContainer,
	QuestImage,
	QuestDetails,
	Row,
	QuestName,
	XPContainer,
	xpIcon,
	XPValue,
	IconText,
	CapsulesSection,
	CapsulesIcon,
	CapsulesText,
	swordIcon,
	GoldValue,
	goldIcon,
	questImage
} from './components';
import { Quest } from './quest.type';
import styled from 'styled-components';


interface IQuestCard {
	quest: Quest;
}



const QuestCard: FC<IQuestCard> = ({ quest }) => {
	return (
		// @ts-ignore
		<Link href={`/quests/${quest.slug}`} passHref>
			<QuestCardContainer>
				<QuestImage src={quest.cover ?? questImage} alt='Quest Image' />
				<QuestDetails>
					<Row>
						<QuestName>{quest.title}</QuestName>
						<XPContainer>
							<img src={xpIcon} alt='XP Icon' />
							<XPValue>{quest.rewards.expPoints}</XPValue>
						</XPContainer>
					</Row>
					<Row>
						<IconText>
							<CapsulesSection>
								<CapsulesIcon src={swordIcon} alt='Sword Icon' />
								<CapsulesText>{quest.language.label}</CapsulesText>
							</CapsulesSection>
							<CapsulesSection>
								{Array.from({ length: quest.difficulty }).map((_, index) => (
									<CapsulesIcon key={index} src={swordIcon} alt='Sword Icon' />
								))}
								{Array.from({ length: 5 - quest.difficulty }).map((_, index) => (
									<CapsulesIcon key={index} src={'/knife.svg'} alt='Sword Icon' />
								))}
							</CapsulesSection>
							<CapsulesSection>
								<CapsulesText>{quest.type.label}</CapsulesText>
							</CapsulesSection>
						</IconText>
						<GoldValue>
							<img src={goldIcon} alt='Gold Icon' />
							<span> {quest.rewards.gold}</span>
						</GoldValue>
					</Row>
				</QuestDetails>
			</QuestCardContainer>
		</Link>
	);
};

export default QuestCard;
