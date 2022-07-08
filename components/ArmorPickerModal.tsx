import React, { useMemo, useState } from "react";
import { Armor, Skills } from "../data";
import { Modal, TextInput } from "./ui";

type Props = {
	value?: Armor;
	setValue: (a?: Armor) => void;
	options: Armor[];
	show: boolean;
	setShow: (s: boolean) => void;
};

const ArmorPickerModal = ({ value, setValue, options, show, setShow }: Props) => {
	const [search, setSearch] = useState("");
	// const [onlyShowMasterRank, setOnlyShowMasterRank] = useState(true);

	const filteredOptions = useMemo(() => {
		if (search === "") return options;
		return options.filter((o) => {
			if (o.name.toLowerCase().includes(search.toLowerCase())) return true;

			if (
				o.skills
					.map(([s, v]) => `${Skills[s].name} ${v}`)
					.join(" ")
					.toLowerCase()
					.includes(search.toLowerCase())
			)
				return true;
			return false;
		});
	}, [options, search]);

	return (
		<Modal show={show} setShow={setShow} head="Select Armor">
			<TextInput placeholder="Search..." value={search} onChangeValue={setSearch} />
			<div className="md:overflow-auto">
				<table className="w-full text-left">
					<thead>
						<tr className="border-b border-gray-200">
							{/* <th>Rarity</th> */}
							<th>Name</th>
							<th>Skills</th>
							<th>Slots</th>
						</tr>
					</thead>
					<tbody>
						{filteredOptions.map((a, i) => {
							const { name, skills, slots } = a;

							const classNames = ["cursor-pointer"];

							if (value?.name === a.name) classNames.push("bg-gray-200");

							return (
								<tr
									className={classNames.join(" ")}
									key={`${name}-${i}`}
									onClick={() => {
										setValue(a);
										setShow(false);
									}}
								>
									{/* <td>{rarity}</td> */}
									<td>{name}</td>
									<td>
										{skills.map(([s, v]) => (
											<p key={s}>
												{Skills[s].name} {v}
											</p>
										))}
									</td>
									<td>{slots.join(", ")}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Modal>
	);
};

export default ArmorPickerModal;
