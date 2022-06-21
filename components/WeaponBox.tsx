// import Image from "next/image";
// import deco1 from "../public/assets/deco1.png";
// import deco2 from "../public/assets/deco2.png";
// import deco3 from "../public/assets/deco3.png";
import React, { Dispatch, memo, SetStateAction, useEffect, useMemo, useState } from "react";
import { Box, Modal, Select, TextDisplay } from ".";
import {
	Decoration,
	Decorations,
	RampageSkillKey,
	RampageSkills,
	Sharpness,
	Sharpnesses,
	Weapon,
	Weapons,
	WeaponType,
	WeaponTypes,
} from "../data";
import formatter from "../formatter";

type Props = {
	weapon?: Weapon;
	setWeapon: (w: Weapon) => void;
	sharpness?: Sharpness;
	setSharpness: (s: Sharpness | undefined) => void;
	isRanged: boolean;
	decos: (Decoration | undefined)[];
	setDecos: Dispatch<SetStateAction<(Decoration | undefined)[]>>;
	rampageSkills: (RampageSkillKey | undefined)[];
	setRampageSkills: Dispatch<SetStateAction<(RampageSkillKey | undefined)[]>>;
};

const WeaponBox = memo(
	({
		weapon,
		setWeapon,
		sharpness,
		setSharpness,
		isRanged,
		decos,
		setDecos,
		rampageSkills,
		setRampageSkills,
	}: Props) => {
		const [showModal, setShowModal] = useState(true);

		const [weaponType, setWeaponType] = useState<WeaponType | undefined>(
			weapon?.type || "Switch Axe",
		);

		useEffect(() => setSharpness(weapon?.sharpness), [weapon]);

		const filteredWeapons = useMemo(
			() => (weaponType ? Weapons.filter((w) => w.type === weaponType) : []),
			[weaponType],
		);

		const otherHead = useMemo(
			() => (weaponType ? formatter.formatWeaponPropertyKey(weaponType) : undefined),
			[weaponType],
		);

		const weaponProperties = useMemo(() => {
			if (weapon) return formatter.formatWeaponProperties(weapon);
		}, [weapon]);

		return (
			<>
				<Box head="Weapon">
					<div className="py-1 mb-1">
						<label>Weapon</label>
						<div onClick={() => setShowModal(true)} className="text-element text-xs">
							{weapon ? weapon.name : "Select a weapon..."}
						</div>
					</div>
					{weapon && (
						<>
							<div className="grid grid-cols-3 gap-x-2">
								<TextDisplay label="Raw" value={weapon?.raw ?? 0} />
								<TextDisplay
									label="Element"
									value={weapon.element ? formatter.formatElement(weapon.element) : "0"}
								/>
								<TextDisplay
									label="Status"
									value={weapon.status ? formatter.formatElement(weapon.status) : "0"}
								/>
							</div>
							{weaponProperties && (
								<TextDisplay label={weaponProperties.key} value={weaponProperties.value} />
							)}
							{!isRanged && (
								<Select
									label="Sharpness"
									options={[...Sharpnesses]}
									value={sharpness}
									onSelectOption={setSharpness}
									formatter={(o) => o}
									disabled={!weapon || isRanged}
								/>
							)}
							<div className="grid grid-cols-3 gap-2">
								{weapon.decos.map((s, i) => (
									<Select
										key={"weapon-" + i}
										label={`Decoration [${s}]`}
										options={Decorations.filter((d) => d.rank <= s)}
										value={decos[i]}
										formatter={(o) => o.name}
										onSelectOption={(o) =>
											setDecos((current) => {
												const newDecos = [...current];
												newDecos[i] = o;
												return newDecos;
											})
										}
									/>
								))}
							</div>
							{weapon.rampageSkills.map((opts, i) => (
								<Select
									key={`rampage-${i}`}
									options={opts}
									label={
										weapon.rampageSkills.length > 1 ? `Rampage Skill [${i + 1}]` : "Rampage Skill"
									}
									formatter={(v) => RampageSkills[v].name}
									onSelectOption={(o) => {
										setRampageSkills((current) => {
											const newRampageSkills = [...current];
											newRampageSkills[i] = o;
											return newRampageSkills;
										});
									}}
									value={rampageSkills[i]}
								/>
							))}
						</>
					)}
				</Box>
				<Modal show={showModal} setShow={setShowModal} head="Weapons">
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

									return (
										<tr
											className="cursor-pointer"
											key={name}
											onClick={() => {
												setWeapon(w);
												setShowModal(false);
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
			</>
		);
	},
);

export default WeaponBox;
