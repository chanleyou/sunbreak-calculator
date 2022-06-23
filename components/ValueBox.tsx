import React from "react";
import { Box, TextDisplay } from ".";
import { Model } from "../model";
import SharpnessBar from "./SharpnessBar";

type Props = {
	model: Model;
};

export const ValueBox = ({ model }: Props) => {
	return (
		<Box head="Values">
			<div className="grid grid-cols-3 gap-2">
				<TextDisplay label="Raw" value={model.effectiveRaw} />
				<TextDisplay
					label="Element"
					value={
						model.weapon.element?.type ? `${model.weapon.element.type} ${model.effectiveEle}` : 0
					}
				/>
				<TextDisplay label="Affinity (%)" value={model.effectiveAffinity} />
			</div>
			{model.sharpnessArray && <SharpnessBar sharpnessArray={model.sharpnessArray} />}
		</Box>
	);
};

export default ValueBox;
