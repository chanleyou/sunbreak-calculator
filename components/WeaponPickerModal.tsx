import React, { useMemo, useState } from "react";
import { SharpnessBar } from ".";
import { Weapon, Weapons, WeaponType, WeaponTypes } from "../data";
import formatter from "../formatter";
import { sharpnessHandicraft } from "../utils";
import { Checkbox, Modal, Select, TextInput } from ".";

type Props = {
	show: boolean;
	setShow: (s: boolean) => void;
	weapon: Weapon;
	setWeapon: (w: Weapon) => void;
};

const WeaponPickerModal = ({ show, setShow, weapon, setWeapon }: Props) => {
	const [weaponType, setWeaponType] = useState<WeaponType | undefined>(weapon.type);
	const [search, setSearch] = useState("");
	const [onlyShowFullyUpgraded, setOnlyShowFullyUpgraded] = useState(true);

	const filteredWeapons = useMemo(() => {
		if (!weaponType) return [];

		return Weapons.filter((w) => {
			if (w.type !== weaponType) return false;
			if (onlyShowFullyUpgraded && w.rarity < 10) return false;
			if (search === "") return true;
			if (w.name.toLowerCase().includes(search.toLowerCase())) return true;
			if (w.element?.type.toLowerCase().includes(search.toLowerCase())) return true;
			if (w.status?.type.toLowerCase().includes(search.toLowerCase())) return true;

			return false;
		});
	}, [weaponType, search, onlyShowFullyUpgraded]);

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
			<div className="flex gap-2 place-items-center">
				<div className="w-full">
					<TextInput placeholder="Search..." value={search} onChangeValue={setSearch} />
				</div>
				<div className="min-w-max">
					<Checkbox
						label="Fully Upgraded"
						value={onlyShowFullyUpgraded}
						onChangeValue={setOnlyShowFullyUpgraded}
					/>
				</div>
			</div>
			<div className="md:overflow-auto">
				<table className="w-full text-left text-xs">
					<thead>
						<tr>
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
					<tbody>
						{filteredWeapons.map((w, i) => {
							const { name, raw, element, status, affinity, sharpness, handicraft, decos, songs } =
								w;

							const other = formatter.formatWeaponProperties(w);

							const classNames = ["cursor-pointer"];

							if (weapon.name === w.name) classNames.push("bg-gray-300 dark:bg-midnight-700");

							return (
								<tr
									className={classNames.join(" ")}
									key={`${weaponType}-${name}-${i}`}
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
													weapon.name === w.name
														? ""
														: "bg-gray-300 p-1 dark:bg-opacity-0 dark:border-none w-fit"
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
									{songs && (
										<td>
											{songs.map((s) => (
												<p key={s}>{s}</p>
											))}
										</td>
									)}
									<td>
										{w.rampageSlots.map((rs) => (
											<p key={rs}>{w.rampageSlots.join(", ")}</p>
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
