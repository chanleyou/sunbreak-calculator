import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
	value?: number;
	onChangeValue?: (v: number) => void;
	label?: string;
	disabled?: boolean;
	note?: string;
	small?: boolean;
}

export default function NumberInput({
	label,
	value,
	onChangeValue,
	disabled,
	note,
	small,
	...props
}: Props) {
	let className = "py-1 mb-2";
	if (small) className += " flex items-baseline gap-2";

	return (
		<div className={className}>
			<label>{label}</label>
			{disabled ? (
				<div className="number-input">{value}</div>
			) : (
				<input
					type="number"
					value={value}
					pattern="[0-9]*"
					onChange={(e) => {
						const { value } = e.target;
						if (onChangeValue) onChangeValue(Number(value ?? 0));
					}}
					disabled={disabled}
					{...props}
				/>
			)}
			{note && <label className="note">{note}</label>}
		</div>
	);
}
