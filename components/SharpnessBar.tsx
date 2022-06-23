import React, { memo, useId } from "react";
import { Sharpnesses, WeaponSharpness } from "../data";

type Props = {
	sharpnessArray: WeaponSharpness;
	small?: boolean;
};

const SharpnessBar = ({ sharpnessArray, small }: Props) => {
	const id = useId();
	return (
		<div className={small ? "" : "py-1 mb-1"}>
			{!small && <label>Sharpness</label>}
			<div className="flex">
				{sharpnessArray.map((v, i) => {
					return (
						<div
							className={`border ${small ? "h-3" : "h-4"} border-gray-300 ${
								i == 0 ? "border-r-0" : i == sharpnessArray.length - 1 ? "border-l-0" : "border-x-0"
							}`}
							key={`${id}-${i}`}
							style={{ width: `${small ? v / 5 : v / 2}px`, backgroundColor: Sharpnesses[i] }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default memo(SharpnessBar);
