import React from "react";
import { Box, Checkbox, Select, NumberInput } from ".";
import { Model, Demondrug, LongSwordSpiritGauge } from "../data";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

export const ComboBox = ({ model, setModel }: Props) => {
	return (
		<Box head="Buffs">
			<Select
				label="Demondrug"
				formatter={(v) => v}
				options={Object.keys(Demondrug) as (keyof typeof Demondrug)[]}
				onSelectOption={(v) => setModel(Model.from({ ...model, demondrug: v }))}
				value={model.demondrug}
			/>
			<div className="grid grid-cols-2">
				<Checkbox
					label="Powercharm"
					value={model.powercharm}
					onChangeValue={(v) => setModel(Model.from({ ...model, powercharm: v }))}
				/>
				<Checkbox
					label="Powertalon"
					value={model.powertalon}
					onChangeValue={(v) => setModel(Model.from({ ...model, powertalon: v }))}
				/>
				<Checkbox
					label="Might Seed"
					value={model.mightSeed}
					onChangeValue={(v) => setModel(Model.from({ ...model, mightSeed: v }))}
				/>
				<Checkbox
					label="Demon Powder"
					value={model.demonPowder}
					onChangeValue={(v) => setModel(Model.from({ ...model, demonPowder: v }))}
				/>
				<Checkbox
					label="Power Drum"
					value={model.powerDrum}
					onChangeValue={(v) => setModel(Model.from({ ...model, powerDrum: v }))}
				/>
				<Checkbox
					label="Rousing Roar"
					value={model.rousingRoar}
					onChangeValue={(v) => setModel(Model.from({ ...model, rousingRoar: v }))}
				/>
				<Checkbox
					label="Dango Booster"
					value={model.dangoBooster}
					onChangeValue={(v) => setModel(Model.from({ ...model, dangoBooster: v }))}
				/>
			</div>
			<h4 className="mt-3">Weapon</h4>
			{model.weapon.type === "Great Sword" && (
				<Checkbox
					label="Power Sheathe"
					value={model.powerSheathe}
					onChangeValue={(v) => setModel(Model.from({ ...model, powerSheathe: v }))}
				/>
			)}
			{model.weapon.type === "Long Sword" && (
				<Select
					label="Spirit Gauge"
					options={Object.keys(LongSwordSpiritGauge) as (keyof typeof LongSwordSpiritGauge)[]}
					onSelectOption={(o) => setModel(Model.from({ ...model, spiritGauge: o }))}
					formatter={(v) => v}
				/>
			)}
			<h4 className="mt-3">Miscellaneous</h4>
			<p className="text-xs text-slate-500 mb-1">Buffs from your Petalace, Hunting Horn, etc</p>
			<div className="grid grid-cols-3 gap-2">
				<NumberInput
					label="Raw (+)"
					value={model.miscRaw}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscRaw: v }))}
				/>
				<NumberInput
					label="Raw (×)"
					value={model.miscMultiplier}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscMultiplier: v }))}
					step={0.01}
				/>
				<NumberInput
					label="Affinity (%)"
					value={model.miscAffinity}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscAffinity: v }))}
				/>
			</div>
		</Box>
	);
};

export default ComboBox;
