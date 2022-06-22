import { NextPage } from "next";
import React, { useMemo, useState } from "react";
import {
	ArmorSlot,
	Box,
	CharmSlot,
	Select,
	SkillToggle,
	TextDisplay,
	WeaponPickerModal,
	ValueBox,
	BuffBox,
} from "../components";
import {
	Arms,
	Chests,
	Decorations,
	Helms,
	Legs,
	RampageSkills,
	Sharpnesses,
	SkillKey,
	Skills,
	Waists,
} from "../data";
import formatter from "../formatter";
import { Model } from "../model";
import { useForceUpdate } from "../hooks";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

const Main: NextPage<Props> = ({ model, setModel }) => {
	const forceUpdate = useForceUpdate();

	const [showWeaponPicker, setShowWeaponPicker] = useState(model == undefined);

	const isRanged = useMemo(() => {
		return ["Bow", "Light Bowgun", "Heavy Bowgun"].some((w) => w === model?.weapon.type);
	}, [model]);

	const property = formatter.formatWeaponProperties(model.weapon);

	return (
		<>
			<div className="flex flex-col gap-2">
				<Box head="Weapon">
					<div className="my-1">
						<label>Weapon</label>
						<div
							onClick={() => setShowWeaponPicker(true)}
							className="text-element cursor-pointer text-xs"
						>
							{model.weapon.name}
						</div>
					</div>
					<>
						<div className="grid grid-cols-3 gap-2">
							<TextDisplay label="Raw" value={model.weapon.raw} />
							<TextDisplay
								label="Element"
								value={model.weapon.element ? formatter.formatElement(model.weapon.element) : "0"}
							/>
							<TextDisplay
								label="Affinity (%)"
								value={model.weapon.affinity ? model.weapon.affinity : "0"}
							/>
						</div>
						{property && <TextDisplay label={property.key} value={property.value} />}
						{!isRanged && (
							<Select
								label="Sharpness"
								options={[...Sharpnesses]}
								value={model.sharpness}
								onSelectOption={(s) => {
									model.sharpness = s;
									forceUpdate();
								}}
								formatter={(o) => o}
								disabled={isRanged}
							/>
						)}
						{model.weapon.rampageSkills.map((opts, i) => {
							return (
								<Select
									key={`${model.weapon.name}-rs-${i}`}
									options={opts}
									onSelectOption={(v) => {
										model.rampageSkills[i] = v;
										forceUpdate();
									}}
									formatter={(v) => RampageSkills[v].name}
									value={model.rampageSkills[i]}
									label="Rampage Skill"
								/>
							);
						})}
						<div className="grid grid-cols-3 gap-2">
							{model.weapon.decos.map((s, i) => (
								<Select
									key={`weapon-${model.weapon.name}-${i}`}
									label={`Decoration [${s}]`}
									options={Decorations.filter((d) => d.rank <= s)}
									value={model.weaponDecos[i]}
									formatter={(o) => o.name}
									onSelectOption={(o) => {
										model.weaponDecos[i] = o;
										forceUpdate();
									}}
								/>
							))}
						</div>
					</>
				</Box>
				<Box head="Armor">
					<ArmorSlot
						label="Helm"
						options={[...Helms]}
						value={model.helm}
						onSelectOption={(a) => {
							model.helm = a;
							setModel(model.refresh());
						}}
						decos={model.helmDecos}
						onSelectDeco={(d, i) => {
							model.helmDecos[i] = d;
							forceUpdate();
						}}
					/>
					<ArmorSlot
						label="Chest"
						options={[...Chests]}
						value={model.chest}
						onSelectOption={(a) => {
							model.chest = a;
							forceUpdate();
						}}
						decos={model.chestDecos}
						onSelectDeco={(d, i) => {
							model.chestDecos[i] = d;
							forceUpdate();
						}}
					/>
					<ArmorSlot
						label="Arms"
						options={[...Arms]}
						value={model.arms}
						onSelectOption={(a) => {
							model.arms = a;
							forceUpdate();
						}}
						decos={model.armsDecos}
						onSelectDeco={(d, i) => {
							model.armsDecos[i] = d;
							forceUpdate();
						}}
					/>
					<ArmorSlot
						label="Waist"
						options={[...Waists]}
						value={model.waist}
						onSelectOption={(a) => {
							model.waist = a;
							forceUpdate();
						}}
						decos={model.waistDecos}
						onSelectDeco={(d, i) => {
							model.waistDecos[i] = d;
							forceUpdate();
						}}
					/>
					<ArmorSlot
						label="Legs"
						options={[...Legs]}
						value={model.legs}
						onSelectOption={(a) => {
							model.legs = a;
							forceUpdate();
						}}
						decos={model.legsDecos}
						onSelectDeco={(d, i) => {
							model.legsDecos[i] = d;
							forceUpdate();
						}}
					/>
				</Box>
				<Box head="Charm">
					<CharmSlot
						value={model.charmSlotOne}
						onSetValue={(ss) => {
							model.charmSlotOne = ss;
							forceUpdate();
						}}
					/>
					<CharmSlot
						value={model.charmSlotTwo}
						onSetValue={(ss) => {
							model.charmSlotTwo = ss;
							forceUpdate();
						}}
					/>
					<div className="grid grid-cols-3 gap-2">
						{[4, 2, 1].map((s, i) => (
							<Select
								key={`charm-deco-${i}`}
								label={`Decoration [${s}]`}
								options={Decorations.filter((d) => d.rank <= s)}
								value={model.charmDecos[i]}
								formatter={(o) => o.name}
								onSelectOption={(o) => {
									model.charmDecos[i] = o;
									forceUpdate();
								}}
							/>
						))}
					</div>
				</Box>
			</div>
			<div className="flex flex-col gap-2">
				<ValueBox model={model} />
				<BuffBox model={model} setModel={setModel} />
				<Box head="Skills">
					{(Object.entries(model.skills()) as [SkillKey, number][])
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
									active={!model.disabledSkills.includes(skill)}
									canDisable={!("conditional" in Skills[skill])}
									label={Skills[skill].name}
									onChangeValue={(v) => {
										if (!v) model.disabledSkills.push(skill);
										else model.disabledSkills = model.disabledSkills.filter((s) => s !== skill);
										forceUpdate();
									}}
								/>
							);
						})}
				</Box>
			</div>
			<WeaponPickerModal
				weapon={model.weapon}
				setWeapon={(w) => {
					if (model) model.weapon = w;
					else setModel(Model.new(w));
				}}
				show={showWeaponPicker}
				setShow={setShowWeaponPicker}
				setModel={setModel}
			/>
		</>
	);
};

export default Main;
