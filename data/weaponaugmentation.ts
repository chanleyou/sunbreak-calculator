export type WeaponAugmentationClass = "Attack" | "Affnity" | "Element" | "Status" | "Sharpness" | "Rampage" | "Shelling";

export type WeaponAugmentationType = {
	name: string;
	slots: number;
	class: WeaponAugmentationClass;
	raw?: number;
	affinity?: number;
	element?: number;
	status?: number;
	shelling?: number;
	sharpness?: number;
};

export const AvaialableWeaponAugmentations = ["AttackBoost1", "AttackBoost2", "AttackBoost3", "AttackBoost4",
	"AffinityBoost1", "AffinityBoost2", "ElementalBoost1", "ElementalBoost2",
	"ElementalBoost3", "ElementalBoost4", "ElementalBoost5", "ElementalBoost6",
	"StatusBoost1", "StatusBoost2", "SharpnessBoost1", "SharpnessBoost2",
	"ShellingBoost1", "ShellingBoost2", "RampageSlotBoost"] as const;

export type WeaponAugmentationKey = typeof AvaialableWeaponAugmentations[number];

export const WeaponAugmentations: Record<string, WeaponAugmentationType> = {
	AttackBoost1: { name: "Attack Boost 1", class: "Attack", slots: 1, raw: 5 },
	AttackBoost2: { name: "Attack Boost 2", class: "Attack", slots: 1, raw: 10 },
	AttackBoost3: { name: "Attack Boost 3", class: "Attack", slots: 1, raw: 15 },
	AttackBoost4: { name: "Attack Boost 4", class: "Attack", slots: 1, raw: 20 },
	AffinityBoost1: { name: "Affinity Boost 1", class: "Affnity", slots: 1, affinity: 5 },
	AffinityBoost2: { name: "Affinity Boost 2", class: "Affnity", slots: 1, affinity: 10 },
	ElementalBoost1: { name: "Elemental Boost 1", class: "Element", slots: 1, element: 3 },
	ElementalBoost2: { name: "Elemental Boost 2", class: "Element", slots: 1, element: 6 },
	ElementalBoost3: { name: "Elemental Boost 3", class: "Element", slots: 1, element: 9 },
	ElementalBoost4: { name: "Elemental Boost 4", class: "Element", slots: 1, element: 12 },
	ElementalBoost5: { name: "Elemental Boost 5", class: "Element", slots: 1, element: 15 },
	ElementalBoost6: { name: "Elemental Boost 6", class: "Element", slots: 1, element: 20 },
	StatusBoost1: { name: "Status Boost 1", class: "Status", slots: 1, status: 4 },
	StatusBoost2: { name: "Status Boost 2", class: "Status", slots: 1, status: 8 },
	SharpnessBoost1: { name: "Sharpness Boost 1", class: "Sharpness", slots: 1, sharpness: 10 },
	SharpnessBoost2: { name: "Sharpness Boost 2", class: "Sharpness", slots: 1, sharpness: 20 },
	RampageSlotBoost: { name: "Rampage Slot Boost", class: "Rampage", slots: 1 },
	ShellingBoost1: { name: "Shelling Boost 1", class: "Shelling", slots: 1, shelling: 1 },
	ShellingBoost2: { name: "Shelling Boost 2", class: "Shelling", slots: 1, shelling: 2 },
};

export type HasWeaponAugmentation = Partial<{ [K in WeaponAugmentationKey]: boolean }>;
