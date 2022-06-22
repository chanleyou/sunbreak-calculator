import React, { memo } from "react";

type Props = {
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
	stretch?: boolean;
};

const Box = memo(({ head, subhead, children, stretch }: Props) => {
	return (
		<div
			className={`bg-white rounded-sm flex-none h-auto shadow p-4 ${stretch ? "w-180" : "w-120"}`}
		>
			{head && <h2>{head}</h2>}
			{subhead && <h5 className="text-gray-500 mb-1 font-normal">{subhead}</h5>}
			{children}
		</div>
	);
});

export default Box;
