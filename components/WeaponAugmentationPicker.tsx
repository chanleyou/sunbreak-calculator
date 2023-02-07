import React, { useState } from "react";
import formatter from "../formatter";
import { WeaponAugmentations, WeaponAugmentationKey, WeaponAugmentationClass } from "../data";
import { AvaialableWeaponAugmentations } from "../data/weaponaugmentation";
import { Modal, TextBox } from "./ui";

type Props = {
	value: (WeaponAugmentationKey)[];
	setValue: (d: WeaponAugmentationKey[]) => void;
	neededClass: WeaponAugmentationClass;
	slotsAvailable: number;
	disabled?: boolean;
};

const WeaponAugmentationPicker = ({ value, setValue, neededClass, slotsAvailable, disabled }: Props) => {
	const [show, setShow] = useState(false);

	const options = AvaialableWeaponAugmentations.filter((d) => WeaponAugmentations[d].class === neededClass && WeaponAugmentations[d].slots <= slotsAvailable).sort((a, b) => {
		return WeaponAugmentations[a].name > WeaponAugmentations[b].name ? 1 : -1;
	});

	return (
		<>
			<TextBox
				onClick={() => {
					if (!disabled) setShow(true);
				}}
				isPlaceholder={!value.some(augmKey => WeaponAugmentations[augmKey].class === neededClass)}
				disabled={disabled}
			>
				<div className="flex space-between">
					<p className="flex-1">
						{disabled ? "\u00a0" :
							value.some(augmKey => WeaponAugmentations[augmKey].class === neededClass) ?
								`${value.find(augmKey => WeaponAugmentations[augmKey].class === neededClass)}` :
								`Weapon augmentations (${neededClass}) [Available slots: ${slotsAvailable}]`}
					</p>
					{value && (
						<div
							onClick={(e) => {
								value = value.filter(augmKey => WeaponAugmentations[augmKey].class !== neededClass);
								e.stopPropagation();
								setValue(value);
							}}
							className="font-bold cursor-pointer flex place-items-center"
						>
							×
						</div>
					)}
				</div>
			</TextBox>
			<Modal show={show} setShow={setShow} head={`Select Weapon Augmentation`}>
				<div className="md:overflow-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-gray-200">
								<th>Name</th>
								<th>Buff</th>
								<th>Slots</th>
							</tr>
						</thead>
						<tbody>
							{options.map((currentAugm) => {
								const { name, slots } = WeaponAugmentations[currentAugm];
								const classNames = ["cursor-pointer"];
								if (value.includes(currentAugm)) {
									classNames.push("selected-item");
								}

								return (
									<tr
										className={classNames.join(" ")}
										key={name}
										onClick={() => {
											value = value.filter(augm => WeaponAugmentations[augm].class !== neededClass);
											value.push(currentAugm);
											setValue(value);
											setShow(false);
										}}
									>
										<td>{name}</td>
										<td>{formatter.formatWeaponAugmentation(WeaponAugmentations[currentAugm])}</td>
										<td>{slots}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Modal>
		</>
	);
};

export default WeaponAugmentationPicker;
