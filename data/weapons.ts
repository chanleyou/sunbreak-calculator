import { RampageSkillKey } from "./rampage";

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
	type: WeaponType;
	sharpness?: WeaponSharpness;
	handicraft?: WeaponHandicraft;
	raw: number;
	affinity?: number;
	decos: number[];
	element?: WeaponElement;
	status?: WeaponStatus;
	rampageSkills: RampageSkillKey[][];
	properties?: SwitchAxePhial | ChargeBladePhial | GunlanceShelling;
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
	White: 1.05,
	Yellow: 1.1,
	Red: 1.2,
};

export type Hammer = IMeleeWeapon & { type: "Hammer" };

export type HuntingHorn = IMeleeWeapon & { type: "Hunting Horn"; properties: string[] };

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

export type InsectGlaive = IMeleeWeapon & { type: "Insect Glaive"; kinsectLevel: number };

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
	{
		name: "Amber Hoarfrost",
		type: "Switch Axe",
		raw: 190,
		affinity: 30,
		element: { type: "Ice", value: 29 },
		sharpness: [50, 70, 80, 100, 50, 0, 0],
		handicraft: [20, 30, 0, 0],
		decos: [2],
		rampageSkills: [["AttackBoost4", "AffinityBoost2", "IceblightExploit"]],
		properties: { type: "Element", value: 0 },
	},
	{
		name: "Some Gunlance",
		type: "Gunlance",
		raw: 0,
		sharpness: [0, 0, 0, 0, 0, 0, 0],
		handicraft: [0, 0, 0, 0],
		decos: [],
		rampageSkills: [],
		properties: {
			type: "Long",
			value: 5,
		},
	},
	{
		name: "Rampage Slicer S",
		type: "Switch Axe",
		raw: 210,
		sharpness: [50, 70, 30, 60, 40, 0, 0],
		handicraft: [30, 20, 0, 0],
		decos: [],
		rampageSkills: [[], ["NonelementalBoost"]],
		properties: {
			type: "Paralysis",
			value: 0,
		},
	},
	{
		name: "Nargacuga LS",
		type: "Long Sword",
		raw: 280,
		affinity: 40,
		sharpness: [60, 40, 100, 90, 50, 30, 30],
		handicraft: [0, 0, 0, 0],
		decos: [2],
		rampageSkills: [[]],
	},
	// {
	// 	name: "Nargacuga GS",
	// 	type: "Great Sword",
	// 	raw: 290,
	// 	affinity: 35,
	// 	sharpness: "Purple",
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	{
		name: "Kamura SA",
		type: "Switch Axe",
		raw: 330,
		sharpness: [40, 70, 60, 60, 70, 50, 0],
		handicraft: [20, 30, 0, 0],
		properties: { type: "Power", value: 0 },
		decos: [4, 2],
		rampageSkills: [["AttackBoost1", "AffinityBoost4"]],
	},
	{
		name: "Kamura -> Dragon Phial SA",
		type: "Switch Axe",
		raw: 330,
		sharpness: [180, 30, 30, 10, 30, 50, 20],
		handicraft: [50, 0, 0, 0],
		properties: { type: "Dragon", value: 24 },
		decos: [4],
		rampageSkills: [["DullingStrike", "BrutalStrike", "ElementExploit", "BoostEquippedCoating"]],
	},
	{
		name: "Mizutsune SA",
		type: "Switch Axe",
		raw: 320,
		element: { value: 34, type: "Water" },
		affinity: 15,
		sharpness: [80, 80, 50, 60, 60, 20, 0],
		handicraft: [20, 30, 0, 0],
		properties: { type: "Power", value: 0 },
		decos: [1],
		rampageSkills: [[]],
	},
	{
		name: "Rathalos SA",
		type: "Switch Axe",
		raw: 330,
		element: { value: 37, type: "Fire" },
		sharpness: [100, 100, 30, 50, 40, 30, 0],
		handicraft: [20, 30, 0, 0],
		properties: { type: "Power", value: 0 },
		decos: [1],
		rampageSkills: [[]],
	},
	{
		name: "Blast SA",
		type: "Switch Axe",
		raw: 330,
		status: { value: 44, type: "Blast" },
		sharpness: [160, 50, 30, 20, 40, 50, 0],
		handicraft: [50, 0, 0, 0],
		properties: { type: "Element", value: 0 },
		decos: [2],
		rampageSkills: [[]],
	},
	// {
	// 	name: "Delex Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	element: {
	// 		value: 20,
	// 		type: "Water",
	// 	},
	// 	sharpness: "Blue",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Khezu Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 43,
	// 		type: "Thunder",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1, 3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Arzuros Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	sharpness: "Blue",
	// 	properties: { type: "Poison", value: 34 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Barioth Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 300,
	// 	element: {
	// 		value: 32,
	// 		type: "Ice",
	// 	},
	// 	affinity: 30,
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ore Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	sharpness: "White",
	// 	properties: { type: "Paralysis", value: 25 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ore -> Ice(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 28,
	// 		type: "Ice",
	// 	},
	// 	sharpness: "Purple",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Jyuratodus Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	element: {
	// 		value: 31,
	// 		type: "Water",
	// 	},
	// 	affinity: -15,
	// 	sharpness: "Blue",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Rathian Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	status: {
	// 		value: 30,
	// 		type: "Poison",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Rathian -> Fire(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	element: {
	// 		value: 20,
	// 		type: "Fire",
	// 	},
	// 	affinity: 20,
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Conqueress Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	sharpness: "White",
	// 	properties: { type: "Exhaust", value: 34 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Shredder Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	element: {
	// 		value: 27,
	// 		type: "Thunder",
	// 	},
	// 	sharpness: "Blue",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Shredder -> Thunder(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	element: {
	// 		value: 25,
	// 		type: "Thunder",
	// 	},
	// 	affinity: 20,
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ash Drache Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 30,
	// 		type: "Dragon",
	// 	},
	// 	affinity: 10,
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Almudron Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 310,
	// 	element: {
	// 		value: 58,
	// 		type: "Water",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1, 2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Almudron -> Fire(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 300,
	// 	element: {
	// 		value: 64,
	// 		type: "Fire",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Aknosom Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	element: {
	// 		value: 43,
	// 		type: "Fire",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Barroth Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 360,
	// 	affinity: -20,
	// 	sharpness: "Blue",
	// 	properties: { type: "Paralysis", value: 18 },
	// 	decos: [],
	// 	rampageSkills: [["BrutalStrike"]],
	// },
	// {
	// 	name: "Baggi Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	status: {
	// 		value: 29,
	// 		type: "Sleep",
	// 	},
	// 	sharpness: "Blue",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Bone Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 360,
	// 	sharpness: "Blue",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Bone -> Dragon(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	affinity: 10,
	// 	sharpness: "White",
	// 	properties: { type: "Dragon", value: 17 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Bone -> Water(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	element: {
	// 		value: 28,
	// 		type: "Water",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Anjanath Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	element: {
	// 		value: 27,
	// 		type: "Fire",
	// 	},
	// 	affinity: -20,
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1, 2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Tigrex Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	affinity: -20,
	// 	sharpness: "Purple",
	// 	properties: { type: "Exhaust", value: 30 },
	// 	decos: [],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Diablos Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	affinity: -15,
	// 	sharpness: "Blue",
	// 	properties: { type: "Exhaust", value: 22 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Poison Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	status: {
	// 		value: 49,
	// 		type: "Poison",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1, 2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Nargacuga Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	affinity: 40,
	// 	sharpness: "Purple",
	// 	properties: { type: "Poison", value: 20 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Volvidon Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	status: {
	// 		value: 22,
	// 		type: "Paralysis",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ludroth Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 45,
	// 		type: "Water",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1, 3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ludroth -> Exhaust(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 370,
	// 	sharpness: "Blue",
	// 	properties: { type: "Exhaust", value: 36 },
	// 	decos: [1, 2, 4],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Zinogre Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	element: {
	// 		value: 35,
	// 		type: "Thunder",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Lagombi Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 42,
	// 		type: "Ice",
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [1, 3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Magnamalo Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	status: {
	// 		value: 27,
	// 		type: "Blast",
	// 	},
	// 	sharpness: "Purple",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [1, 3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Magnamalo -> Dragon(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	element: {
	// 		value: 16,
	// 		type: "Dragon",
	// 	},
	// 	affinity: 20,
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	decos: [2],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Magnamalo -> Dragon 2(?) Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 300,
	// 	element: {
	// 		value: 33,
	// 		type: "Dragon",
	// 	},
	// 	affinity: 35,
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Rajang Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	element: {
	// 		value: 24,
	// 		type: "Thunder",
	// 	},
	// 	affinity: 15,
	// 	sharpness: "Blue",
	// 	properties: { type: "Element", value: 0 },
	// 	decos: [3],
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Rajang -> ? Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	decos: [],
	// 	element: {
	// 		type: "Thunder",
	// 		value: 13,
	// 	},
	// 	sharpness: "Purple",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Ibushi Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	decos: [3],
	// 	element: {
	// 		type: "Dragon",
	// 		value: 17,
	// 	},
	// 	sharpness: "Blue",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Narwa Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 300,
	// 	decos: [],
	// 	element: {
	// 		type: "Thunder",
	// 		value: 60,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Bazelgeuse Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	affinity: -15,
	// 	decos: [1],
	// 	status: {
	// 		type: "Blast",
	// 		value: 20,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Daora Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	decos: [1],
	// 	element: {
	// 		type: "Ice",
	// 		value: 53,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Teostra Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	decos: [2],
	// 	status: {
	// 		type: "Blast",
	// 		value: 49,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Chameleos Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	decos: [1, 3],
	// 	status: {
	// 		type: "Poison",
	// 		value: 35,
	// 	},
	// 	sharpness: "Purple",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Valstrax Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	decos: [3],
	// 	element: {
	// 		type: "Dragon",
	// 		value: 40,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Valstrax -> ? Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	affinity: -20,
	// 	decos: [],
	// 	element: {
	// 		type: "Dragon",
	// 		value: 12,
	// 	},
	// 	sharpness: "Purple",
	// 	properties: { type: "Element", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Upgraded Origami Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 340,
	// 	decos: [1, 2],
	// 	sharpness: "White",
	// 	properties: { type: "Dragon", value: 23 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Upgraded Grim Cat Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 350,
	// 	decos: [1],
	// 	status: {
	// 		type: "Paralysis",
	// 		value: 30,
	// 	},
	// 	sharpness: "Blue",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Upgraded Infernal Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	decos: [2, 3],
	// 	element: {
	// 		type: "Dragon",
	// 		value: 48,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Element", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Upgraded Sleepy Shellslice Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 310,
	// 	decos: [1, 2],
	// 	status: {
	// 		type: "Sleep",
	// 		value: 25,
	// 	},
	// 	sharpness: "White",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "??? Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 320,
	// 	affinity: 10,
	// 	decos: [2],
	// 	sharpness: "Purple",
	// 	properties: { type: "Power", value: 0 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "??? 2 Switch Axe",
	// 	type: "Switch Axe",
	// 	raw: 330,
	// 	decos: [],
	// 	sharpness: "Purple",
	// 	properties: { type: "Poison", value: 11 },
	// 	rampageSkills: [[]],
	// },
	// {
	// 	name: "Kamura Gunlance",
	// 	type: "Gunlance",
	// 	raw: 330,
	// 	decos: [2, 4],
	// 	sharpness: "White",
	// 	properties: { type: "Normal", value: 7 },
	// 	rampageSkills: [[]],
	// },
];
