import { atom } from 'jotai'

/**
 * Global state for airdrops.
 * This atom represents the state of rewards such as experience points (xp) and gold.
 * It initializes with default values of xp: 100 and gold: 200.
 */
export const rewardAtom = atom({
	xp: 100,
	gold: 200
})
