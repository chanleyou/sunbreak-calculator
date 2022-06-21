import React from "react";
import { Attack } from "../data";
import { Model } from "../model";
import { roundToDigits, sum } from "../utils";

type Props = {
	attack: Attack;
	model: Model;
};

export const AttackRow = ({ attack, model }: Props) => {
	const { name, mv, noCrit } = attack;

	const rawHit = model.calculateRawHit(attack);
	const eleHit = model.calculateEleHit(attack);

	const hit = Math.round(rawHit) + Math.round(eleHit);

	const rawCrit = model.calculateRawCrit(attack);
	const eleCrit = model.calculateEleCrit(attack);
	const crit = Math.round(rawCrit) + Math.round(eleCrit);

	// annoying irrelevant mechanics sigh
	const dullingStrikeHit = Math.round(rawHit * 1.2) + Math.round(eleHit);
	const dullingStrikeCrit = Math.round(rawCrit * 1.2) + Math.round(eleCrit);
	const brutalStrike = Math.round(rawHit * 1.5) + Math.round(eleHit);

	const hitChance = model.hitChance();
	const critChance = model.critChance();

	const dullingStrikeHitChance = model.dullingStrikeHitChance();
	const dullingStrikeCritChance = model.dullingStrikeCritChance();
	const brutalStrikeChance = model.brutalStrikeChance();

	const average = roundToDigits(
		sum(
			(hitChance * hit) / 100,
			(critChance * crit) / 100,
			(brutalStrike * brutalStrikeChance) / 100,
			(dullingStrikeHit * dullingStrikeHitChance) / 100,
			(dullingStrikeCrit * dullingStrikeCritChance) / 100,
		),
	);

	return (
		<tr key={attack.name}>
			<td>{name}</td>
			<td>{mv}</td>
			<td>{hit}</td>
			{model.rampageSkills.includes("DullingStrike") && <td>{dullingStrikeHit}</td>}
			<td>{noCrit ? "-" : crit}</td>
			{model.rampageSkills.includes("BrutalStrike") && <td>{noCrit ? "-" : brutalStrike}</td>}
			{model.rampageSkills.includes("DullingStrike") && <td>{noCrit ? "-" : dullingStrikeCrit}</td>}
			<td>{average}</td>
		</tr>
	);
};

export default AttackRow;
