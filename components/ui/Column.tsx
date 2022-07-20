import React from "react";

type Props = React.HTMLProps<HTMLDivElement> & { last?: boolean };

export const Column = ({ children, last }: Props) => {
	return (
		<div
			className={`flex flex-col gap-2 items-center md:items-center md:only:items-center md:first:items-end md:last:items-start ${
				last ? "md:order-last" : ""
			}`}
		>
			{children}
		</div>
	);
};

export default Column;
