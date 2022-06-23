import React from "react";

type Props = {
	value?: string | number;
	label?: string;
};

const TextDisplay = ({ label, value }: Props) => {
	return (
		<div className="py-1 mb-1">
			<label>{label}</label>
			<div className="text-element bg-slate-50 border-slate-300">{value}</div>
		</div>
	);
};

export default TextDisplay;
