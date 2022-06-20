export const RampageSkills = {
	AttackBoost: { name: "Attack Boost", ranks: [{ raw: 4 }, { raw: 6 }, { raw: 8 }, { raw: 10 }] },
	AttackSurge: { name: "Attack Surge", ranks: [{ raw: 20, affinity: -30 }] },
	AffinityBoost: {
		name: "Affinity Boost",
		ranks: [{ affinity: 4 }, { affinity: 6 }, { affinity: 8 }, { affinity: 10 }],
	},
	NonelementalBoost: { name: "Non-elemental Boost", ranks: [{ raw: 10 }] },
	ElementalBoost: {
		name: "Elemental Boost",
		ranks: [{ element: 5 }, { element: 7 }, { element: 10 }],
	},
	BoostEquippedCoating: { name: "Boost Equipped Coating", ranks: [{ element: 10 }] },
	ElementalSurge: { name: "Elemental Surge", ranks: [{ attack: -15, element: 10 }] },
	KushalaDaoraSoul: { name: "Kushala Daora Soul", ranks: [{}] },
	SilkbindBoost: { name: "Silkbind Boost", ranks: [{ multiplier: 1.1 }] },
};

export type RampageSkillKey = keyof typeof RampageSkills;

export type RampageSkill = typeof RampageSkills[RampageSkillKey];

export type RampageSkillSlot = [RampageSkillKey, number];
