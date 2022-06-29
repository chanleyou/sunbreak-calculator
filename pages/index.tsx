import produce from "immer";
import { NextPage } from "next";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
	ArmorSlot,
	Column,
	Box,
	Select,
	SkillToggle,
	WeaponPickerModal,
	ValueBox,
	CharmSlot,
	DecoPicker,
	BuffBox,
	TextBox,
} from "../components";
import { RampageSkills, SkillKey, Skills } from "../data";
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

	return (
		<>
			<Column>
				<Box head="Gear">
					<div className="py-1">
						<label>Weapon</label>
						<TextBox
							onClick={() => setShowWeaponPicker(true)}
							className="text-element cursor-pointer"
						>
							{weapon.name}
						</TextBox>
						<WeaponPickerModal
							weapon={weapon}
							setWeapon={setWeapon}
							show={showWeaponPicker}
							setShow={setShowWeaponPicker}
						/>
						<div className={weapon.rampageSkills.length > 1 ? "grid grid-cols-3 gap-2" : ""}>
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
						</div>
						{weapon.decos.length > 0 && (
							<div className="grid grid-cols-3 gap-2">
								{weapon.decos.map((s, i) => (
									<DecoPicker
										key={`${weapon.name}-deco-${i}`}
										value={weaponDecos[i]}
										setValue={(d) =>
											prod(setWeaponDecos)((ds) => {
												ds[i] = d;
											})
										}
										level={s}
									/>
								))}
							</div>
						)}
					</div>
					<ArmorSlot
						type="Helm"
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
						type="Chest"
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
						type="Arms"
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
						type="Waist"
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
						type="Legs"
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
						{[4, 2, 1].map((l, i) => (
							<DecoPicker
								key={`$charm-deco-${l}`}
								value={charmDecos[l]}
								setValue={(d) =>
									prod(setCharmDecos)((ds) => {
										ds[l] = d;
									})
								}
								level={l}
							/>
						))}
					</div>
				</Box>
			</Column>
			<Column>
				<ValueBox model={model} />
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
										if (!v) setDisabledSkills([...disabledSkills, skill]);
										else setDisabledSkills(disabledSkills.filter((s) => s !== skill));
									}}
								/>
							);
						})}
				</Box>
				{/* <BuffBox model={model} /> */}
			</Column>
		</>
	);
};

export default Main;
