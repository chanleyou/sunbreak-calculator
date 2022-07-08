import React, { useMemo, useState } from "react";
import { Decoration, Decorations, Skills } from "../data";
import { Modal, TextBox, TextInput } from "./ui";

type Props = {
	value?: Decoration;
	setValue: (d?: Decoration) => void;
	level: number;
	disabled?: boolean;
};

const DecoPicker = ({ value, setValue, level, disabled }: Props) => {
	const [show, setShow] = useState(false);
	const [search, setSearch] = useState("");

	const options = useMemo(() => {
		return Decorations.filter((d) => {
			if (d.rank > level) return false;
			if (search === "") return true;

			if (d.name.toLowerCase().includes(search.toLowerCase())) return true;

			const skillName = `${Skills[d.skill[0]].name} ${d.skill[1]}`;
			if (skillName.toLowerCase().includes(search.toLowerCase())) return true;

			return false;
		}).sort((a, b) => {
			if (a.rank < b.rank) return -1;
			if (a.rank > b.rank) return 1;
			return a.name > b.name ? 1 : -1;
		});
	}, [search, level]);

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
						{disabled ? "\u00a0" : value ? value.name : `Decoration [${level}]`}
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
			<Modal show={show} setShow={setShow} head={`Select Decoration ${level}`}>
				<TextInput placeholder="Search..." value={search} onChangeValue={setSearch} />
				<div className="md:overflow-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-gray-200">
								<th>Name</th>
								<th>Skill</th>
							</tr>
						</thead>
						<tbody>
							{options.map((d) => {
								const { name, skill } = d;
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
