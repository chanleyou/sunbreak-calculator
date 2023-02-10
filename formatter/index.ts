import { Weapon, WeaponElement, WeaponStatus, WeaponType } from "../data/weapons";
import { WeaponAugmentationKey, WeaponAugmentations, WeaponAugmentationType } from "../data";

export const formatElement = (e: WeaponElement | WeaponStatus) => `${e.type} ${e.value}`;

export const formatWeaponAugmentation = (augm: WeaponAugmentationType, weapon: Weapon) => {
	switch (augm.class) {
		case "Attack":
			return `Increase attack by ${augm.raw}`;
			break;
		case "Affnity":
			return `Increase affnity by ${augm.affinity}`;
			break;
		case "Element":
			return `Increase element by ${augm.element?.[weapon.type]}`;
			break;
		case "Status":
			return `Increase status by ${augm.status}`;
			break;
		case "Sharpness":
			return `Increase sharpness by ${augm.sharpness}`;
			break;
		case "Rampage":
			return `Improve rampage slot by 1 level`;
			break;
		case "Shelling":
			return `Improve shelling level by ${augm.shelling}`;
			break;
	}
}

const formatWeaponPropertyKey = (t: WeaponType): string | undefined => {
	switch (t) {
		case "Switch Axe":
		case "Charge Blade":
			return "Phial";
		case "Gunlance":
			return "Shelling";
		case "Hunting Horn":
			return "Songs";
		case "Insect Glaive":
			return "Kinsect";
	}
};

const formatWeaponProperties = (w: Weapon): { key: string; value: string } | undefined => {
	switch (w.type) {
		case "Insect Glaive":
			return { key: "Kinsect", value: `Level ${w.properties}` };
		case "Gunlance":
			return { key: "Shelling", value: `${w.properties.type} ${w.properties.value}` };
		case "Switch Axe":
			switch (w.properties.type) {
				case "Power":
				case "Element":
					return { key: "Phial", value: w.properties.type };
				default:
					return { key: "Phial", value: `${w.properties.type} ${w.properties.value}` };
			}
		case "Charge Blade":
			return { key: "Phial", value: w.properties };
	}
};

const formatter = {
	formatElement,
	formatWeaponPropertyKey,
	formatWeaponProperties,
	formatWeaponAugmentation,
};

export default formatter;
