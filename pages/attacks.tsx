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
	Warning,
} from "../components";
import {
	GreatSwordAttacks,
	GunlanceAttacks,
	HeavyBowgunAttacks,
	LightBowgunAttacks,
	SwitchAxeAttacks,
	SwordAndShieldAttacks,
} from "../data";
import {
	ChargeBladeAttacks,
	DualBladeAttacks,
	HammerAttacks,
	HuntingHornAttacks,
	InsectGlaiveAttacks,
	LanceAttacks,
	LongSwordAttacks,
} from "../data/attacks";
import { Model } from "../model";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

const Attacks: NextPage<Props> = ({ model }) => {
	const attacks = useMemo(() => {
		const { type, properties } = model.weapon;

		if (type === "Sword and Shield") return SwordAndShieldAttacks;
		if (type === "Dual Blades") return DualBladeAttacks;
		if (type === "Great Sword") return GreatSwordAttacks;
		if (type === "Long Sword") return LongSwordAttacks;
		if (type === "Hammer") return HammerAttacks;
		if (type === "Hunting Horn") return HuntingHornAttacks;
		if (type === "Lance") return LanceAttacks;
		if (type === "Charge Blade") return ChargeBladeAttacks;
		if (type === "Insect Glaive") return InsectGlaiveAttacks;
		if (type === "Switch Axe") return SwitchAxeAttacks;
		if (type === "Gunlance") {
			return produce(GunlanceAttacks, (draft) => {
				if (properties.type != "Wide") {
					draft = draft.filter((a) => a.name !== "Charged Shelling Lv2");
				}
				return draft;
			});
		}
		// if (type === "Light Bowgun") return LightBowgunAttacks;
		// if (type === "Heavy Bowgun") return HeavyBowgunAttacks;
		return GreatSwordAttacks;
	}, [model]);

	return (
		<>
			<Column>
				{/* <ValueBox model={model} /> */}
				{/* <BuffBox model={model} setModel={setModel} /> */}
				{/* <Warning head="Current Status">
					<p className="text-xs">Done:</p>
					<ul className="text-xs py-1 pl-6 list-disc">
						<li className="">Switch Axe</li>
					</ul>
					<p className="text-xs">Semi-Done:</p>
					<ul className="text-xs py-1 pl-6 list-disc">
						<li className="">Great Sword</li>
					</ul>
				</Warning> */}
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
						<tbody>
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
