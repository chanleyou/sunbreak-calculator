import React, { memo } from "react";

type Props = {
	show?: boolean;
	setShow?: (show: boolean) => void;
	head?: string;
	subhead?: string;
	children?: React.ReactNode | React.ReactNode[];
};

const Modal = ({ show, setShow, head, subhead, children }: Props) => {
	const classNames = [
		"w-screen",
		"h-screen",
		"bg-neutral-900",
		"fixed",
		"top-0",
		"left-0",
		"z-50",
		"flex",
		"place-content-center",
		"place-items-center",
		"bg-opacity-50",
		"p-2",
	];
	if (!show) classNames.push("hidden");

	return (
		<div
			className={classNames.join(" ")}
			onClick={() => {
				if (setShow) setShow(false);
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white overflow-auto md:overflow-hidden rounded-sm drop-shadow p-4 w-full h-full md:w-240 h-5/6 flex flex-col"
			>
				{head && <h3 className="mb-2">{head}</h3>}
				{subhead && <h5 className="text-gray-500 mb-2">{subhead}</h5>}
				{children}
			</div>
		</div>
	);
};

export default memo(Modal);
