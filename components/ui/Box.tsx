import React, { memo } from "react";

type Props = {
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
	compact?: boolean;
};

const Box = ({ head, subhead, children, compact }: Props) => {
	return (
		<div className={`bg w-full max-w-sm ${compact ? "md:w-60" : "md:w-96"} shadow p-4 rounded-xl`}>
			{head && <h3 className="mb-1">{head}</h3>}
			{subhead && <h5 className="mb-1">{subhead}</h5>}
			{children}
		</div>
	);
};

export default memo(Box);
