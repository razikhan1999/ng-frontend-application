export interface Quest {
	title: string;
	difficulty: number;
	description: string;
	slug: string;
	cover?: string;
	language: Language;
	type: Language;
	rewards: Rewards;
}

export interface Language {
	label: string;
	id: string;
}

export interface Rewards {
	expPoints: number;
	gold: number;
}
