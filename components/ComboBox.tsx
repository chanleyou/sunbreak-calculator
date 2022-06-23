import React from "react";
import { Box } from ".";
import { useForceUpdate } from "../hooks";
import { Model } from "../hooks";
import { roundToDigits } from "../utils";

type Props = {
	model: Model;
};

export const ComboBox = ({ model }: Props) => {
	const forceUpdate = useForceUpdate();

	return (
		<Box head="Combo">
			{model.combo.length > 0 && (
				<table className="table-auto w-full text-left text-xs">
					<thead>
						<tr className="border-b border-gray-200">
							<th className="w-full">Attack</th>
							<th>Avg</th>
						</tr>
					</thead>
					<tbody className="text-xs text-gray-600">
						{model.combo.map((a, i) => {
							const average = roundToDigits(model.attackAverage(a));
							return (
								<tr
									onClick={() => {
										model.combo.splice(i, 1);
										forceUpdate();
									}}
									key={`${a.name}-${i}`}
								>
									<td>{a.name}</td>
									<td>{average}</td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr className="font-bold">
							<td>Total:</td>
							<td>
								{roundToDigits(model.combo.reduce((acc, a) => acc + model.attackAverage(a), 0))}
							</td>
						</tr>
					</tfoot>
				</table>
			)}
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
