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
	const { name, noCrit } = attack;

	// annoying irrelevant mechanics sigh
	const dullingStrikeHit = model.dullHit(attack);
	const dullingStrikeCrit = model.dullCrit(attack);
	const brutalStrike = model.brutalStrike(attack);

	const average = roundToDigits(model.attackAverage(attack));

	return (
		<tr className="cursor-pointer" key={attack.name} onClick={onClick}>
			<td className="group relative">
				{name}
				<div className="tooltip">
					{Object.entries(attack).map(([k, v]) => {
						if (k === "name") return;
						return (
							<p key={k}>
								{k}: {JSON.stringify(v)}
							</p>
						);
					})}
				</div>
			</td>
			{!short && (
				<>
					<td className="group relative">
						{model.hit(attack)}
						<div className="tooltip">
							<p>Raw: {Math.round(model.rawHit(attack))}</p>
							<p>Ele: {Math.round(model.eleHit(attack))}</p>
						</div>
					</td>
					{model.rampageSkills.includes("DullingStrike") && <td>{dullingStrikeHit}</td>}
					<td className="group relative">
						{noCrit ? "" : model.crit(attack)}
						<div className="tooltip">
							<p>Raw: {Math.round(model.rawCrit(attack))}</p>
							<p>Ele: {Math.round(model.eleCrit(attack))}</p>
						</div>
					</td>
					{model.brutalStrikeChance > 0 && <td>{noCrit ? "" : brutalStrike}</td>}
					{model.hasDullingStrike && <td>{noCrit ? "" : dullingStrikeCrit}</td>}
				</>
			)}
			<td>{average}</td>
		</tr>
	);
};

export default AttackRow;
