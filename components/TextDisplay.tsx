import React, { memo } from "react";

type Props = {
	value?: string | number;
	label?: string;
	note?: string;
	small?: boolean;
};

const TextDisplay = memo(({ label, value, note, small }: Props) => {
	let className = "py-1 mb-1";
	if (small) className += " flex items-baseline gap-2";

	return (
		<div className={className}>
			<label>{label}</label>
			<div className="number-input">{value}</div>
			{note && <label className="note">{note}</label>}
		</div>
	);
});

export default TextDisplay;
