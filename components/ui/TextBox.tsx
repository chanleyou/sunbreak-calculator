import React, { memo } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
	disabled?: boolean;
	isPlaceholder?: boolean;
}

export const TextBox = ({ children, disabled, isPlaceholder, ...props }: Props) => {
	const classNames = ["text-element cursor-pointer flex justify-space-between active:bg-gray-100"];

	if (isPlaceholder) classNames.push("text-gray-400");
	if (disabled) classNames.push("bg-gray-100 border-gray-100");

	return (
		<div {...props} className={classNames.join(" ")}>
			<div className="w-full">{children}</div>
		</div>
	);
};

export default memo(TextBox);
