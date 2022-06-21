import React from "react";
import { Box, AttackRow } from ".";
import { useForceUpdate } from "../hooks";
import { Model } from "../model";
import { roundToDigits } from "../utils";

type Props = {
	model: Model;
};

export const ComboBox = ({ model }: Props) => {
	const forceUpdate = useForceUpdate();

	return (
		<Box head="Combo">
			<table className="table-auto w-full text-left text-xs">
				<thead>
					<tr className="border-b border-gray-200">
						<th>Attack</th>
						<th>Avg</th>
					</tr>
				</thead>
				<tbody className="text-xs text-gray-600 divide-y divide-gray-200">
					{model.combo.map((a, i) => (
						<AttackRow short key={a.name + `-${i}`} attack={a} model={model} />
					))}
					{model.combo.length > 0 && (
						<tr className="font-bold">
							<td></td>
							<td>{roundToDigits(model.combo.reduce((acc, a) => acc + model.average(a), 0))}</td>
						</tr>
					)}
				</tbody>
			</table>
			<button
				onClick={() => {
					model.combo = [];
					forceUpdate();
				}}
				disabled={model.combo.length === 0}
				className="mt-2"
			>
				Reset
			</button>
		</Box>
	);
};

export default ComboBox;
