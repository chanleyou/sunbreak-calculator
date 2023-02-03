import React, { useState } from "react";
import formatter from "../formatter";
import { WeaponAugmentations, WeaponAugmentationKey, WeaponAugmentationClass } from "../data";
import { AvaialableWeaponAugmentations } from "../data/weaponaugmentation";
import { Modal, TextBox } from "./ui";

type Props = {
	value: (WeaponAugmentationKey | undefined)[];
	setValue: (d: (WeaponAugmentationKey | undefined)[]) => void;
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
				isPlaceholder={!value}
				disabled={disabled}
			>
				<div className="flex space-between">
					<p className="flex-1">
						{disabled ? "\u00a0" : "Weapon augmentations"}
					</p>
					{value && (
						<div
							onClick={(e) => {
								e.stopPropagation();
								setValue([]);
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
							{options.map((d) => {
								const { name, slots } = WeaponAugmentations[d];
								const classNames = ["cursor-pointer"];
								if (value.includes(d)) classNames.push("selected-item");

								return (
									<tr
										className={classNames.join(" ")}
										key={name}
										onClick={() => {
											value = value.filter(_ => WeaponAugmentations[d].class != neededClass);
											value.push(d);
											setValue(value);
											setShow(false);
										}}
									>
										<td>{name}</td>
										<td>{formatter.formatWeaponAugmentation(WeaponAugmentations[d])}</td>
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
