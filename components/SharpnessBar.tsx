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
			<div
				className={`flex ${small ? "" : "bg-gray-300 border-4 border-r-8 border-gray-300 w-fit"}`}
			>
				{sharpnessArray.map((v, i) => {
					if (v === 0) return;
					return (
						<div
							className={`inline-block ${small ? "h-3" : "h-4"}`}
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
