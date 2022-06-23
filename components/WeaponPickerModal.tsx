import React, { useMemo, useState } from "react";
import { SharpnessBar } from ".";
import { RampageSkills, Weapon, Weapons, WeaponType, WeaponTypes } from "../data";
import formatter from "../formatter";
import { sharpnessHandicraft } from "../utils";
import { Modal, Select } from "./ui";

type Props = {
	show: boolean;
	setShow: (s: boolean) => void;
	weapon: Weapon;
	setWeapon: (w: Weapon) => void;
};

const WeaponPickerModal = ({ show, setShow, weapon, setWeapon }: Props) => {
	const [weaponType, setWeaponType] = useState<WeaponType | undefined>(weapon.type);

	const filteredWeapons = useMemo(
		() => (weaponType ? Weapons.filter((w) => w.type === weaponType) : []),
		[weaponType],
	);

	const otherHead = useMemo(
		() => (weaponType ? formatter.formatWeaponPropertyKey(weaponType) : undefined),
		[weaponType],
	);

	const isRanged = useMemo(() => {
		return ["Bow", "Light Bowgun", "Heavy Bowgun"].some((w) => w === weaponType);
	}, [weaponType]);

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
							<th>Raw</th>
							<th>Affinity</th>
							{!isRanged && <th>Sharpness</th>}
							<th>Element</th>
							<th>Status</th>
							<th>Decos</th>
							{otherHead && <th>{otherHead}</th>}
							<th>Rampage</th>
						</tr>
					</thead>
					<tbody className="text-neutral-600">
						{filteredWeapons.map((w) => {
							const { name, raw, element, status, affinity, sharpness, handicraft, decos } = w;

							const other = formatter.formatWeaponProperties(w);

							const classNames = ["cursor-pointer"];

							if (weapon.name === w.name) classNames.push("bg-gray-300");

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
									<td>{raw}</td>
									<td>{affinity}</td>
									{sharpness && (
										<td>
											<div
												className={
													weapon.name === w.name ? "" : "bg-gray-300 border-4 border-gray-300"
												}
											>
												<SharpnessBar sharpnessArray={sharpness} small />
												<SharpnessBar
													sharpnessArray={sharpnessHandicraft(sharpness, handicraft, 50)}
													small
												/>
											</div>
										</td>
									)}
									<td>{element && formatter.formatElement(element)}</td>
									<td>{status && formatter.formatElement(status)}</td>
									<td>
										{decos.join(", ")}
										{/* {decos.map((v, i) => {
											const key = `${name}-deco-${i}`;
											if (v === 1) return <Image src={deco1} key={key} width={16} height={16} />;
											if (v === 2) return <Image src={deco2} key={key} width={16} height={16} />;
											if (v === 3) return <Image src={deco3} key={key} width={16} height={16} />;
											return v;
										})} */}
									</td>
									{other && <td>{other.value}</td>}
									<td>
										{w.rampageSkills.flat().map((rs) => (
											<p key={rs}>{RampageSkills[rs].name}</p>
										))}
									</td>
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
