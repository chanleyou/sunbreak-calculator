import React, { memo } from "react";

export const TextBox = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
	return (
		<div
			{...props}
			className="text-element cursor-pointer flex justify-space-between active:bg-gray-100"
		>
			<div className="w-full">{children}</div>
		</div>
	);
};

export default memo(TextBox);
