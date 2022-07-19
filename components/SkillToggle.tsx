import React from "react";
import { Checkbox } from ".";

type Props = {
	value: number;
	maxRank: number;
	active?: boolean;
	onChangeValue: (n: boolean) => void;
	label?: string;
	canDisable?: boolean;
};

// export default function skillToggle({
// 	label,
// 	value,
// 	maxRank,
// 	active,
// 	onChangeValue,
// 	canDisable,
// 	note,
// }: Props) {
// 	return (
// 		<div className="mt-1 mb-2">
// 			<label>{label}</label>
// 			<div>
// 				<div className="flex bg-gray-50 border-gray-300 text-element">
// 					<p className="flex-1">
// 						{value} / {maxRank}
// 					</p>
// 					{!canDisable && <Checkbox value={active} onChangeValue={onChangeValue} />}
// 				</div>
// 			</div>
// 			{note && <label className="note">{note}</label>}
// 		</div>
// 	);
// }

export default function skillToggle({
	label,
	value,
	maxRank,
	active,
	onChangeValue,
	canDisable,
}: Props) {
	const boxes = [];

	for (let i = 0; i < maxRank; i++) {
		boxes.push(i);
	}

	return (
		<div className="mb-2">
			<label className={!active ? "line-through" : ""}>{label}</label>
			<div className="flex">
				<div className="flex-1 flex place-items-center pl-1">
					{boxes.map((b) => (
						<div
							key={b}
							style={{
								height: "14px",
								width: " 14px",
								transform: "skewX(-24deg)",
							}}
							className={`mr-1 ${
								b < value
									? "bg-gray-500 dark:bg-gray-100"
									: "bg-gray-100 border border-gray-300 dark:bg-midnight-700 dark:border-midnight-600"
							}`}
						/>
					))}
				</div>
				{!canDisable && (
					<input
						type="checkbox"
						checked={active}
						onChange={(e) => onChangeValue(e.target.checked)}
					/>
				)}
			</div>
		</div>
	);
}

// trangray(-30deg, 0)) rotate(--tw-rotate)) skewX(--tw-skew-x)) skewY(--tw-skew-y)) scaleX(--tw-scale-x)) scaleY(--tw-scale-y))
