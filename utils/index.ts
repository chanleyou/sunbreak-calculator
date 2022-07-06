import produce from "immer";
import { Sharpness, Sharpnesses, WeaponHandicraft, WeaponSharpness } from "../data";

export function sum(...args: (number | undefined)[]) {
	return args.reduce<number>((sum, a) => (a ? sum + a : sum), 0);
}

export function multiply(...args: (number | undefined)[]) {
	return args.reduce<number>((sum, a) => (a !== undefined ? sum * a : sum), 1);
}

export function lowest(...args: number[]) {
	return args.reduce((a, b) => (a > b ? b : a));
}

export function JSONclone<T>(obj: T): T {
	return JSON.parse(JSON.stringify(obj));
}

export const roundToDigits = (n: number, digits = 1) => {
	return Math.round(n * 10 ** digits) / 10 ** digits;
};

/**
 * @param base - base before multipliers
 * @param multipliers - multiplers on base damage
 * @param bonuses - flat bonuses that don't scale with multipliers
 * @returns what is reflected in in-game UI
 */
export function calculateUI(base: number, multipliers = 1, bonuses = 0): number {
	return Math.floor(base * multipliers + bonuses + 0.1);
}

export const getSharpnessFromArray = (w: WeaponSharpness) => {
	const index = w.reduce<number>((acc, n, i) => (n > 0 ? i : acc), 0);
	return Sharpnesses[index];
};

export const sharpnessHandicraft = (
	ws: WeaponSharpness,
	wh: WeaponHandicraft,
	handicraftPoints: number,
) => {
	return produce(ws, (draft) => {
		let baseIndex = draft.reduce<number>((acc, n, i) => (n > 0 ? i : acc), 0);
		let bonusIndex = 0;

		while (handicraftPoints > 0) {
			if (bonusIndex > 3) break;
			const limit = wh[bonusIndex];

			const bonus = handicraftPoints > limit ? limit : handicraftPoints;

			draft[baseIndex] += bonus;
			handicraftPoints -= bonus;

			if (bonus == limit) {
				baseIndex += 1;
				bonusIndex += 1;
			}
		}
	});
};
