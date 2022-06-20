import { SkillSlot } from "./skills";

export type Armor = {
	name: string;
	skills: SkillSlot[];
	decorations: number[];
};

export const Helms: Armor[] = [
	{
		name: "Valstrax Helm",
		skills: [
			["Dragonheart", 1],
			["WeaknessExploit", 1],
		],
		decorations: [1, 2],
	},
];

export const Chests: Armor[] = [
	{
		name: "Valstrax Mail",
		skills: [
			["Dragonheart", 1],
			["Resuscitate", 2],
		],
		decorations: [1, 3],
	},
];

export const Arms: Armor[] = [
	{
		name: "Valstrax Braces",
		skills: [
			["Dragonheart", 1],
			["WeaknessExploit", 2],
		],
		decorations: [2],
	},
];

export const Waists: Armor[] = [
	{
		name: "Valstrax Coil",
		skills: [
			["Dragonheart", 1],
			["Resuscitate", 1],
			["Resentment", 2],
		],
		decorations: [2],
	},
];

export const Legs: Armor[] = [
	{
		name: "Valstrax Greaves",
		skills: [
			["Dragonheart", 1],
			["Resentment", 1],
		],
		decorations: [1, 3],
	},
];
