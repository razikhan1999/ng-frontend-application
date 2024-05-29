/**
 * Represents a quest with various attributes.
 */
export interface Quest {
	/** The title of the quest */
	title: string

	/** The difficulty level of the quest (1-5) */
	difficulty: number

	/** A description of the quest */
	description: string

	/** A unique slug identifier for the quest */
	slug: string

	/** URL of the quest cover image (optional) */
	cover?: string

	/** The language details of the quest */
	language: Language

	/** The type details of the quest */
	type: Language

	/** The rewards associated with the quest */
	rewards: Rewards
}

/**
 * Represents the language or type details of a quest.
 */
export interface Language {
	/** The label for the language or type */
	label: string

	/** The unique identifier for the language or type */
	id: string
}

/**
 * Represents the rewards associated with a quest.
 */
export interface Rewards {
	/** The experience points awarded for completing the quest */
	expPoints: number

	/** The amount of gold awarded for completing the quest */
	gold: number
}

/**
 * Props interface for the QuestCard component.
 */
export interface IQuestCard {
	/** The quest object containing details about the quest */
	quest: Quest
}

/**
 * Props interface for the QuestDetail component.
 */
export interface IQuestDetail {
	/** The quest object containing details about the quest */
	quest: Quest
}
