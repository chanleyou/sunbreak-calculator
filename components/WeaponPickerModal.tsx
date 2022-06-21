import React, { memo, useMemo, useState } from "react";
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

const WeaponPickerModal = memo(({ show, setShow, setModel, weapon, setWeapon }: Props) => {
	const [importText, setImportText] = useState("");
	const [error, setError] = useState("");

	const tryImport = () => {
		if (!importText) return;
		setError("");
		try {
			const parsed: Model = JSON.parse(importText);
			setModel(Model.from(parsed));
			setShow(false);
		} catch (e) {
			setError((e as Error).toString());
		}
	};

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
		<Modal show={show} setShow={setShow} head="Import from JSON">
			<textarea
				className="bg-gray-100 my-2"
				value={importText}
				onChange={(e) => setImportText(e.target.value)}
				rows={3}
			/>
			<div>
				<button onClick={tryImport} disabled={importText === ""} type="button">
					Import
				</button>
				{error && <p className="text-red-600 italic text-xs">{error}</p>}
			</div>
			<h2>Select Weapon</h2>
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
							<th>Sharpness</th>
							<th>Element</th>
							<th>Status</th>
							<th>Decos</th>
							{otherHead && <th>{otherHead}</th>}
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
									<td>{raw}</td>
									<td>{affinity}</td>
									<td>{sharpness}</td>
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
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Modal>
	);
});

export default WeaponPickerModal;
