import React from "react";
import { Box, Checkbox, Select } from ".";
import { Demondrug } from "../data";
import { Model } from "../model";

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
		</Box>
	);
};

export default ComboBox;
