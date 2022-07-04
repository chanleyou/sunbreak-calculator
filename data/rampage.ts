export type RampageSkill = {
	name: string;
	raw?: number;
	affinity?: number;
	element?: number;
	coatingBoost?: number;
};

export type RampageSkillKey =
	| "AttackBoost1"
	| "AttackBoost2"
	| "AttackBoost3"
	| "AttackBoost4"
	| "AttackSurge"
	| "AffinityBoost1"
	| "AffinityBoost2"
	| "AffinityBoost3"
	| "AffinityBoost4"
	| "NonelementalBoost"
	| "ElementalBoost1"
	| "ElementalBoost2"
	| "ElementalBoost3"
	| "BoostEquippedCoating"
	| "ElementalSurge"
	| "KushalaDaoraSoul"
	| "ElementExploit"
	| "SilkbindBoost"
	| "BrutalStrike"
	| "DullingStrike"
	| "DefenseGrinder1"
	| "DefenseGrinder2"
	| "HellionMode"
	| "MaximumVolume"
	| "PhialSwitchBoost"
	| "LastingArcShot"
	| "DragonExploit"
	| "AntiAerialSpecies"
	| "AntiAquaticSpecies"
	| "SmallMonsterExploit"
	| "FireblightExploit"
	| "IceblightExploit"
	| "ThunderblightExploit"
	| "WaterblightExploit"
	| "MagnamaloSoul"
	| "ValstraxSoul"
	| "ChameleosSoul"
	| "TeostraSoul"
	| "IbushiSoul"
	| "NarwaSoul"
	| "BuddyRally"
	| "SpiribirdDoubled"
	| "WyrmstakeBoost"
	| "FangedExploit";

export const RampageSkills: Record<RampageSkillKey, RampageSkill> = {
	AttackBoost1: { name: "Attack Boost 1", raw: 4 },
	AttackBoost2: { name: "Attack Boost 2", raw: 6 },
	AttackBoost3: { name: "Attack Boost 3", raw: 8 },
	AttackBoost4: { name: "Attack Boost 4", raw: 10 },
	AttackSurge: { name: "Attack Surge", raw: 20, affinity: -30 },
	AffinityBoost1: { name: "Affinity Boost 1", affinity: 4 },
	AffinityBoost2: { name: "Affinity Boost 2", affinity: 6 },
	AffinityBoost3: { name: "Affinity Boost 3", affinity: 8 },
	AffinityBoost4: { name: "Affinity Boost 4", affinity: 10 },
	NonelementalBoost: { name: "Non-elemental Boost", raw: 10 },
	ElementalBoost1: { name: "Elemental Boost 1", element: 5 },
	ElementalBoost2: { name: "Elemental Boost 1", element: 7 },
	ElementalBoost3: { name: "Elemental Boost 1", element: 10 },
	BoostEquippedCoating: { name: "Boost Equipped Coating" },
	ElementalSurge: { name: "Elemental Surge", raw: -15, element: 10 },
	KushalaDaoraSoul: { name: "Kushala Daora Soul" },
	ElementExploit: { name: "Element Exploit" },
	SilkbindBoost: { name: "Silkbind Boost" }, // x1.1 multi to silkbind attacks
	BrutalStrike: { name: "Brutal Strike" }, // 15% chance for negative crit to instead deal 1.5x damage
	DullingStrike: { name: "Dulling Strike" }, // 10% chance to deal +20% damage when sharpness <= green
	HellionMode: { name: "Hellion Mode" },
	MaximumVolume: { name: "Maximum Volume" },
	PhialSwitchBoost: { name: "Phial Switch Boost" },
	LastingArcShot: { name: "Lasting Arc Shot" },
	DragonExploit: { name: "Dragon Exploit" },
	AntiAerialSpecies: { name: "Anti-Aerial Species" },
	AntiAquaticSpecies: { name: "Anti-Aquatic Species" },
	SmallMonsterExploit: { name: "Small Monster Exploit" },
	FireblightExploit: { name: "Fireblight Exploit" },
	IceblightExploit: { name: "Iceblight Exploit" },
	ThunderblightExploit: { name: "Thunderblight Exploit" },
	WaterblightExploit: { name: "Waterblight Exploit" },
	MagnamaloSoul: { name: "Magnamalo Soul" },
	ValstraxSoul: { name: "Valstrax Soul" },
	ChameleosSoul: { name: "Chameleos Soul" },
	TeostraSoul: { name: "Teostra Soul" },
	IbushiSoul: { name: "Ibushi Soul" },
	NarwaSoul: { name: "Narwa Soul" },
	BuddyRally: { name: "Buddy Rally" },
	SpiribirdDoubled: { name: "Spiribird Doubled" },
	WyrmstakeBoost: { name: "Wyrmstake Boost" },
	FangedExploit: { name: "Fanged Exploit" },
	DefenseGrinder1: { name: "Defense Grinder 1" },
	DefenseGrinder2: { name: "Defense Grinder 2" },
};

export type HasRampageSkill = Partial<{ [K in RampageSkillKey]: boolean }>;
