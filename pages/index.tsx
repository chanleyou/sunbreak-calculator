import produce from "immer";
import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import {
	ArmorSlot,
	Column,
	Box,
	Select,
	SkillToggle,
	TextDisplay,
	WeaponPickerModal,
	ValueBox,
	BuffBox,
	CharmSlot,
} from "../components";
import {
	Arms,
	Chests,
	Decorations,
	Helms,
	Legs,
	RampageSkills,
	SkillKey,
	Skills,
	Waists,
} from "../data";
import formatter from "../formatter";
import { Model } from "../model";

function prod<T>(setter: Dispatch<SetStateAction<T>>) {
	return (fn: (t: T) => void) => setter((n) => produce(n, fn));
}

type Props = {
	model: Model;
};

const Main: NextPage<Props> = ({ model }) => {
	const {
		weapon,
		setWeapon,
		rampageSkills,
		setRampageSkills,
		helm,
		setHelm,
		chest,
		setChest,
		arms,
		setArms,
		waist,
		setWaist,
		legs,
		weaponDecos,
		setWeaponDecos,
		setLegs,
		helmDecos,
		setHelmDecos,
		chestDecos,
		setChestDecos,
		armsDecos,
		setArmsDecos,
		waistDecos,
		setWaistDecos,
		legsDecos,
		setLegsDecos,
		charmDecos,
		setCharmDecos,
		charmSkillOne,
		setCharmSkillOne,
		charmSkillTwo,
		setCharmSkillTwo,
		skills,
		disabledSkills,
		setDisabledSkills,
	} = model;

	const [showWeaponPicker, setShowWeaponPicker] = useState(false);

	const isRanged = useMemo(() => {
		return ["Bow", "Light Bowgun", "Heavy Bowgun"].some((w) => w === weapon.type);
	}, [weapon]);

	const property = formatter.formatWeaponProperties(weapon);

	return (
		<>
			<Column>
				<Box head="Weapon">
					<div className="my-1">
						<label>Weapon</label>
						<div
							onClick={() => setShowWeaponPicker(true)}
							className="text-element cursor-pointer text-xs"
						>
							{weapon.name}
						</div>
						<WeaponPickerModal
							weapon={weapon}
							setWeapon={setWeapon}
							show={showWeaponPicker}
							setShow={setShowWeaponPicker}
						/>
					</div>
					<div className="grid grid-cols-3 gap-2">
						<TextDisplay label="Raw" value={weapon.raw} />
						<TextDisplay
							label="Element"
							value={weapon.element ? formatter.formatElement(weapon.element) : "0"}
						/>
						<TextDisplay label="Affinity (%)" value={weapon.affinity ? weapon.affinity : "0"} />
					</div>
					{property && <TextDisplay label={property.key} value={property.value} />}
					{weapon.rampageSkills.map((opts, i) => {
						return (
							<Select
								key={`${weapon.name}-rs-${i}`}
								options={opts}
								onSelectOption={(v) =>
									prod(setRampageSkills)((rs) => {
										rs[i] = v;
									})
								}
								formatter={(v) => RampageSkills[v].name}
								value={rampageSkills[i]}
								label="Rampage Skill"
							/>
						);
					})}
					<div className="grid grid-cols-3 gap-2">
						{weapon.decos.map((s, i) => (
							<Select
								key={`weapon-${weapon.name}-${i}`}
								label={`Decoration [${s}]`}
								options={Decorations.filter((d) => d.rank <= s)}
								value={weaponDecos[i]}
								formatter={(o) => o.name}
								onSelectOption={(d) =>
									prod(setWeaponDecos)((ds) => {
										ds[i] = d;
									})
								}
							/>
						))}
					</div>
				</Box>
				<Box head="Armor">
					<ArmorSlot
						label="Helm"
						options={[...Helms]}
						value={helm}
						onSelectOption={setHelm}
						decos={helmDecos}
						onSelectDeco={(d, i) =>
							prod(setHelmDecos)((ds) => {
								ds[i] = d;
							})
						}
					/>
					<ArmorSlot
						label="Chest"
						options={[...Chests]}
						value={chest}
						onSelectOption={setChest}
						decos={chestDecos}
						onSelectDeco={(d, i) =>
							prod(setChestDecos)((ds) => {
								ds[i] = d;
							})
						}
					/>
					<ArmorSlot
						label="Arms"
						options={[...Arms]}
						value={arms}
						onSelectOption={setArms}
						decos={armsDecos}
						onSelectDeco={(d, i) =>
							prod(setArmsDecos)((ds) => {
								ds[i] = d;
							})
						}
					/>
					<ArmorSlot
						label="Waist"
						options={[...Waists]}
						value={waist}
						onSelectOption={setWaist}
						decos={waistDecos}
						onSelectDeco={(d, i) =>
							prod(setWaistDecos)((ds) => {
								ds[i] = d;
							})
						}
					/>
					<ArmorSlot
						label="Legs"
						options={[...Legs]}
						value={legs}
						onSelectOption={setLegs}
						decos={legsDecos}
						onSelectDeco={(d, i) =>
							prod(setLegsDecos)((ds) => {
								ds[i] = d;
							})
						}
					/>
				</Box>
				<Box head="Charm">
					<CharmSlot value={charmSkillOne} onSetValue={setCharmSkillOne} />
					<CharmSlot value={charmSkillTwo} onSetValue={setCharmSkillTwo} />
					<div className="grid grid-cols-3 gap-2">
						{[4, 2, 1].map((s, i) => (
							<Select
								key={`charm-deco-${i}`}
								label={`Decoration [${s}]`}
								options={Decorations.filter((d) => d.rank <= s)}
								value={charmDecos[i]}
								formatter={(o) => o.name}
								onSelectOption={(o) =>
									prod(setCharmDecos)((ds) => {
										ds[i] = o;
									})
								}
							/>
						))}
					</div>
				</Box>
			</Column>
			<Column>
				<ValueBox model={model} />
				<BuffBox model={model} />
				<Box head="Skills">
					{(Object.entries(skills) as [SkillKey, number][])
						.sort(([aS, aL], [bS, bL]) => {
							if (aL < bL) return 1;
							if (aL > bL) return -1;
							return aS > bS ? 1 : -1;
						})
						.map(([skill, value]) => {
							if (value === 0) return;
							return (
								<SkillToggle
									key={skill}
									value={value}
									maxRank={Skills[skill].ranks.length}
									active={!disabledSkills.includes(skill)}
									canDisable={!("conditional" in Skills[skill])}
									label={Skills[skill].name}
									onChangeValue={(v) => {
										if (!v) disabledSkills.push(skill);
										else setDisabledSkills(disabledSkills.filter((s) => s !== skill));
									}}
								/>
							);
						})}
				</Box>
			</Column>
		</>
	);
};

export default Main;
