import { produce } from "immer";
import { NextPage } from "next";
import { useMemo } from "react";
import {
	AttackRow,
	Box,
	NumberInput,
	ComboBox,
	ValueBox,
	BuffBox,
	Column,
	Checkbox,
} from "../components";
import {
	GreatSwordAttacks,
	GunlanceAttacks,
	HeavyBowgunAttacks,
	LightBowgunAttacks,
	SwitchAxeAttacks,
} from "../data";
import { Model } from "../model";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

const Attacks: NextPage<Props> = ({ model }) => {
	const attacks = useMemo(() => {
		const { type, properties } = model.weapon;

		if (type === "Switch Axe") return SwitchAxeAttacks;
		if (type === "Great Sword") return GreatSwordAttacks;
		// if (type === "Gunlance") {
		// 	return produce(GunlanceAttacks, (draft) => {
		// 		if (properties.type != "Wide") {
		// 			draft = draft.filter((a) => a.name !== "Charged Shelling Lv2");
		// 		}
		// 		if (properties.type != "Normal") {
		// 			draft = draft.filter((a) => a.name !== "Shelling (Burst Fire)");
		// 		}
		// 		return draft;
		// 	});
		// }
		// if (type === "Light Bowgun") return LightBowgunAttacks;
		// if (type === "Heavy Bowgun") return HeavyBowgunAttacks;
		return GreatSwordAttacks;
	}, [model]);

	return (
		<>
			<Column>
				{/* <ValueBox model={model} /> */}
				{/* <BuffBox model={model} setModel={setModel} /> */}
				<Box head="Hitzone">
					<div className="grid grid-cols-2 gap-x-2">
						<NumberInput
							label="Raw"
							value={model.hitzone}
							onChangeValue={(v) => model.setHitzone(v)}
							min={0}
						/>
						<NumberInput
							label="Elemental"
							value={model.hitzoneEle}
							onChangeValue={(v) => model.setHitzoneEle(v)}
							min={0}
						/>
						<Checkbox
							label="Species Exploit"
							value={model.antiSpecies}
							onChangeValue={model.setAntiSpecies}
						/>
					</div>
				</Box>
				<Box head="Attacks">
					<table className="table-auto w-full text-left">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="w-full">Attack</th>
								<th>Hit</th>
								{model.hasDullingStrike && <th>DS Hit</th>}
								<th>Crit</th>
								{model.brutalStrikeChance > 0 && <th>Brutal</th>}
								{model.hasDullingStrike && <th>DS Crit</th>}
								<th>Avg</th>
							</tr>
						</thead>
						<tbody className="text-gray-600">
							{attacks.map((a) => (
								<AttackRow
									onClick={() =>
										model.setCombo((combo) =>
											produce(combo, (draft) => {
												draft.push(a);
											}),
										)
									}
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
