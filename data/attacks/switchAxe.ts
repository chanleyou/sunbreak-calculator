import { Attack } from ".";

export const SwitchAxeAttacks: Attack[] = [
	{ name: "Axe: Overhead Slash", mv: 50 },
	{ name: "Axe: Forward Overhead Slash", mv: 56 },
	{ name: "Axe: Side Slash", mv: 23 },
	{ name: "Axe: Wild Swing", mv: 22 },
	{ name: "Axe: Forward Slash", mv: 19 },
	{ name: "Axe: Wide Sweep (1st Hit)", mv: 25 },
	{ name: "Axe: Wide Sweep (2nd Hit)", mv: 30 },
	{ name: "Axe: Wide Sweep (3rd Hit)", mv: 40 },
	{ name: "Axe: Heavy Slam (1st Hit)", mv: 15 },
	{ name: "Axe: Heavy Slam (2nd Hit)", mv: 55 },
	{ name: "Axe -> Sword: Morph Overhead Slash", mv: 32, morph: true, sword: true },
	{ name: "Axe -> Sword: Morph Rising Double Slash (1st Hit)", mv: 25, morph: true, sword: true },
	{ name: "Axe -> Sword: Morph Rising Double Slash (2nd Hit)", mv: 30, morph: true, sword: true },
	{ name: "Sword: Overhead Slash", mv: 32, sword: true },
	{ name: "Sword: Right/Left Rising Slash", mv: 25, sword: true },
	{ name: "Sword: Triple Slash (1st Hit)", mv: 20, sword: true },
	{ name: "Sword: Triple Slash (2nd Hit) / Double Slash (1st Hit)", mv: 28, sword: true },
	{ name: "Sword: Triple Slash (3rd Hit) / Double Slash (2nd Hit)", mv: 36, sword: true },
	{ name: "Sword: Heavenward Flurry (1st Hit)", mv: 30, sword: true },
	{ name: "Sword: Heavenward Flurry (2nd Hit)", mv: 38, sword: true },
	{ name: "Sword -> Axe: Morph Side Slash", mv: 23, morph: true },
	{ name: "Sword -> Axe: Morph Double Slash (1st Hit)", mv: 30, morph: true },
	{ name: "Sword -> Axe: Morph Side Slash (2nd Hit)", mv: 60, morph: true },
	{ name: "Sword -> Axe: Downward Fade Slash", mv: 40, morph: true },
	{ name: "[Amped] Phial Burst", mv: 10, noCrit: true, statusMod: 0.7, sword: true },
	{ name: "Jumping Element Discharge (Thrust)", mv: 40 },
	{ name: "Element Discharge (Thrust)", mv: 14, eleMod: 0.7, statusMod: 0.5 },
	{ name: "Element Discharge (Early Hits)", mv: 10, eleMod: 0.7, statusMod: 0.5 },
	{ name: "Element Discharge (Ending Hits)", mv: 13, eleMod: 0.7, statusMod: 0.7 },
	{
		name: "Element Discharge (Finisher)",
		mv: 100,
		eleMod: 1.5,
		statusMod: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
	{ name: "Element Discharge (Early Finisher)", mv: 50, noCrit: true, ignoreHz: true },
	{ name: "Compressed Element Discharge (Slash)", mv: 80, eleMod: 2, statusMod: 2 },
	{
		name: "Compressed Element Discharge (Explosion)",
		mv: 52,
		eleMod: 1.5,
		statusMod: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
	{ name: "Zero Sum Discharge (Thrust)", mv: 18, statusMod: 0.7 },
	{ name: "Zero Sum Discharge (Ticks)", mv: 14, eleMod: 0.7, statusMod: 0.5 },
	{
		name: "Zero Sum Discharge (Finisher)",
		mv: 90,
		eleMod: 2,
		statusMod: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
	{ name: "Zero Sum Discharge (Early Finisher)", mv: 40, noCrit: true, ignoreHz: true },
	{ name: "Axe: Jumping Slash", mv: 40 },
	{ name: "Sword: Jumping Slash", mv: 32 },
	{ name: "Invincible Gambit (1st Hit)", mv: 40, silkbind: true },
	{ name: "Invincible Gambit (2nd Hit)", mv: 32, silkbind: true },
	{ name: "Invincible Gambit (3rd Hit)", mv: 60, silkbind: true },
	{ name: "Axe: Side Slash (after Invincible Gambit)", mv: 50 },
	{ name: "Soaring Wyvern Blade", mv: 30, silkbind: true },
	{ name: "Soaring Wyvern Blade (Advancing Slash)", mv: 33, silkbind: true },
	{
		name: "Soaring Wyvern Blade (Explosion)",
		mv: 70,
		eleMod: 2,
		statusMod: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
];

export default SwitchAxeAttacks;
