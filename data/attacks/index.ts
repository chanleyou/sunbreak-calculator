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

export { default as SwordAndShieldAttacks } from "./swordAndShield";
export { default as DualBladeAttacks } from "./dualBlades";
export { default as GreatSwordAttacks } from "./greatSword";
export { default as LongSwordAttacks } from "./longSword";
export { default as HammerAttacks } from "./hammer";
export { default as HuntingHornAttacks } from "./huntingHorn";
export { default as LanceAttacks } from "./lance";
export { default as GunlanceAttacks } from "./gunlance";
export { default as SwitchAxeAttacks } from "./switchAxe";
export { default as ChargeBladeAttacks } from "./chargeBlade";
export { default as InsectGlaiveAttacks } from "./insectGlaive";
export { HeavyBowgunAttacks, LightBowgunAttacks } from "./bowgun";
