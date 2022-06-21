import { Attack } from ".";

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
	{ name: "Hail Cutter (2nd Hit)", mv: 85, silkbind: true, element: 2 },
	{ name: "Ground Splitter", mv: 68, silkbind: true },
];

export default GunlanceAttacks;
