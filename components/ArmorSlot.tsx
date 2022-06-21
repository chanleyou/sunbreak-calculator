import React, { memo } from "react";
import { Armor, Decoration, Decorations } from "../data";
import { Select } from ".";

type SlotProps = {
	label: string;
	options: Armor[];
	value?: Armor;
	onSelectOption: (a: Armor | undefined) => void;
	decos: (Decoration | undefined)[];
	onSelectDeco: (d: Decoration | undefined, i: number) => void;
};

const ArmorSlot = memo(
	({ label, options, value, onSelectOption, decos, onSelectDeco }: SlotProps) => (
		<>
			<Select
				label={label}
				options={options}
				value={value}
				onSelectOption={onSelectOption}
				formatter={(o) => o.name}
			/>
			<div className="grid grid-cols-3 gap-2">
				{value?.decorations.map((s, i) => (
					<Select
						key={label + i}
						label={`Decoration [${s}]`}
						options={Decorations.filter((d) => d.rank <= s)}
						value={decos[i]}
						formatter={(o) => o.name}
						onSelectOption={(d) => onSelectDeco(d, i)}
					/>
				))}
			</div>
		</>
	),
);

export default ArmorSlot;
