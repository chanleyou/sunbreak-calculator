import { NextPage } from "next";
import { useMemo } from "react";
import { AttackRow, Box, NumberInput, ComboBox, ValueBox, BuffBox } from "../components";
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
	setModel: (m: Model) => void;
};

const Attacks: NextPage<Props> = ({ model, setModel }) => {
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
							min={0}
						/>
						<NumberInput
							label="Elemental"
							value={model.hitzoneEle}
							onChangeValue={(v) => {
								model.hitzoneEle = v;
								forceUpdate();
							}}
							min={0}
						/>
					</div>
				</Box>
				<ValueBox model={model} />
				<BuffBox model={model} setModel={setModel} />
				<ComboBox model={model} />
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
							{model?.rampageSkills.includes("BrutalStrike") && <th>Brutal</th>}
							{model?.rampageSkills.includes("DullingStrike") && <th>DS Crit</th>}
							<th>Avg</th>
						</tr>
					</thead>
					<tbody className="text-xs text-gray-600 divide-y divide-gray-200">
						{attacks.map((a) => (
							<AttackRow
								onClick={() => {
									model.combo.push(a);
									forceUpdate();
								}}
								key={a.name}
								attack={a}
								model={model}
							/>
						))}
					</tbody>
				</table>
			</Box>
		</>
	);
};

export default Attacks;
