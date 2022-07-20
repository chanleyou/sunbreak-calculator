import React from "react";

export const Column = ({ children }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<div className="flex flex-col gap-2 items-center md:items-center md:only:items-center md:first:items-end md:last:items-start">
			{children}
		</div>
	);
};

export default Column;
