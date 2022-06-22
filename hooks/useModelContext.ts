import { useMemo, useState, useCallback } from "react";
import { RampageSkillKey, RampageSkills, Weapons } from "../data";

export default function useModelContext() {
	const [_weapon, setWeapon] = useState(Weapons[0]);
	const [rampageSkills, setRampageSkills] = useState<RampageSkillKey[]>([]);

	const weapon = useMemo(() => {
		return _weapon;
	}, [_weapon, rampageSkills]);

	return {};
}
