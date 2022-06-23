import React from "react";

type Props<T> = {
	label?: string;
	options: T[];
	onSelectOption: (t: T | undefined) => void;
	formatter: (t: T) => string;
	renderer?: (t: T) => string;
	value?: T;
	small?: boolean;
	disabled?: boolean;
	note?: string;
};

export default function Select<T>({
	label,
	options,
	onSelectOption,
	formatter = (t: T) => (t as unknown as string | number).toString(),
	renderer = formatter,
	value,
	small,
	disabled,
}: Props<T>) {
	let className = "mb-2 relative";
	if (small) className += " flex items-baseline gap-2";

	return (
		<div className={className}>
			{label && !value && (
				<p className="absolute border border-transparent text-xs top-1 left-2 text-gray-500 pointer-events-none">
					{label}
				</p>
			)}
			<select
				value={value ? formatter(value) : undefined}
				onChange={(e) => {
					const { value } = e.target;
					const option = options.find((o) => formatter(o) === value);
					if (option) onSelectOption(option);
					else onSelectOption(undefined);
				}}
				disabled={disabled}
			>
				<option />
				{!disabled &&
					options.map((option) => {
						const formatted = formatter(option);
						return (
							<option key={formatted} value={formatted}>
								{renderer(option)}
							</option>
						);
					})}
			</select>
		</div>
	);
}
