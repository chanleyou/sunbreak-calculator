import type { SkillSlot } from ".";

export type Decoration = {
	rank: number;
	name: string;
	skills: SkillSlot[];
};

export const Decorations: Decoration[] = [
	{ rank: 1, name: "(Element) Jewel 1", skills: [["ElementalAttack", 1]] },
	{ rank: 2, name: "Attack Jewel 2", skills: [["AttackBoost", 1]] },
	{ rank: 2, name: "Expert Jewel 2", skills: [["CriticalEye", 1]] },
];
