import React, { memo } from "react";

type Props = {
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
};

const Box = ({ head, subhead, children }: Props) => {
	return (
		<div className={`bg-white rounded-sm w-full max-w-md md:max-w-lg lg:max-w-5/6 shadow p-4`}>
			{head && <h2>{head}</h2>}
			{subhead && <h5 className="text-gray-500 mb-1 font-normal">{subhead}</h5>}
			{children}
		</div>
	);
};

export default memo(Box);
