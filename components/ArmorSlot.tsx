import React, { memo, useState } from "react";
import { Armor, Decoration, ArmorType, Armors } from "../data";
import { ArmorPickerModal, DecoPicker } from ".";

type SlotProps = {
	type: ArmorType;
	value?: Armor;
	onSelectOption: (a: Armor | undefined) => void;
	decos: (Decoration | undefined)[];
	onSelectDeco: (d: Decoration | undefined, i: number) => void;
};

const ArmorSlot = ({ type, value, onSelectOption, decos, onSelectDeco }: SlotProps) => {
	const [showPicker, setShowPicker] = useState(false);
	return (
		<>
			<div className="py-1">
				<label>{type}</label>
				<div
					onClick={() => setShowPicker(true)}
					className={`text-element cursor-pointer ${!value ? "text-gray-500" : ""}`}
				>
					{value?.name || "\u00a0"}
				</div>
				<div className="grid grid-cols-3 gap-2">
					{[0, 1, 2].map((i) => (
						<DecoPicker
							disabled={!value || value.decorations[i] === undefined}
							key={`${type}-deco-${i}`}
							value={decos[i]}
							setValue={(d) => onSelectDeco(d, i)}
							level={value ? value?.decorations[i] : 0}
						/>
					))}
				</div>
			</div>
			<ArmorPickerModal
				value={value}
				setValue={onSelectOption}
				options={Armors.filter((a) => a.type === type)}
				show={showPicker}
				setShow={setShowPicker}
			/>
		</>
	);
};

export default memo(ArmorSlot);
