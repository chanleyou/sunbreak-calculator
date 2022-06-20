export type Attack = {
	name: string;
	mv: number;
	hz?: number;
	element?: number;
	status?: number;
	ignoreHz?: boolean;
	morph?: boolean;
	noCrit?: boolean;
	ammoType?: AmmoType;
	sword?: boolean;
	silkbind?: boolean;
};

export type AmmoType = "Normal/Rapid" | "Pierce" | "Spread";

export const GreatSwordAttacks: Attack[] = [
	{ name: "Overhead Slash", mv: 48 },
	{ name: "Charged Slash Lv1", mv: 48, element: 1.1, status: 1.1, hz: 1.1 },
	{ name: "Charged Slash Lv2", mv: 77, element: 1.2, status: 1.2, hz: 1.2 },
	{ name: "Charged Slash Lv3", mv: 105, element: 1.5, status: 1.5, hz: 1.3 },
	{ name: "Strong Charged Slash Lv0", mv: 65 },
	{ name: "Strong Charged Slash Lv1", mv: 65, element: 1.65, status: 1.65, hz: 1.1 },
	{ name: "Strong Charged Slash Lv2", mv: 90, element: 1.8, status: 1.8, hz: 1.2 },
	{ name: "Strong Charged Slash Lv3", mv: 115, element: 2.25, status: 2.25, hz: 1.3 },
	{ name: "True Charged Slash Lv0 (1st Hit)", mv: 15 },
	{ name: "True Charged Slash Lv1 (1st Hit)", mv: 15 },
	{ name: "True Charged Slash Lv2 (1st Hit)", mv: 20 },
	{ name: "True Charged Slash Lv3 (1st Hit)", mv: 22 },
	{ name: "True Charged Slash Lv0 (2nd Hit)", mv: 120 },
	{ name: "True Charged Slash Lv1 (2nd Hit)", mv: 120, element: 1.4, status: 1.4, hz: 1.1 },
	{ name: "True Charged Slash Lv2 (2nd Hit)", mv: 182, element: 1.5, status: 1.5, hz: 1.2 },
	{ name: "True Charged Slash Lv3 (2nd Hit)", mv: 211, element: 1.7, status: 1.7, hz: 1.3 },
	{ name: "(Power) True Charged Slash Lv0 (2nd Hit)", mv: 144 },
	{ name: "(Power) True Charged Slash Lv1 (2nd Hit)", mv: 144, element: 1.4, status: 1.4, hz: 1.1 },
	{ name: "(Power) True Charged Slash Lv2 (2nd Hit)", mv: 210, element: 1.5, status: 1.5, hz: 1.2 },
	{ name: "(Power) True Charged Slash Lv3 (2nd Hit)", mv: 264, element: 1.8, status: 1.8, hz: 1.3 },
	{ name: "Rage Slash Lv0", mv: 118 },
	{ name: "Rage Slash Lv1", mv: 118, element: 1.5, status: 1.5, hz: 1.1 },
	{ name: "Rage Slash Lv2", mv: 133, element: 2, status: 2, hz: 1.2 },
	{ name: "Rage Slash Lv3", mv: 159, element: 3, status: 3, hz: 1.3 },
	// { name: "Rage Slash Lv0 (25 Damage Taken)", mv: 177 },
	// { name: "Rage Slash Lv1 (25 Damage Taken)", mv: 177, element: 1.5, status: 1.5, hz: 1.1 },
	// { name: "Rage Slash Lv2 (25 Damage Taken)", mv: 199.5, element: 2, status: 2, hz: 1.2 },
	// { name: "Rage Slash Lv3 (25 Damage Taken)", mv: 238.5, element: 3, status: 3, hz: 1.3 },
	{ name: "Tackle Lv0", mv: 26, element: 0, status: 0 },
	{ name: "Tackle Lv1", mv: 28, element: 0, status: 0 },
	{ name: "Tackle Lv2", mv: 35, element: 0, status: 0 },
	{ name: "Tackle Lv3", mv: 48, element: 0, status: 0 },
	{ name: "Guard Tackle Lv0", mv: 34 },
	{ name: "Guard Tackle Lv1", mv: 37 },
	{ name: "Guard Tackle Lv2", mv: 46 },
	{ name: "Guard Tackle Lv3", mv: 62 },
	{ name: "Rising Slash", mv: 38 },
	{ name: "Wide Sweep", mv: 26 },
	{ name: "Strong Wide Slash Lv0", mv: 59 },
	{ name: "Strong Wide Slash Lv1", mv: 59, element: 1.65, status: 1.65, hz: 1.1 },
	{ name: "Strong Wide Slash Lv2", mv: 66, element: 1.8, status: 1.8, hz: 1.2 },
	{ name: "Strong Wide Slash Lv3", mv: 72, element: 2.25, status: 2.25, hz: 1.3 },
	{ name: "Leaping Wide Slash Lv0", mv: 70, element: 1.65, status: 1.65 },
	{ name: "Leaping Wide Slash Lv1", mv: 70, element: 1.82, status: 1.82, hz: 1.1 },
	{ name: "Leaping Wide Slash Lv2", mv: 45, element: 1.65, status: 1.65, hz: 1.1 },
	{ name: "Leaping Wide Slash Lv3", mv: 40, element: 1.32, status: 1.32, hz: 1.1 },
	{ name: "Mid-Air Slash", mv: 70 },
	{ name: "Mid-Air Charged Slash Lv0", mv: 70 },
	{ name: "Mid-Air Charged Slash Lv1", mv: 70, element: 1.1, status: 1.1 },
	{ name: "Mid-Air Charged Slash Lv2", mv: 92, element: 1.2, status: 1.2 },
	{ name: "Mid-Air Charged Slash Lv3", mv: 106, element: 1.5, status: 1.5 },
	{ name: "Plunging Thrust", mv: 15 },
	{ name: "Plunging Thrust Finisher", mv: 30 },
];

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
	{ name: "Sword: Double Slash (1st Hit) / Triple Slash (2nd Hit)", mv: 28, sword: true },
	{ name: "Sword: Double Slash (2nd Hit) / Triple Slash (3rd Hit)", mv: 36, sword: true },
	{ name: "Sword: Heavenward Flurry (1st Hit)", mv: 30, sword: true },
	{ name: "Sword: Heavenward Flurry (2nd Hit)", mv: 38, sword: true },
	{ name: "Sword -> Axe: Morph Side Slash", mv: 23, morph: true },
	{ name: "Sword -> Axe: Morph Double Slash (1st Hit)", mv: 30, morph: true },
	{ name: "Sword -> Axe: Morph Side Slash (2nd Hit)", mv: 60, morph: true },
	{ name: "Sword -> Axe: Downward Fade Slash", mv: 40, morph: true },
	{ name: "[Amped] Phial Burst", mv: 10, noCrit: true, status: 0.7, sword: true },
	{ name: "Jumping Element Discharge (Thrust)", mv: 40 },
	{ name: "Element Discharge (Thrust)", mv: 14, element: 0.7, status: 0.5 },
	{ name: "Element Discharge (Early Hits)", mv: 10, element: 0.7, status: 0.5 },
	{ name: "Element Discharge (Ending Hits)", mv: 13, element: 0.7, status: 0.7 },
	{
		name: "Element Discharge (Finisher)",
		mv: 100,
		element: 1.5,
		status: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
	{ name: "Element Discharge (Early Finisher)", mv: 50, noCrit: true, ignoreHz: true },
	{ name: "Compressed Element Discharge (Slash)", mv: 80, element: 2, status: 2 },
	{
		name: "Compressed Element Discharge (Explosion)",
		mv: 52,
		element: 1.5,
		status: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
	{ name: "Zero Sum Discharge (Thrust)", mv: 18, status: 0.7 },
	{ name: "Zero Sum Discharge (Ticks)", mv: 14, element: 0.7, status: 0.5 },
	{
		name: "Zero Sum Discharge (Finisher)",
		mv: 90,
		element: 2,
		status: 1.5,
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
	{
		name: "Soaring Wyvern Blade (Explosion)",
		mv: 70,
		element: 2,
		status: 1.5,
		noCrit: true,
		ignoreHz: true,
	},
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
	{ name: "Hail Cutter (2nd Hit)", mv: 85, silkbind: true, element: 2 },
	{ name: "Ground Splitter", mv: 68, silkbind: true },
];

export const BowgunAmmoAttacks: Attack[] = [
	{ name: "Normal Lv1", mv: 10, ammoType: "Normal/Rapid" },
	{ name: "Normal Lv2", mv: 20, ammoType: "Normal/Rapid" },
	{ name: "Normal Lv3", mv: 34, ammoType: "Normal/Rapid" },
	{ name: "Pierce Lv1", mv: 7, ammoType: "Pierce" },
	{ name: "Pierce Lv2", mv: 7, ammoType: "Pierce" },
	{ name: "Pierce Lv3", mv: 8, ammoType: "Pierce" },
	{ name: "Spread Lv1", mv: 6, ammoType: "Spread" },
	{ name: "Spread Lv2", mv: 7, ammoType: "Spread" },
	{ name: "Spread Lv3", mv: 10, ammoType: "Spread" },
];

export const HeavyBowgunAttacks: Attack[] = [{ name: "Melee", mv: 30 }, ...BowgunAmmoAttacks];

export const LightBowgunAttacks: Attack[] = [{ name: "Melee", mv: 25 }, ...BowgunAmmoAttacks];
