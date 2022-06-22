import React from "react";

type Props = {
	value?: boolean;
	onChangeValue: (v: boolean) => void;
	label?: string;
	disabled?: boolean;
	note?: string;
};

export default function Checkbox({ value, onChangeValue, label, disabled, note }: Props) {
	return (
		<div>
			<input
				type="checkbox"
				checked={value}
				onChange={(e) => onChangeValue(e.target.checked)}
				disabled={disabled}
			/>
			<label
				className="ml-1 inline-block align-baseline mb-0"
				onClick={() => onChangeValue(!value)}
			>
				{label}
			</label>
			{note && <label>({note})</label>}
		</div>
	);
}
