import React from "react";
import { Box, TextDisplay, SharpnessBar } from ".";
import formatter from "../formatter";
import { Model } from "../model";

type Props = {
	model: Model;
};

export const ValueBox = ({ model }: Props) => {
	const property = formatter.formatWeaponProperties(model.weapon);

	return (
		<Box head="Values">
			<div className="grid grid-cols-3 gap-x-2">
				<TextDisplay label="Raw" value={model.effectiveRaw} />
				<TextDisplay
					label="Element"
					value={
						model.weapon.element?.type ? `${model.weapon.element.type} ${model.effectiveEle}` : 0
					}
				/>
				<TextDisplay label="Affinity (%)" value={model.effectiveAffinity} />
				{property && <TextDisplay label={property.key} value={property.value} />}
			</div>
			{model.sharpnessArray && <SharpnessBar sharpnessArray={model.sharpnessArray} />}
		</Box>
	);
};

export default ValueBox;
