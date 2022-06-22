import React from "react";
import { Box, Checkbox, Select, NumberInput } from ".";
import { Demondrug } from "../data";
import { useForceUpdate } from "../hooks";
import { Model } from "../model";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

export const ComboBox = ({ model, setModel }: Props) => {
	const forceUpdate = useForceUpdate();

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
			<h4 className="mt-3">Miscellaneous</h4>
			<div className="grid grid-cols-3 gap-2">
				<NumberInput
					label="Raw (Flat)"
					value={model.miscRaw}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscRaw: v }))}
					min={0}
				/>
				<NumberInput
					label="Raw (Multiplier)"
					value={model.miscMultiplier}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscMultiplier: v }))}
					min={0}
					step={0.01}
				/>
				<NumberInput
					label="Affinity"
					value={model.miscAffinity}
					onChangeValue={(v) => setModel(Model.from({ ...model, miscAffinity: v }))}
				/>
			</div>
			<p className="text-xs text-slate-400">e.g. Petalace, Hunting Horn buffs, etc.</p>
		</Box>
	);
};

export default ComboBox;
