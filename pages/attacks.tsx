import { NextPage } from "next";
import { useMemo } from "react";
import { AttackRow, Box, NumberInput, ComboBox, ValueBox, BuffBox, Column } from "../components";
import {
	GreatSwordAttacks,
	GunlanceAttacks,
	HeavyBowgunAttacks,
	LightBowgunAttacks,
	SwitchAxeAttacks,
	Model,
} from "../data";
import { useForceUpdate } from "../hooks";

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
			<Column>
				{/* <ValueBox model={model} /> */}
				{/* <BuffBox model={model} setModel={setModel} /> */}
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
				<Box head="Attacks">
					<table className="table-auto w-full text-left text-xs">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="w-full">Attack</th>
								<th>MV</th>
								<th>Hit</th>
								{model?.rampageSkills.includes("DullingStrike") && <th>DS Hit</th>}
								<th>Crit</th>
								{model?.rampageSkills.includes("BrutalStrike") && <th>Brutal</th>}
								{model?.rampageSkills.includes("DullingStrike") && <th>DS Crit</th>}
								<th>Avg</th>
							</tr>
						</thead>
						<tbody className="text-xs text-gray-600">
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
			</Column>
			<Column>
				<ComboBox model={model} />
			</Column>
		</>
	);
};

export default Attacks;
