import type {WeaponType} from "../data/weapons";

export type WeaponAugmentationType = {
	name: string;
    slots: number;
	raw?: number;
	affinity?: number;
	element?: Record<WeaponType, number>;
    status?: number;
	shelling?: number;
    sharpness?: number;
};

export const AvaialableWeaponAugmentations = ["AttackBoost1","AttackBoost2","AttackBoost3","AttackBoost4",
"AffinityBoost1","AffinityBoost2","ElementalBoost1","ElementalBoost2",
"ElementalBoost3","ElementalBoost4","ElementalBoost5","ElementalBoost6",
"StatusBoost1","StatusBoost2","SharpnessBoost1","SharpnessBoost2",
"ShellingBoost1","ShellingBoost2","RampageSlotBoost"] as const;
    
export type WeaponAugmentationKey = typeof AvaialableWeaponAugmentations[number];

export const WeaponAugmentations: Record<string, WeaponAugmentationType> = {
	AttackBoost1: { name: "Attack Boost 1", slots: 1, raw: 5 },
	AttackBoost2: { name: "Attack Boost 1", slots: 1, raw: 10 },
	AttackBoost3: { name: "Attack Boost 1", slots: 1, raw: 15 },
	AttackBoost4: { name: "Attack Boost 1", slots: 1, raw: 20 },
	AffinityBoost1: { name: "Affinity Boost 1", slots: 1, affinity: 5 },
	AffinityBoost2: { name: "Affinity Boost 2", slots: 1, affinity: 10 },
	ElementalBoost1: { name: "Elemental Boost 1", slots: 1, element: {
		"Bow": 3,
		"Charge Blade": 3,
		"Dual Blades": 3,
		"Great Sword": 5,
		"Gunlance": 3,
		"Hammer": 3,
		"Heavy Bowgun": 3,
		"Hunting Horn": 3,
		"Insect Glaive": 3,
		"Lance": 3,
		"Light Bowgun": 3,
		"Long Sword": 3
	} as Record<WeaponType, number> },
	ElementalBoost2: { name: "Elemental Boost 2", slots: 1, element: {
		"Bow": 6,
		"Charge Blade": 6,
		"Dual Blades": 6,
		"Great Sword": 10,
		"Gunlance": 6,
		"Hammer": 6,
		"Heavy Bowgun": 6,
		"Hunting Horn": 6,
		"Insect Glaive": 6,
		"Lance": 6,
		"Light Bowgun": 6,
		"Long Sword": 6
	} as Record<WeaponType, number> },
	ElementalBoost3: { name: "Elemental Boost 3", slots: 1, element: {
		"Bow": 9,
		"Charge Blade": 9,
		"Dual Blades": 9,
		"Great Sword": 15,
		"Gunlance": 10,
		"Hammer": 9,
		"Heavy Bowgun": 9,
		"Hunting Horn": 9,
		"Insect Glaive": 9,
		"Lance": 10,
		"Light Bowgun": 9,
		"Long Sword": 9
	} as Record<WeaponType, number> },
    ElementalBoost4: { name: "Elemental Boost 4", slots: 1, element: {
		"Bow": 12,
		"Charge Blade": 12,
		"Dual Blades": 12,
		"Great Sword": 20,
		"Gunlance": 14,
		"Hammer": 12,
		"Heavy Bowgun": 12,
		"Hunting Horn": 12,
		"Insect Glaive": 12,
		"Lance": 14,
		"Light Bowgun": 12,
		"Long Sword": 12
	} as Record<WeaponType, number> },
    ElementalBoost5: { name: "Elemental Boost 5", slots: 1, element: {
		"Bow": 15,
		"Charge Blade": 15,
		"Dual Blades": 15,
		"Great Sword": 25,
		"Gunlance": 18,
		"Hammer": 15,
		"Heavy Bowgun": 15,
		"Hunting Horn": 15,
		"Insect Glaive": 15,
		"Lance": 18,
		"Light Bowgun": 15,
		"Long Sword": 15
	} as Record<WeaponType, number> },
    ElementalBoost6: { name: "Elemental Boost 6", slots: 1, element: {
		"Bow": 20,
		"Charge Blade": 20,
		"Dual Blades": 20,
		"Great Sword": 33,
		"Gunlance": 24,
		"Hammer": 20,
		"Heavy Bowgun": 20,
		"Hunting Horn": 20,
		"Insect Glaive": 20,
		"Lance": 24,
		"Light Bowgun": 20,
		"Long Sword": 20
	} as Record<WeaponType, number> },
    StatusBoost1: { name: "Status Boost 1", slots: 1, status: 4 },
    StatusBoost2: { name: "Status Boost 2", slots: 1, status: 8 },
    SharpnessBoost1: { name: "Sharpness Boost 1", slots: 1, sharpness: 10 },
    SharpnessBoost2: { name: "Sharpness Boost 2", slots: 1, sharpness: 20 },
    RampageSlotBoost: { name: "Rampage Slot Boost", slots: 1 },
    ShellingBoost1: { name: "Shelling Boost 1", slots: 1, shelling: 1 },
	ShellingBoost2: { name: "Shelling Boost 2", slots: 1, shelling: 2 },
};

export type HasWeaponAugmentation = Partial<{ [K in WeaponAugmentationKey]: boolean }>;
