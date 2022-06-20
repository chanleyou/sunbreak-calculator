import React from "react";

type Props<T> = {
	label: string;
	options: T[];
	onSelectOption: (t: T) => void;
	formatter: (t: T) => string;
	value?: T;
	placeholder?: string;
	small?: boolean;
	disabled?: boolean;
	note?: string;
};

export default function ObjectSelect<T>({
	label,
	options,
	onSelectOption,
	formatter = (t: T) => (t as unknown as string).toString(),
	value,
	placeholder,
	small,
	disabled,
	note,
}: Props<T>) {
	let className = "py-1 mb-2";
	if (small) className += " flex items-baseline gap-2";

	return (
		<div className={className}>
			<label>{label}</label>
			<select
				value={value ? formatter(value) : undefined}
				placeholder={placeholder}
				onChange={(e) => {
					const { value } = e.target;
					const option = options.find((o) => formatter(o) === value);
					if (option) onSelectOption(option);
				}}
				disabled={disabled}
			>
				{!disabled &&
					options.map((option) => {
						const formatted = formatter(option);
						return (
							<option key={formatted} onSelect={() => onSelectOption(option)}>
								{formatted}
							</option>
						);
					})}
			</select>
			{note && <p className="text-xs italic">{note}</p>}
		</div>
	);
}
