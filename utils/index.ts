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
