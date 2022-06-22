import React, { useMemo, useState } from "react";
import { Weapon, Weapons, WeaponType, WeaponTypes } from "../data";
import formatter from "../formatter";
import { Model } from "../model";
import { Modal, Select } from "./ui";

type Props = {
	show: boolean;
	setShow: (s: boolean) => void;
	setModel: (m: Model) => void;
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
							<th className="hidden md:block">Raw</th>
							<th className="hidden md:block">Affinity</th>
							<th className="hidden md:block">Sharpness</th>
							<th className="hidden md:block">Element</th>
							<th className="hidden md:block">Status</th>
							<th className="hidden md:block">Decos</th>
							{otherHead && <th className="hidden md:block">{otherHead}</th>}
						</tr>
					</thead>
					<tbody className="text-neutral-600 divide-y divide-gray-200">
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
									<td className="hidden md:block">{raw}</td>
									<td className="hidden md:block">{affinity}</td>
									<td className="hidden md:block">{sharpness}</td>
									<td className="hidden md:block">{element && formatter.formatElement(element)}</td>
									<td className="hidden md:block">{status && formatter.formatElement(status)}</td>
									<td className="hidden md:block">
										{decos.join(", ")}
										{/* {decos.map((v, i) => {
											const key = `${name}-deco-${i}`;
											if (v === 1) return <Image src={deco1} key={key} width={16} height={16} />;
											if (v === 2) return <Image src={deco2} key={key} width={16} height={16} />;
											if (v === 3) return <Image src={deco3} key={key} width={16} height={16} />;
											return v;
										})} */}
									</td>
									{other && <td className="hidden md:block">{other.value}</td>}
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
