import { RampageSkillSlot } from "./rampage";

type Element = "Fire" | "Water" | "Thunder" | "Ice" | "Dragon";

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

// TODO: confirm Sunbreak values
export const SharpnessRawMultipliers: { [K in Sharpness]: number } = {
	Purple: 1.39,
	White: 1.32,
	Blue: 1.2,
	Green: 1.5,
	Yellow: 1,
	Orange: 0.75,
	Red: 0.5,
} as const;

// TODO: confirm Sunbreak values
export const SharpnessElementalMultipliers: { [K in Sharpness]: number } = {
	Purple: 1.19,
	White: 1.15,
	Blue: 1.0625,
	Green: 1,
	Yellow: 0.75,
	Orange: 0.5,
	Red: 0.25,
} as const;

export interface IWeapon {
	name: string;
	type: WeaponType;
	raw: number;
	affinity: number;
	decorations: number[];
	rampageSkills: RampageSkillSlot[][];
}

export type ICanHaveElement = { element: number; elementType?: Element; status?: number };

export type IMeleeWeapon = IWeapon & ICanHaveElement & { sharpness: Sharpness };

export type GreatSword = IMeleeWeapon & { type: "Great Sword" };

export type SwordAndShield = IMeleeWeapon & { type: "Sword and Shield" };

export type DualBlades = IMeleeWeapon & { type: "Dual Blades" };

export type LongSword = IMeleeWeapon & { type: "Long Sword" };

export type Hammer = IMeleeWeapon & { type: "Hammer" };

export type HuntingHorn = IMeleeWeapon & { type: "Hunting Horn"; songs: any[] };

export type Lance = IMeleeWeapon & { type: "Lance" };

export type GunlanceShellType = "Normal" | "Wide" | "Long";

export type Gunlance = IMeleeWeapon & {
	type: "Gunlance";
	shell: {
		type: GunlanceShellType;
		level: number;
	};
};

export type SwitchAxePhialType =
	| "Power"
	| "Element"
	| "Poison"
	| "Exhaust"
	| "Paralysis"
	| "Dragon";

export type SwitchAxe = IMeleeWeapon & { type: "Switch Axe"; phial: SwitchAxePhialType };

export type ChargeBladePhialType = "Impact" | "Element";

export type ChargeBlade = IMeleeWeapon & { type: "Charge Blade"; phial: ChargeBladePhialType };

export type InsectGlaive = IMeleeWeapon & { type: "Insect Glaive"; kinsectLevel: number };

export type Bow = IWeapon & ICanHaveElement & { type: "Bow" };

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
	| Bow;

export const Weapons: Weapon[] = [
	{
		name: "Axe of Wisdom",
		type: "Switch Axe",
		raw: 200,
		element: 25,
		elementType: "Dragon",
		affinity: 0,
		decorations: [3],
		sharpness: "Blue",
		phial: "Dragon",
		rampageSkills: [
			[
				["AttackBoost", 2],
				["BoostEquippedCoating", 1],
				["SilkbindBoost", 1],
			],
		],
	},
	{
		name: "Daora's Janah",
		type: "Switch Axe",
		raw: 190,
		element: 41,
		elementType: "Ice",
		affinity: 0,
		decorations: [1],
		sharpness: "White",
		phial: "Power",
		rampageSkills: [
			[
				["AttackBoost", 3],
				["AffinityBoost", 2],
				["KushalaDaoraSoul", 1],
			],
		],
	},
	{
		name: "Night's Crescent",
		type: "Switch Axe",
		raw: 180,
		element: 0,
		affinity: 40,
		decorations: [2],
		sharpness: "White",
		phial: "Poison",
		rampageSkills: [
			[
				["AttackBoost", 3],
				["AffinityBoost", 1],
				["BoostEquippedCoating", 1],
			],
		],
	},
	{
		name: "Abominable Great Sword",
		type: "Great Sword",
		raw: 230,
		element: 20,
		elementType: "Ice",
		affinity: -15,
		decorations: [2],
		sharpness: "Blue",
		rampageSkills: [
			[
				["AffinityBoost", 1],
				["ElementalBoost", 3],
			],
		],
	},
];
