import { Attack } from ".";

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
