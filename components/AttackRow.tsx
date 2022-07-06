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

	const average = roundToDigits(model.attackAverage(attack));

	return (
		<tr className="cursor-pointer" key={attack.name} onClick={onClick}>
			{!short && <td>{mv ? mv : ""}</td>}
			<td>{name}</td>
			{!short && (
				<>
					<td className="group relative">
						{hit}
						<div className="attack-mouseover">
							<p>Raw: {Math.round(model.rawHit(attack))}</p>
							<p>Ele: {Math.round(model.eleHit(attack))}</p>
						</div>
					</td>
					{model.rampageSkills.includes("DullingStrike") && <td>{dullingStrikeHit}</td>}
					<td className="group relative">
						{noCrit ? "" : crit}
						<div className="attack-mouseover">
							<p>Raw: {Math.round(model.rawCrit(attack))}</p>
							<p>Ele: {Math.round(model.eleCrit(attack))}</p>
						</div>
					</td>
					{model.brutalStrikeChance > 0 && (
						<td className="group relative">
							{noCrit ? "" : brutalStrike}
							<div className="attack-mouseover">
								<p>Raw: {Math.round(model.brutalStrike(attack))}</p>
								<p>Ele: {Math.round(model.eleHit(attack))}</p>
							</div>
						</td>
					)}
					{model.rampageSkills.includes("DullingStrike") && (
						<td>{noCrit ? "" : dullingStrikeCrit}</td>
					)}
				</>
			)}
			<td>{average}</td>
		</tr>
	);
};

export default AttackRow;
