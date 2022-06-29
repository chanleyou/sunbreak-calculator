import { SkillSlot } from "../skills";

export type ArmorType = "Helm" | "Chest" | "Arms" | "Waist" | "Legs";

export type Armor = {
	name: string;
	type: ArmorType;
	defense: number;
	skills: SkillSlot[];
	decorations: number[];
	rarity: number;
	fireRes: number;
	waterRes: number;
	iceRes: number;
	thunderRes: number;
	dragonRes: number;
};

export { default as Armors } from "./raw";
