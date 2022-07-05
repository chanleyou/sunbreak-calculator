import React from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
	value?: string;
	onChangeValue?: (v: string) => void;
	label?: string;
	disabled?: boolean;
	note?: string;
	small?: boolean;
}

export default function TextInput({
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
					type="text"
					value={value}
					onChange={(e) => {
						if (onChangeValue) onChangeValue(e.target.value);
					}}
					disabled={disabled}
					{...props}
				/>
			)}
			{note && <label className="note">{note}</label>}
		</div>
	);
}
