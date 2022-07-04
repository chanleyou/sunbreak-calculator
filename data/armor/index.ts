import { SkillSlot } from "../skills";

export type ArmorType = "Helm" | "Chest" | "Arms" | "Waist" | "Legs";

export type Armor = {
	name: string;
	series: string;
	type: ArmorType;
	defense: number;
	skills: SkillSlot[];
	slots: number[];
	rarity: number;
	fireRes: number;
	waterRes: number;
	iceRes: number;
	thunderRes: number;
	dragonRes: number;
};

export { default as Armors } from "./raw";
