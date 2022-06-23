import { GunlanceShellType } from "../weapons";

export type AmmoType = "Normal/Rapid" | "Pierce" | "Spread";

export type ShellingAttack = { raw: number; fire: number };

export type Attack = {
	name: string;
	mv: number;
	hzMod?: number;
	eleMod?: number;
	statusMod?: number;
	ignoreHz?: boolean;
	morph?: boolean;
	noCrit?: boolean;
	ammoType?: AmmoType;
	sword?: boolean;
	silkbind?: boolean;
	artillery?: boolean;
	shelling?: { [K in GunlanceShellType]: ShellingAttack[] };
};

export { default as SwitchAxeAttacks } from "./switchAxe";
export { default as GreatSwordAttacks } from "./greatSword";
export { default as GunlanceAttacks } from "./gunlance";
export { HeavyBowgunAttacks, LightBowgunAttacks } from "./bowgun";
