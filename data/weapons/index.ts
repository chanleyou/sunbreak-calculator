import { RampageSkillKey } from "../rampage";
import chargeBlades from "./chargeBlades";
import dualBlades from "./dualBlades";
import greatSwords from "./greatSwords";
import gunlances from "./gunlances";
import hammers from "./hammers";
import huntingHorns from "./huntingHorns";
import lances from "./lances";
import longSwords from "./longSwords";
import switchAxes from "./switchAxes";
import swordAndShields from "./swordAndShields";
import insectGlaives from "./insectGlaives";

export type ElementType = "Fire" | "Water" | "Thunder" | "Ice" | "Dragon";
export type StatusType = "Blast" | "Paralysis" | "Poison" | "Sleep";

export const WeaponTypes = [
	"Sword and Shield",
	"Dual Blades",
	"Great Sword",
	"Long Sword",
	"Hammer",
	"Hunting Horn",
	"Lance",
	"Gunlance",
	"Switch Axe",
	"Charge Blade",
	"Insect Glaive",
	"Light Bowgun",
	"Heavy Bowgun",
	"Bow",
] as const;
export type WeaponType = typeof WeaponTypes[number];

export const Sharpnesses = ["Red", "Orange", "Yellow", "Green", "Blue", "White", "Purple"] as const;
export type Sharpness = typeof Sharpnesses[number];

export type WeaponSharpness = [number, number, number, number, number, number, number];
export type WeaponHandicraft = [number, number, number, number];

// TODO: confirm Sunbreak values
export const SharpnessRawMultipliers: { [K in Sharpness]: number } = {
	Red: 0.5,
	Orange: 0.75,
	Yellow: 1,
	Green: 1.05,
	Blue: 1.2,
	White: 1.32,
	Purple: 1.39,
} as const;

// TODO: confirm Sunbreak values
export const SharpnessEleMultipliers: { [K in Sharpness]: number } = {
	Red: 0.25,
	Orange: 0.5,
	Yellow: 0.75,
	Green: 1,
	Blue: 1.0625,
	White: 1.15,
	Purple: 1.25,
} as const;

export interface IWeapon {
	name: string;
	rarity: number;
	type: WeaponType;
	raw: number;
	defense?: number;
	sharpness?: WeaponSharpness;
	handicraft?: WeaponHandicraft;
	affinity?: number;
	decos: number[];
	element?: WeaponElement;
	status?: WeaponStatus;
	rampageSkills: RampageSkillKey[][];
	rampageSlots: number[];
	songs?: HuntingHornSongs;
	properties?: SwitchAxePhial | ChargeBladePhial | GunlanceShelling | KinsectLevel;
}

export type WeaponElement = {
	type: ElementType;
	value: number;
};

export type WeaponStatus = {
	type: StatusType;
	value: number;
};

export type IMeleeWeapon = IWeapon & { sharpness: WeaponSharpness; handicraft: WeaponHandicraft };

export type GreatSword = IMeleeWeapon & { type: "Great Sword" };

export type SwordAndShield = IMeleeWeapon & { type: "Sword and Shield" };

export type DualBlades = IMeleeWeapon & { type: "Dual Blades" };

export type LongSword = IMeleeWeapon & { type: "Long Sword" };

export const LongSwordSpiritGauge = {
	White: 1.04,
	Yellow: 1.08,
	Red: 1.12,
};

export type Hammer = IMeleeWeapon & { type: "Hammer" };

export type HuntingHorn = IMeleeWeapon & { type: "Hunting Horn"; songs: HuntingHornSongs };

export type HuntingHornSongs = [string, string, string];

export type Lance = IMeleeWeapon & { type: "Lance" };

export type GunlanceShellType = "Normal" | "Wide" | "Long";

export type GunlanceShelling = {
	type: GunlanceShellType;
	value: number;
};

export type Gunlance = IMeleeWeapon & { type: "Gunlance"; properties: GunlanceShelling };

export type SwitchAxePhial = {
	type: "Power" | "Element" | "Poison" | "Exhaust" | "Paralysis" | "Dragon";
	value: number;
};

export type SwitchAxe = IMeleeWeapon & { type: "Switch Axe"; properties: SwitchAxePhial };

export type ChargeBladePhial = "Impact" | "Element";

export type ChargeBlade = IMeleeWeapon & { type: "Charge Blade"; properties: ChargeBladePhial };

export type KinsectLevel = number;

export type InsectGlaive = IMeleeWeapon & { type: "Insect Glaive"; properties: KinsectLevel };

export type Bow = IWeapon & { type: "Bow"; sharpness: undefined; handicraft: undefined };

export type IBowgun = {
	sharpness: undefined;
	handicraft: undefined;
	element: undefined;
	status: undefined;
};

export type LightBowgun = IWeapon & IBowgun & { type: "Light Bowgun" };

export type HeavyBowgun = IWeapon & IBowgun & { type: "Heavy Bowgun" };

export type Weapon =
	| GreatSword
	| SwordAndShield
	| DualBlades
	| LongSword
	| Hammer
	| HuntingHorn
	| Lance
	| Gunlance
	| SwitchAxe
	| ChargeBlade
	| InsectGlaive
	| Bow
	| LightBowgun
	| HeavyBowgun;

export const Weapons: Weapon[] = [
	...swordAndShields,
	...dualBlades,
	...greatSwords,
	...longSwords,
	...hammers,
	...huntingHorns,
	...lances,
	...gunlances,
	...switchAxes,
	...chargeBlades,
	...insectGlaives,
];
