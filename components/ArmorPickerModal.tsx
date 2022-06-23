import React from "react";
import { Armor, Skills } from "../data";
import { Modal } from "./ui";

type Props = {
	value?: Armor;
	setValue: (a?: Armor) => void;
	options: Armor[];
	show: boolean;
	setShow: (s: boolean) => void;
};

const ArmorPickerModal = ({ value, setValue, options, show, setShow }: Props) => {
	return (
		<Modal show={show} setShow={setShow} head="Select Armor">
			<div className="overflow-scroll">
				<table className="w-full text-left">
					<thead>
						<tr className="border-b border-gray-200">
							<th>Name</th>
							<th>Skills</th>
							<th>Decos</th>
						</tr>
					</thead>
					<tbody className="text-neutral-600">
						{options.map((a) => {
							const { name, skills, decorations } = a;

							const classNames = ["cursor-pointer"];

							if (value?.name === a.name) classNames.push("bg-gray-200");

							return (
								<tr
									className={classNames.join(" ")}
									key={name}
									onClick={() => {
										setValue(a);
										setShow(false);
									}}
								>
									<td>{name}</td>
									<td>
										{skills.map(([s, v]) => (
											<p key={s}>
												{Skills[s].name} {v}
											</p>
										))}
									</td>
									<td>{decorations.join(", ")}</td>
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
