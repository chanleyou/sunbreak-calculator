import type { SkillSlot } from ".";

export type Decoration = {
	rank: number;
	name: string;
	skills: SkillSlot[];
};

export const Decorations: Decoration[] = [
	{ rank: 1, name: "Blaze Jewel 1", skills: [["FireAttack", 1]] },
	{ rank: 1, name: "Frost Jewel 1", skills: [["IceAttack", 1]] },
	{ rank: 1, name: "Stream Jewel 1", skills: [["WaterAttack", 1]] },
	{ rank: 1, name: "Bolt Jewel 1", skills: [["ThunderAttack", 1]] },
	{ rank: 1, name: "Dragon Jewel 1", skills: [["DragonAttack", 1]] },
	{ rank: 2, name: "Blaze Jewel 2", skills: [["FireAttack", 2]] },
	{ rank: 2, name: "Frost Jewel 2", skills: [["IceAttack", 2]] },
	{ rank: 2, name: "Stream Jewel 2", skills: [["WaterAttack", 2]] },
	{ rank: 2, name: "Bolt Jewel 2", skills: [["ThunderAttack", 2]] },
	{ rank: 2, name: "Dragon Jewel 2", skills: [["DragonAttack", 2]] },
	{ rank: 3, name: "Blaze Jewel 3", skills: [["FireAttack", 3]] },
	{ rank: 3, name: "Frost Jewel 3", skills: [["IceAttack", 3]] },
	{ rank: 3, name: "Stream Jewel 3", skills: [["WaterAttack", 3]] },
	{ rank: 3, name: "Bolt Jewel 3", skills: [["ThunderAttack", 3]] },
	{ rank: 3, name: "Dragon Jewel 3", skills: [["DragonAttack", 3]] },
	{ rank: 4, name: "Blaze Jewel 4", skills: [["FireAttack", 4]] },
	{ rank: 4, name: "Frost Jewel 4", skills: [["IceAttack", 4]] },
	{ rank: 4, name: "Stream Jewel 4", skills: [["WaterAttack", 4]] },
	{ rank: 4, name: "Bolt Jewel 4", skills: [["ThunderAttack", 4]] },
	{ rank: 4, name: "Dragon Jewel 4", skills: [["DragonAttack", 4]] },
	{ rank: 2, name: "Attack Jewel 2", skills: [["AttackBoost", 1]] },
	{ rank: 2, name: "Expert Jewel 2", skills: [["CriticalEye", 1]] },
	{ rank: 4, name: "Wirebug Jewel 2", skills: [["WirebugWhisperer", 2]] },
	{ rank: 4, name: "Crit Element Jewel 4", skills: [["CriticalElement", 2]] },
];
