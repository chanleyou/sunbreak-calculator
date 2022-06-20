import React from "react";
import { Checkbox } from "./Checkbox";

type Props = {
	value?: number;
	active?: boolean;
	onChangeValue: (n: boolean) => void;
	label?: string;
	note?: string;
	disabled?: boolean;
};

export default function skillToggle({
	label,
	value,
	active,
	onChangeValue,
	disabled,
	note,
}: Props) {
	return (
		<div className="mt-1 mb-2">
			<label>{label}</label>
			<div>
				<div className=" flex p-1 border-slate-300 border text-sm rounded text-gray-600 bg-gray-100 w-stretch">
					<p className="flex-1">{value}</p>
					{!disabled && (
						<Checkbox value={active} onChangeValue={onChangeValue} disabled={disabled} />
					)}
				</div>
			</div>
			{note && <label className="note">{note}</label>}
		</div>
	);
}
