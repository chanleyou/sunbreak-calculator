import React from "react";

type Props = {
	value?: boolean;
	onChangeValue: (v: boolean) => void;
	label?: string;
	disabled?: boolean;
};

export default function Checkbox({ value, onChangeValue, label, disabled }: Props) {
	return (
		<div className="flex my-2">
			<input
				type="checkbox"
				checked={value}
				onChange={(e) => onChangeValue(e.target.checked)}
				disabled={disabled}
			/>
			{label && (
				<label
					className="ml-1 inline-block align-baseline mb-0"
					onClick={() => onChangeValue(!value)}
				>
					{label}
				</label>
			)}
		</div>
	);
}
