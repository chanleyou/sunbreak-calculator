import React, { memo } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
	disabled?: boolean;
	isPlaceholder?: boolean;
}

export const TextBox = ({ children, disabled, isPlaceholder, ...props }: Props) => {
	const classNames = [
		"text-element cursor-pointer flex justify-space-between active:bg-gray-100 dark:active:bg-midnight-600",
	];

	if (isPlaceholder) classNames.push("placeholder");
	if (disabled) classNames.push("disabled");

	return (
		<div {...props} className={classNames.join(" ")}>
			<div className="w-full">{children}</div>
		</div>
	);
};

export default memo(TextBox);
