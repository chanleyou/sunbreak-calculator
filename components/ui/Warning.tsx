import React, { memo } from "react";

type Props = {
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
};

const Box = ({ head, subhead, children }: Props) => {
	return (
		<div
			className={`bg-amber-100 border border-amber-400 w-full rounded max-w-md md:max-w-lg lg:max-w-5/6 p-4 text-amber-600`}
		>
			{head && <h3 className="mb-1">{head}</h3>}
			{subhead && <h5 className="text-gray-500 mb-1">{subhead}</h5>}
			{children}
		</div>
	);
};

export default memo(Box);
