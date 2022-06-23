import React, { useState } from "react";
import { Decoration, Decorations, Skills } from "../data";
import { Modal, TextBox } from "./ui";

type Props = {
	value?: Decoration;
	setValue: (d?: Decoration) => void;
	level: number;
	disabled?: boolean;
};

const DecoPicker = ({ value, setValue, level, disabled }: Props) => {
	const [show, setShow] = useState(false);

	const options = Decorations.filter((d) => d.rank <= level).sort((a, b) => {
		if (a.rank < b.rank) return -1;
		if (a.rank > b.rank) return 1;
		return a.name > b.name ? 1 : -1;
	});

	return (
		<>
			<TextBox
				onClick={() => {
					if (!disabled) setShow(true);
				}}
				isPlaceholder={!value}
				disabled={disabled}
			>
				{disabled ? "\u00a0" : value ? value.name : `Decoration [${level}]`}
			</TextBox>
			<Modal show={show} setShow={setShow} head={`Select Decoration ${level}`}>
				<div className="overflow-scroll">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-gray-200">
								<th>Rank</th>
								<th>Name</th>
								<th>Skill</th>
							</tr>
						</thead>
						<tbody className="text-neutral-600">
							{options.map((d) => {
								const { name, rank, skill } = d;
								const classNames = ["cursor-pointer"];
								if (value?.name === d.name) classNames.push("bg-gray-200");

								return (
									<tr
										className={classNames.join(" ")}
										key={name}
										onClick={() => {
											setValue(d);
											setShow(false);
										}}
									>
										<td>{rank}</td>
										<td>{name}</td>
										<td>
											{Skills[skill[0]].name} {skill[1]}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Modal>
		</>
	);
};

export default DecoPicker;
