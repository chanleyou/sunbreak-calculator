import React from "react";
import { Box, TextDisplay, SharpnessBar } from ".";
import formatter from "../formatter";
import { Model } from "../model";

type Props = {
	model: Model;
};

const Row = ({ label, value }: { label: string; value: React.ReactNode | React.ReactNode[] }) => (
	<div className="flex border-b last:border-0 border-box py-1 place-items-center">
		<div className="w-full">{label}</div>
		<div className="min-w-fit">{value}</div>
	</div>
);

export const ValueBox = ({ model }: Props) => {
	const property = formatter.formatWeaponProperties(model.weapon);

	return (
		<Box head="Values">
			<div className="text-xs">
				<Row label="Attack" value={model.effectiveRaw} />
				<Row label="Effective Raw" value={model.efr} />
				{model.weapon.element && (
					<>
						<Row label="Element" value={`${model.weapon.element.type} ${model.effectiveEle}`} />
						<Row label="Effective Element" value={model.efe} />
					</>
				)}
				{model.weapon.status && (
					<Row label="Status" value={`${model.weapon.status.type} ${model.effectiveStatus}`} />
				)}
				<Row label="Affinity" value={model.effectiveAffinity} />
				{property && <Row label={property.key} value={property.value} />}
				{model.sharpnessArray && (
					<Row label="Sharpness" value={<SharpnessBar sharpnessArray={model.sharpnessArray} />} />
				)}
			</div>
		</Box>
	);
};

export default ValueBox;
