import React, { useMemo, useState } from "react";
import { Model, Weapon, Weapons, WeaponType, WeaponTypes } from "../data";
import formatter from "../formatter";
import { Modal, Select } from "./ui";

type Props = {
	show: boolean;
	setShow: (s: boolean) => void;
	weapon?: Weapon;
	setWeapon: (w: Weapon) => void;
};

const WeaponPickerModal = ({ show, setShow, weapon, setWeapon }: Props) => {
	const [weaponType, setWeaponType] = useState<WeaponType | undefined>(
		weapon?.type || "Switch Axe",
	);

	const filteredWeapons = useMemo(
		() => (weaponType ? Weapons.filter((w) => w.type === weaponType) : []),
		[weaponType],
	);

	const otherHead = useMemo(
		() => (weaponType ? formatter.formatWeaponPropertyKey(weaponType) : undefined),
		[weaponType],
	);

	return (
		<Modal show={show} setShow={setShow} head="Select Weapon">
			<Select
				label="Type"
				options={[...WeaponTypes]}
				value={weaponType}
				onSelectOption={setWeaponType}
				formatter={(o) => o.toString()}
			/>
			<div className="overflow-scroll">
				<table className="w-full text-left text-xs">
					<thead>
						<tr className="border-b border-gray-200">
							<th>Name</th>
							<th className="hidden md:table-cell">Raw</th>
							<th className="hidden md:table-cell">Affinity</th>
							<th className="hidden md:table-cell">Sharpness</th>
							<th className="hidden md:table-cell">Element</th>
							<th className="hidden md:table-cell">Status</th>
							<th className="hidden md:table-cell">Decos</th>
							{otherHead && <th className="hidden md:table-cell">{otherHead}</th>}
						</tr>
					</thead>
					<tbody className="text-neutral-600">
						{filteredWeapons.map((w) => {
							const { name, raw, element, status, affinity, sharpness, decos } = w;

							const other = formatter.formatWeaponProperties(w);

							const classNames = ["cursor-pointer"];

							if (weapon?.name === w.name) classNames.push("font-bold", "bg-gray-200");

							return (
								<tr
									className={classNames.join(" ")}
									key={name}
									onClick={() => {
										setWeapon(w);
										setShow(false);
									}}
								>
									<td>{name}</td>
									<td className="hidden md:table-cell">{raw}</td>
									<td className="hidden md:table-cell">{affinity}</td>
									<td className="hidden md:table-cell">{sharpness}</td>
									<td className="hidden md:table-cell">
										{element && formatter.formatElement(element)}
									</td>
									<td className="hidden md:table-cell">
										{status && formatter.formatElement(status)}
									</td>
									<td className="hidden md:table-cell">
										{decos.join(", ")}
										{/* {decos.map((v, i) => {
											const key = `${name}-deco-${i}`;
											if (v === 1) return <Image src={deco1} key={key} width={16} height={16} />;
											if (v === 2) return <Image src={deco2} key={key} width={16} height={16} />;
											if (v === 3) return <Image src={deco3} key={key} width={16} height={16} />;
											return v;
										})} */}
									</td>
									{other && <td className="hidden md:table-cell">{other.value}</td>}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Modal>
	);
};

export default WeaponPickerModal;
