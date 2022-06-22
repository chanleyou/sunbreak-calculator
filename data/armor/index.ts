import { SkillSlot } from "../skills";
export { default as Helms } from "./helms";
export { default as Chests } from "./chests";
export { default as Arms } from "./arms";
export { default as Waists } from "./waists";
export { default as Legs } from "./legs";

export type Armor = {
	name: string;
	skills: SkillSlot[];
	decorations: number[];
};
