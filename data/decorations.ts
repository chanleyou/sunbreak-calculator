import type { SkillSlot } from ".";

export type Decoration = {
	rank: number;
	name: string;
	skill: SkillSlot;
};

export const Decorations: Decoration[] = [
	{ rank: 1, name: "Hungerless Jewel 1", skill: ["HungerResistance", 1] },
	{ rank: 1, name: "Grinder Jewel 1", skill: ["SpeedSharpening", 1] },
	{ rank: 4, name: "Grinder Jewel 4", skill: ["SpeedSharpening", 3] },
	{ rank: 1, name: "Blaze Jewel 1", skill: ["FireAttack", 1] },
	{ rank: 1, name: "Frost Jewel 1", skill: ["IceAttack", 1] },
	{ rank: 1, name: "Stream Jewel 1", skill: ["WaterAttack", 1] },
	{ rank: 1, name: "Bolt Jewel 1", skill: ["ThunderAttack", 1] },
	{ rank: 1, name: "Dragon Jewel 1", skill: ["DragonAttack", 1] },
	{ rank: 2, name: "Critical Jewel 2", skill: ["CriticalBoost", 1] },
	{ rank: 2, name: "Blaze Jewel 2", skill: ["FireAttack", 2] },
	{ rank: 2, name: "Frost Jewel 2", skill: ["IceAttack", 2] },
	{ rank: 2, name: "Stream Jewel 2", skill: ["WaterAttack", 2] },
	{ rank: 2, name: "Bolt Jewel 2", skill: ["ThunderAttack", 2] },
	{ rank: 2, name: "Dragon Jewel 2", skill: ["DragonAttack", 2] },
	{ rank: 3, name: "Blaze Jewel 3", skill: ["FireAttack", 3] },
	{ rank: 3, name: "Frost Jewel 3", skill: ["IceAttack", 3] },
	{ rank: 3, name: "Stream Jewel 3", skill: ["WaterAttack", 3] },
	{ rank: 3, name: "Bolt Jewel 3", skill: ["ThunderAttack", 3] },
	{ rank: 3, name: "Dragon Jewel 3", skill: ["DragonAttack", 3] },
	{ rank: 4, name: "Blaze Jewel 4", skill: ["FireAttack", 4] },
	{ rank: 4, name: "Frost Jewel 4", skill: ["IceAttack", 4] },
	{ rank: 4, name: "Stream Jewel 4", skill: ["WaterAttack", 4] },
	{ rank: 4, name: "Bolt Jewel 4", skill: ["ThunderAttack", 4] },
	{ rank: 4, name: "Dragon Jewel 4", skill: ["DragonAttack", 4] },
	{ rank: 2, name: "Attack Jewel 2", skill: ["AttackBoost", 1] },
	{ rank: 2, name: "Expert Jewel 2", skill: ["CriticalEye", 1] },
	{ rank: 4, name: "Wirebug Jewel 4", skill: ["WirebugWhisperer", 2] },
	{ rank: 2, name: "Crit Element Jewel 2", skill: ["CriticalElement", 1] },
	{ rank: 4, name: "Crit Element Jewel 4", skill: ["CriticalElement", 2] },
	{ rank: 2, name: "Charger Jewel 2", skill: ["Focus", 1] },
	{ rank: 4, name: "Charger Jewel 4", skill: ["Focus", 2] },
	{ rank: 2, name: "Artillery Jewel 2", skill: ["Artillery", 1] },
	{ rank: 3, name: "Draw Jewel 3", skill: ["CriticalDraw", 1] },
	{ rank: 4, name: "Draw Jewel 4", skill: ["CriticalDraw", 2] },
	{ rank: 2, name: "Jumping Jewel 2", skill: ["EvadeExtender", 1] },
	{ rank: 4, name: "Jumping Jewel 4", skill: ["EvadeExtender", 2] },
	{ rank: 2, name: "Magazine Jewel 2", skill: ["LoadShells", 1] },
	{ rank: 2, name: "Shield Jewel 2", skill: ["Guard", 1] },
	{ rank: 2, name: "Ironwall Jewel 2", skill: ["GuardUp", 1] },
	{ rank: 4, name: "Earplugs Jewel 4", skill: ["Earplugs", 2] },
];
