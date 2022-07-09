import { Attack } from ".";

// normal and wide
const WyvernFire = [
	{ raw: 54, fire: 15 },
	{ raw: 60, fire: 17 },
	{ raw: 65, fire: 19 },
	{ raw: 84, fire: 24 },
	{ raw: 118, fire: 31 },
	{ raw: 160, fire: 46 },
	{ raw: 170, fire: 50 },
	{ raw: 180, fire: 54 },
];

// normal and long
const EruptingCannon = [
	{ raw: 60, fire: 15 },
	{ raw: 68, fire: 17 },
	{ raw: 76, fire: 19 },
	{ raw: 83, fire: 20 },
	{ raw: 90, fire: 21 },
	{ raw: 97, fire: 22 },
	{ raw: 104, fire: 23 },
	{ raw: 111, fire: 24 },
];

export const GunlanceAttacks: Attack[] = [
	{ name: "Lunging Upthrust", mv: 30 },
	{ name: "Lateral Thrust I/II/III", mv: 24 },
	{ name: "Guard Thrust I/II/III", mv: 18 },
	{ name: "Rising Slash", mv: 30 },
	{ name: "Overhead Smash", mv: 48 },
	{ name: "Wide Sweep", mv: 68 },
	{ name: "Blast Dash Overhead Smash", mv: 55 },
	{ name: "Jumping Thrust", mv: 25 },
	{ name: "Jumping Smash", mv: 44 },
	{ name: "Hail Cutter (1st Hit)", mv: 30, silkbind: true },
	{ name: "Hail Cutter (2nd Hit)", mv: 85, silkbind: true, eleMod: 2 },
	{ name: "Ground Splitter", mv: 68, silkbind: true },
	{
		name: "Shelling",
		mv: 0,
		ignoreHz: true,
		noCrit: true,
		artillery: true,
		shelling: {
			Normal: [
				{ raw: 8, fire: 4 },
				{ raw: 12, fire: 5 },
				{ raw: 15, fire: 6 },
				{ raw: 23, fire: 7 },
				{ raw: 26, fire: 8 },
				{ raw: 30, fire: 10 },
				{ raw: 36, fire: 11 },
				{ raw: 44, fire: 12 },
			],
			Wide: [
				{ raw: 18, fire: 6 },
				{ raw: 25, fire: 8 },
				{ raw: 31, fire: 9 },
				{ raw: 39, fire: 10 },
				{ raw: 48, fire: 11 },
				{ raw: 54, fire: 12 },
				{ raw: 60, fire: 13 },
				{ raw: 66, fire: 14 },
			],
			Long: [
				{ raw: 12, fire: 9 },
				{ raw: 17, fire: 11 },
				{ raw: 22, fire: 13 },
				{ raw: 30, fire: 15 },
				{ raw: 34, fire: 16 },
				{ raw: 42, fire: 18 },
				{ raw: 48, fire: 20 },
				{ raw: 54, fire: 22 },
			],
		},
	},
	{
		name: "Shelling (Burst Fire)",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: [
				{ raw: 9, fire: 5 },
				{ raw: 12, fire: 7 },
				{ raw: 16, fire: 8 },
				{ raw: 24, fire: 9 },
				{ raw: 27, fire: 10 },
				{ raw: 31, fire: 12 },
				{ raw: 37, fire: 13 },
				{ raw: 45, fire: 14 },
			],
			Wide: [
				{ raw: 17, fire: 6 },
				{ raw: 23, fire: 7 },
				{ raw: 28, fire: 8 },
				{ raw: 36, fire: 9 },
				{ raw: 44, fire: 10 },
				{ raw: 50, fire: 11 },
				{ raw: 56, fire: 12 },
				{ raw: 62, fire: 13 },
			],
			Long: [
				{ raw: 12, fire: 9 },
				{ raw: 17, fire: 11 },
				{ raw: 22, fire: 13 },
				{ raw: 30, fire: 15 },
				{ raw: 34, fire: 16 },
				{ raw: 42, fire: 18 },
				{ raw: 48, fire: 20 },
				{ raw: 54, fire: 22 },
			],
		},
	},
	{
		name: "Charged Shelling",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: [
				{ raw: 12, fire: 6 },
				{ raw: 18, fire: 8 },
				{ raw: 23, fire: 9 },
				{ raw: 31, fire: 11 },
				{ raw: 41, fire: 12 },
				{ raw: 48, fire: 15 },
				{ raw: 57, fire: 17 },
				{ raw: 66, fire: 18 },
			],
			Wide: [
				{ raw: 25, fire: 8 },
				{ raw: 35, fire: 11 },
				{ raw: 43, fire: 12 },
				{ raw: 50, fire: 14 },
				{ raw: 62, fire: 15 },
				{ raw: 78, fire: 17 },
				{ raw: 87, fire: 18 },
				{ raw: 95, fire: 20 },
			],
			Long: [
				{ raw: 18, fire: 14 },
				{ raw: 26, fire: 17 },
				{ raw: 33, fire: 20 },
				{ raw: 39, fire: 22 },
				{ raw: 44, fire: 24 },
				{ raw: 63, fire: 27 },
				{ raw: 72, fire: 30 },
				{ raw: 81, fire: 33 },
			],
		},
	},
	{
		name: "Charged Shelling Lv2",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: [
				{ raw: 12, fire: 6 },
				{ raw: 18, fire: 8 },
				{ raw: 23, fire: 9 },
				{ raw: 31, fire: 11 },
				{ raw: 41, fire: 12 },
				{ raw: 48, fire: 15 },
				{ raw: 57, fire: 17 },
				{ raw: 66, fire: 18 },
			],
			Wide: [
				{ raw: 35, fire: 11 },
				{ raw: 49, fire: 15 },
				{ raw: 60, fire: 17 },
				{ raw: 72, fire: 19 },
				{ raw: 86, fire: 21 },
				{ raw: 106, fire: 23 },
				{ raw: 118, fire: 25 },
				{ raw: 129, fire: 27 },
			],
			Long: [
				{ raw: 18, fire: 14 },
				{ raw: 26, fire: 17 },
				{ raw: 33, fire: 20 },
				{ raw: 39, fire: 22 },
				{ raw: 44, fire: 24 },
				{ raw: 63, fire: 27 },
				{ raw: 72, fire: 30 },
				{ raw: 81, fire: 33 },
			],
		},
	},
	{ name: "Wyrmstake Cannon (1st Hit)", mv: 28 },
	{
		name: "Wyrmstake (Tick)",
		mv: 0,
		noCrit: true,
		shelling: {
			Normal: [
				{ raw: 8, fire: 0 },
				{ raw: 11, fire: 0 },
				{ raw: 14, fire: 0 },
				{ raw: 16, fire: 0 },
				{ raw: 18, fire: 0 },
				{ raw: 20, fire: 0 },
				{ raw: 22, fire: 0 },
				{ raw: 24, fire: 0 },
			],
			Wide: [
				{ raw: 70, fire: 0 },
				{ raw: 78, fire: 0 },
				{ raw: 86, fire: 0 },
				{ raw: 94, fire: 0 },
				{ raw: 100, fire: 0 },
				{ raw: 105, fire: 0 },
				{ raw: 110, fire: 0 },
				{ raw: 115, fire: 0 },
			],
			Long: [
				{ raw: 8, fire: 0 },
				{ raw: 11, fire: 0 },
				{ raw: 14, fire: 0 },
				{ raw: 16, fire: 0 },
				{ raw: 18, fire: 0 },
				{ raw: 20, fire: 0 },
				{ raw: 22, fire: 0 },
				{ raw: 24, fire: 0 },
			],
		},
	},
	{
		name: "Wyrmstake (Explosion)",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: [
				{ raw: 60, fire: 15 },
				{ raw: 68, fire: 17 },
				{ raw: 76, fire: 19 },
				{ raw: 83, fire: 20 },
				{ raw: 90, fire: 21 },
				{ raw: 100, fire: 24 },
				{ raw: 110, fire: 26 },
				{ raw: 120, fire: 28 },
			],
			Wide: [
				{ raw: 80, fire: 10 },
				{ raw: 90, fire: 12 },
				{ raw: 100, fire: 14 },
				{ raw: 110, fire: 16 },
				{ raw: 120, fire: 18 },
				{ raw: 130, fire: 22 },
				{ raw: 140, fire: 24 },
				{ raw: 150, fire: 26 },
			],
			Long: [
				{ raw: 60, fire: 15 },
				{ raw: 68, fire: 17 },
				{ raw: 76, fire: 19 },
				{ raw: 83, fire: 20 },
				{ raw: 90, fire: 21 },
				{ raw: 100, fire: 24 },
				{ raw: 110, fire: 26 },
				{ raw: 120, fire: 28 },
			],
		},
	},
	{ name: "Erupting Cannon (Hit)", mv: 28 },
	{
		name: "Erupting Cannon (Explosion)",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: EruptingCannon,
			Long: EruptingCannon,
			Wide: [
				{ raw: 80, fire: 10 },
				{ raw: 90, fire: 12 },
				{ raw: 100, fire: 14 },
				{ raw: 110, fire: 16 },
				{ raw: 120, fire: 18 },
				{ raw: 130, fire: 20 },
				{ raw: 140, fire: 22 },
				{ raw: 150, fire: 24 },
			],
		},
	},
	{
		name: "Wyvern's Fire",
		mv: 0,
		noCrit: true,
		ignoreHz: true,
		artillery: true,
		shelling: {
			Normal: WyvernFire,
			Wide: WyvernFire,
			Long: [
				{ raw: 54, fire: 15 },
				{ raw: 60, fire: 17 },
				{ raw: 65, fire: 19 },
				{ raw: 77, fire: 30 },
				{ raw: 103, fire: 34 },
				{ raw: 144, fire: 41 },
				{ raw: 153, fire: 45 },
				{ raw: 162, fire: 49 },
			],
		},
	},
	{ name: "Hail Cutter (1st Hit)", mv: 30, silkbind: true },
	{ name: "Hail Cutter (2st Hit)", mv: 85, eleMod: 2, silkbind: true },
	{ name: "Ground Splitter", mv: 68, silkbind: true },
];

export default GunlanceAttacks;
