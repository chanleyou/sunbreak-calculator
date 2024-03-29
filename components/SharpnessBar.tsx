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
			<div className={`flex ${small ? "" : "p-1 bg-gray-300 dark:p-0 w-fit"}`}>
				{sharpnessArray.map((v, i) => {
					if (v === 0) return;
					return (
						<div
							className={`group relative inline-block h-3`}
							key={`${id}-${i}`}
							style={{ width: `${small ? v / 5 : v / 2}px`, backgroundColor: Sharpnesses[i] }}
						>
							<p className="tooltip">
								{Sharpnesses[i]}: {v}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(SharpnessBar);
