import { Attack } from ".";

const WyvernFire = [
	{ raw: 54, fire: 15 },
	{ raw: 60, fire: 17 },
	{ raw: 65, fire: 19 },
	{ raw: 70, fire: 20 },
	{ raw: 74, fire: 21 },
];

export const GunlanceAttacks: Attack[] = [
	{ name: "Lunging Upthrust", mv: 30 },
	{ name: "Lateral Thrust I/II/III", mv: 24 },
	{ name: "Guard Thrust I/II/III", mv: 18 },
	{ name: "Rising Slash", mv: 30 },
	{ name: "Overhead Smash", mv: 48 },
	{ name: "Wide Sweep", mv: 68 },
	{ name: "Wyrmstake Cannon (1st Hit)", mv: 28 },
	{ name: "Blast Dash Overhead Smash", mv: 55 },
	{ name: "Jumping Thrust", mv: 25 },
	{ name: "Jumping Smash", mv: 44 },
	{ name: "Hail Cutter (1st Hit)", mv: 30, silkbind: true },
	{ name: "Hail Cutter (2nd Hit)", mv: 85, silkbind: true, eleMod: 2 },
	{ name: "Ground Splitter", mv: 68, silkbind: true },
	{
		name: "Shelling",
		mv: 0,
		noCrit: true,
		shelling: {
			Normal: [
				{ raw: 8, fire: 4 },
				{ raw: 12, fire: 5 },
				{ raw: 15, fire: 6 },
				{ raw: 18, fire: 7 },
				{ raw: 20, fire: 8 },
			],
			Wide: [
				{ raw: 18, fire: 6 },
				{ raw: 25, fire: 8 },
				{ raw: 31, fire: 9 },
				{ raw: 36, fire: 10 },
				{ raw: 40, fire: 11 },
			],
			Long: [
				{ raw: 12, fire: 9 },
				{ raw: 17, fire: 11 },
				{ raw: 22, fire: 13 },
				{ raw: 26, fire: 15 },
				{ raw: 29, fire: 16 },
			],
		},
	},
	{
		name: "Charged Shelling",
		mv: 0,
		noCrit: true,
		shelling: {
			Normal: [
				{ raw: 12, fire: 6 },
				{ raw: 18, fire: 8 },
				{ raw: 23, fire: 9 },
				{ raw: 27, fire: 11 },
				{ raw: 30, fire: 12 },
			],
			Wide: [
				{ raw: 25, fire: 8 },
				{ raw: 35, fire: 11 },
				{ raw: 43, fire: 12 },
				{ raw: 50, fire: 14 },
				{ raw: 56, fire: 15 },
			],
			Long: [
				{ raw: 18, fire: 14 },
				{ raw: 26, fire: 17 },
				{ raw: 33, fire: 20 },
				{ raw: 39, fire: 22 },
				{ raw: 44, fire: 24 },
			],
		},
	},
	{
		name: "Strong Charged Shelling",
		mv: 0,
		noCrit: true,
		shelling: {
			Normal: [
				{ raw: 12, fire: 6 },
				{ raw: 18, fire: 8 },
				{ raw: 23, fire: 9 },
				{ raw: 27, fire: 11 },
				{ raw: 30, fire: 12 },
			],
			Wide: [
				{ raw: 35, fire: 11 },
				{ raw: 49, fire: 15 },
				{ raw: 60, fire: 17 },
				{ raw: 70, fire: 19 },
				{ raw: 79, fire: 21 },
			],
			Long: [
				{ raw: 18, fire: 14 },
				{ raw: 26, fire: 17 },
				{ raw: 33, fire: 20 },
				{ raw: 39, fire: 22 },
				{ raw: 44, fire: 24 },
			],
		},
	},
	{
		name: "Wyvern's Fire",
		mv: 0,
		noCrit: true,
		shelling: {
			Normal: WyvernFire,
			Wide: WyvernFire,
			Long: WyvernFire,
		},
	},
];

export default GunlanceAttacks;
