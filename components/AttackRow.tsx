import React from "react";
import { Attack } from "../data";
import { Model } from "../model";
import { roundToDigits } from "../utils";

type Props = {
	attack: Attack;
	model: Model;
	short?: boolean;
	onClick?: () => void;
};

export const AttackRow = ({ attack, model, short, onClick }: Props) => {
	const { name, mv, noCrit } = attack;

	const hit = model.hit(attack);
	const crit = model.crit(attack);

	// annoying irrelevant mechanics sigh
	const dullingStrikeHit = model.dullHit(attack);
	const dullingStrikeCrit = model.dullCrit(attack);
	const brutalStrike = model.brutalStrike(attack);

	const average = roundToDigits(model.average(attack));

	return (
		<tr key={attack.name} onClick={onClick}>
			<td>{name}</td>
			{!short && (
				<>
					<td>{mv}</td>
					<td>{hit}</td>
					{model.rampageSkills.includes("DullingStrike") && <td>{dullingStrikeHit}</td>}
					<td>{noCrit ? "-" : crit}</td>
					{model.rampageSkills.includes("BrutalStrike") && <td>{noCrit ? "-" : brutalStrike}</td>}
					{model.rampageSkills.includes("DullingStrike") && (
						<td>{noCrit ? "-" : dullingStrikeCrit}</td>
					)}
				</>
			)}
			<td>{average}</td>
		</tr>
	);
};

export default AttackRow;
