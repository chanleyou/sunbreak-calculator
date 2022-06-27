import React from "react";
import { Box, Checkbox, Select, NumberInput } from ".";
import { Demondrug, LongSwordSpiritGauge } from "../data";
import { Model } from "../model";

type Props = {
	model: Model;
};

export const ComboBox = ({ model }: Props) => {
	return (
		<Box head="Buffs">
			<div className="grid grid-cols-3">
				{model.weapon.type === "Gunlance" && (
					<Checkbox
						label="Ground Splitter"
						value={model.groundSplitter}
						onChangeValue={model.setGroundSplitter}
					/>
				)}
				{model.weapon.type === "Great Sword" && (
					<Checkbox
						label="Power Sheathe"
						value={model.powerSheathe}
						onChangeValue={model.setPowerSheathe}
					/>
				)}
				{model.isRanged && (
					<>
						<Checkbox
							label="Dango Marksman"
							value={model.dangoMarksman}
							onChangeValue={model.setDangoMarksman}
						/>
						<Checkbox
							label="Dango Temper"
							value={model.dangoTemper}
							onChangeValue={model.setDangoTemper}
						/>
					</>
				)}
			</div>
			{model.weapon.type === "Long Sword" && (
				<>
					<label>Spirit Gauge</label>
					<Select
						value={model.spiritGauge}
						options={Object.keys(LongSwordSpiritGauge) as (keyof typeof LongSwordSpiritGauge)[]}
						onSelectOption={model.setSpiritGauge}
						formatter={(v) => v}
					/>
				</>
			)}
			<label>Demondrug</label>
			<Select
				formatter={(v) => v}
				options={Object.keys(Demondrug) as (keyof typeof Demondrug)[]}
				onSelectOption={model.setDemondrug}
				value={model.demondrug}
			/>
			<div className="grid grid-cols-3">
				<Checkbox label="Powercharm" value={model.powercharm} onChangeValue={model.setPowercharm} />
				<Checkbox label="Powertalon" value={model.powertalon} onChangeValue={model.setPowertalon} />
				<Checkbox
					label="Dango Booster"
					value={model.dangoBooster}
					onChangeValue={model.setDangoBooster}
				/>
				<Checkbox label="Might Seed" value={model.mightSeed} onChangeValue={model.setMightSeed} />
				<Checkbox
					label="Demon Powder"
					value={model.demonPowder}
					onChangeValue={model.setDemonPowder}
				/>
				<Checkbox label="Power Drum" value={model.powerDrum} onChangeValue={model.setPowerDrum} />
				<Checkbox
					label="Rousing Roar"
					value={model.rousingRoar}
					onChangeValue={model.setRousingRoar}
				/>
			</div>
			<h4 className="mt-3">Miscellaneous</h4>
			<p className="text-xs text-slate-500 mb-1">Buffs from your Petalace, Hunting Horn, etc</p>
			<div className="grid grid-cols-3 gap-2">
				<NumberInput label="Raw (Flat)" value={model.miscRaw} onChangeValue={model.setMiscRaw} />
				<NumberInput
					label="Raw (%)"
					value={model.miscMultiplier}
					onChangeValue={model.setMiscMultiplier}
				/>
				<NumberInput
					label="Affinity (%)"
					value={model.miscAffinity}
					onChangeValue={model.setMiscAffinity}
				/>
			</div>
		</Box>
	);
};

export default ComboBox;
