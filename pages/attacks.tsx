import { NextPage } from "next";
import { useMemo } from "react";
import { AttackRow, Box, NumberInput, TextDisplay } from "../components";
import {
	GreatSwordAttacks,
	GunlanceAttacks,
	HeavyBowgunAttacks,
	LightBowgunAttacks,
	SwitchAxeAttacks,
} from "../data";
import { useForceUpdate } from "../hooks";
import { Model } from "../model";

type Props = {
	model: Model;
};

const Attacks: NextPage<Props> = ({ model }) => {
	const forceUpdate = useForceUpdate();

	const attacks = useMemo(() => {
		if (!model) return GreatSwordAttacks;
		if (model.weapon.type === "Switch Axe") return SwitchAxeAttacks;
		if (model.weapon.type === "Great Sword") return GreatSwordAttacks;
		if (model.weapon.type === "Gunlance") return GunlanceAttacks;
		if (model.weapon.type === "Light Bowgun") return LightBowgunAttacks;
		if (model.weapon.type === "Heavy Bowgun") return HeavyBowgunAttacks;
		return GreatSwordAttacks;
	}, [model]);

	if (!model) return <div />;

	return (
		<>
			<div className="flex flex-col gap-2">
				<Box head="Hitzone">
					<div className="grid grid-cols-2 gap-2">
						<NumberInput
							label="Raw"
							value={model.hitzone}
							onChangeValue={(v) => {
								model.hitzone = v;
								forceUpdate();
							}}
						/>
						<NumberInput
							label="Elemental"
							value={model.hitzoneEle}
							onChangeValue={(v) => {
								model.hitzoneEle = v;
								forceUpdate();
							}}
						/>
					</div>
				</Box>
				<Box head="Values">
					<div className="grid grid-cols-3 gap-2">
						<TextDisplay label="Raw" value={model.effectiveRaw()} />
						<TextDisplay
							label="Element"
							value={
								model.weapon.element?.type
									? `${model.weapon.element.type} ${model.effectiveEle()}`
									: 0
							}
						/>
						<TextDisplay label="Affinity (%)" value={model.effectiveAffinity()} />
					</div>
				</Box>
			</div>
			<Box stretch head="Attacks">
				<table className="table-auto w-full text-left text-xs">
					<thead>
						<tr className="border-b border-gray-200">
							<th>Attack</th>
							<th>MV</th>
							<th>Hit</th>
							{model?.rampageSkills.includes("DullingStrike") && <th>DS Hit</th>}
							<th>Crit</th>
							{model?.rampageSkills.includes("BrutalStrike") && <th>Brutal Hit</th>}
							{model?.rampageSkills.includes("DullingStrike") && <th>DS Crit</th>}
							<th>Avg</th>
						</tr>
					</thead>
					<tbody className="text-xs text-gray-600 divide-y divide-gray-200">
						{attacks.map((a) => (
							<AttackRow key={a.name} attack={a} model={model} />
						))}
					</tbody>
				</table>
			</Box>
		</>
	);
};

export default Attacks;
