import React, { memo, useId } from "react";
import { Sharpnesses, WeaponSharpness } from "../data";

type Props = {
	sharpnessArray: WeaponSharpness;
};

const SharpnessBar = ({ sharpnessArray }: Props) => {
	const id = useId();
	return (
		<div className="py-1 mb-1">
			<label>Sharpness</label>
			<div className="flex">
				{sharpnessArray.map((v, i) => {
					return (
						<div
							className={`border h-4 border-gray-300 ${
								i == 0 ? "border-r-0" : i == sharpnessArray.length - 1 ? "border-l-0" : "border-x-0"
							}`}
							key={`${id}-${i}`}
							style={{ width: `${v}px`, backgroundColor: Sharpnesses[i] }}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default memo(SharpnessBar);
