import React, { useState } from "react";
import { RampageDecorations, RampageSkillKey, RampageSkills } from "../data";
import { Modal, TextBox } from "./ui";

type Props = {
	value?: RampageSkillKey;
	setValue: (d?: RampageSkillKey) => void;
	level: number;
	disabled?: boolean;
};

const RampageDecoPicker = ({ value, setValue, level, disabled }: Props) => {
	const [show, setShow] = useState(false);

	const options = RampageDecorations.filter((d) => d.rank <= level).sort((a, b) => {
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
				<div className="flex space-between">
					<p className="flex-1">
						{disabled ? "\u00a0" : value ? RampageSkills[value].name : `Rampage Slot [${level}]`}
					</p>
					{value && (
						<div
							onClick={(e) => {
								e.stopPropagation();
								setValue(undefined);
							}}
							className="font-bold cursor-pointer flex place-items-center"
						>
							×
						</div>
					)}
				</div>
			</TextBox>
			<Modal show={show} setShow={setShow} head={`Select Rampage Decoration ${level}`}>
				<div className="md:overflow-auto">
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
								if (value === d.skill) classNames.push("bg-gray-200");

								return (
									<tr
										className={classNames.join(" ")}
										key={name}
										onClick={() => {
											setValue(d.skill);
											setShow(false);
										}}
									>
										<td>{rank}</td>
										<td>{name}</td>
										<td>{RampageSkills[skill].name}</td>
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

export default RampageDecoPicker;
