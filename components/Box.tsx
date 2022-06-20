import React from "react";

type Props = {
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
	stretch?: boolean;
};

export default function Box({ head, subhead, children, stretch }: Props) {
	return (
		<div className={`bg-white rounded-sm shadow p-4 ${stretch ? "w-full" : "w-120"}`}>
			{head && <h2>{head}</h2>}
			{subhead && <h5 className="text-gray-500 mb-2">{subhead}</h5>}
			{children}
		</div>
	);
}
