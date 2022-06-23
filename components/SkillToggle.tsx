import React from "react";
import { Checkbox } from ".";

type Props = {
	value: number;
	maxRank: number;
	active?: boolean;
	onChangeValue: (n: boolean) => void;
	label?: string;
	note?: string;
	canDisable?: boolean;
};

export default function skillToggle({
	label,
	value,
	maxRank,
	active,
	onChangeValue,
	canDisable,
	note,
}: Props) {
	return (
		<div className="mt-1 mb-2">
			<label>{label}</label>
			<div>
				<div className="flex bg-slate-50 border-slate-300 text-element">
					<p className="flex-1">
						{value} / {maxRank}
					</p>
					{!canDisable && <Checkbox value={active} onChangeValue={onChangeValue} />}
				</div>
			</div>
			{note && <label className="note">{note}</label>}
		</div>
	);
}

// export default function skillToggle({
// 	label,
// 	value,
// 	maxRank,
// 	active,
// 	onChangeValue,
// 	canDisable,
// 	note,
// }: Props) {
// 	const boxes = [];

// 	for (let i = 0; i < maxRank; i++) {
// 		boxes.push(i);
// 	}

// 	return (
// 		<div className="mt-1 mb-2">
// 			<label>{label}</label>
// 			<div className="flex">
// 				<div className="flex-1 flex place-items-center pl-1">
// 					{boxes.map((b) => (
// 						<div
// 							className={`h-3 w-3 border-gray-600 border mr-1 ${
// 								b < value ? "bg-gray-600" : "bg-white"
// 							}`}
// 						/>
// 					))}
// 				</div>
// 				{!canDisable && <Checkbox label="Active" value={active} onChangeValue={onChangeValue} />}
// 			</div>
// 		</div>
// 	);
// }
