import React from "react";

export const Column = ({ children }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<div className="flex flex-col gap-2 items-center w-full md:first:items-end md:last:items-start md:only:items-center">
			{children}
		</div>
	);
};

export default Column;
