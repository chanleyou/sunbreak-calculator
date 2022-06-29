import { useMemo, useState, useCallback, useEffect } from "react";
import { produce } from "immer";
import {
	Armor,
	Attack,
	Decoration,
	Demondrug,
	LongSwordSpiritGauge,
	RampageSkillKey,
	RampageSkills,
	SharpnessEleMultipliers,
	SharpnessRawMultipliers,
	SkillKey,
	SkillMap,
	Skills,
	SkillSlot,
	Weapon,
	Weapons,
} from "../data";
import {
	calculateUI,
	lowest,
	multiply,
	sharpnessHandicraft,
	getSharpnessFromArray,
	sum,
} from "../utils";

export type Model = ReturnType<typeof useModel>;

export const useModel = () => {
	// Weapon
	const [_weapon, setWeapon] = useState<Weapon>(Weapons[0]);
	const [rampageSkills, setRampageSkills] = useState<(RampageSkillKey | undefined)[]>([]);

	const isRanged = useMemo(() => {
		return ["Bow", "Light Bowgun", "Heavy Bowgun"].some((w) => w === _weapon.type);
	}, [_weapon]);

	useEffect(() => {
		setRampageSkills([]);
		setWeaponDecos([]);
		setSpiritGauge(undefined);
		setPowerSheathe(false);
		setDangoMarksman(false);
		setDangoTemper(false);
	}, [_weapon]);

	// Armor
	const [helm, setHelm] = useState<Armor>();
	const [chest, setChest] = useState<Armor>();
	const [arms, setArms] = useState<Armor>();
	const [waist, setWaist] = useState<Armor>();
	const [legs, setLegs] = useState<Armor>();

	// Decos
	const [weaponDecos, setWeaponDecos] = useState<(Decoration | undefined)[]>([]);
	const [helmDecos, setHelmDecos] = useState<(Decoration | undefined)[]>([]);
	const [chestDecos, setChestDecos] = useState<(Decoration | undefined)[]>([]);
	const [armsDecos, setArmsDecos] = useState<(Decoration | undefined)[]>([]);
	const [waistDecos, setWaistDecos] = useState<(Decoration | undefined)[]>([]);
	const [legsDecos, setLegsDecos] = useState<(Decoration | undefined)[]>([]);
	const [charmDecos, setCharmDecos] = useState<(Decoration | undefined)[]>([]);

	const _decos = useMemo(() => {
		return [
			weaponDecos,
			helmDecos,
			chestDecos,
			armsDecos,
			waistDecos,
			legsDecos,
			charmDecos,
		].flat();
	}, [weaponDecos, helmDecos, chestDecos, armsDecos, waistDecos, legsDecos, charmDecos]);

	useEffect(() => setHelmDecos([]), [helm]);
	useEffect(() => setChestDecos([]), [chest]);
	useEffect(() => setArmsDecos([]), [arms]);
	useEffect(() => setWaistDecos([]), [waist]);
	useEffect(() => setLegsDecos([]), [legs]);

	// Charm
	const [charmSkillOne, setCharmSkillOne] = useState<SkillSlot>();
	const [charmSkillTwo, setCharmSkillTwo] = useState<SkillSlot>();

	// Buffs
	const [demondrug, setDemondrug] = useState<keyof typeof Demondrug>();
	const [powercharm, setPowercharm] = useState(true);
	const [powertalon, setPowertalon] = useState(true);
	const [dangoBooster, setDangoBooster] = useState(false);
	const [mightSeed, setMightSeed] = useState(false);
	const [demonPowder, setDemonPowder] = useState(false);

	// Weapon Buffs
	const [spiritGauge, setSpiritGauge] = useState<keyof typeof LongSwordSpiritGauge>();
	const [powerSheathe, setPowerSheathe] = useState(false);
	const [groundSplitter, setGroundSplitter] = useState(false);
	const [dangoTemper, setDangoTemper] = useState(false);
	const [dangoMarksman, setDangoMarksman] = useState(false);
	const [dangoBombardier, setDangoBombardier] = useState(false);

	// Misc. Buffs
	const [miscRaw, setMiscRaw] = useState(0);
	const [miscMultiplier, setMiscMultiplier] = useState(0);
	const [miscAffinity, setMiscAffinity] = useState(0);

	// Palico
	const [powerDrum, setPowerDrum] = useState(false);
	const [rousingRoar, setRousingRoar] = useState(false);

	// Hitzone
	const [hitzone, setHitzone] = useState(100);
	const [hitzoneEle, setHitzoneEle] = useState(30);

	// Skills
	const [disabledSkills, setDisabledSkills] = useState<SkillKey[]>([]);

	// Combo
	const [combo, setCombo] = useState<Attack[]>([]);

	const weapon = useMemo(() => {
		return produce(_weapon, (w) => {
			rampageSkills.forEach((rs) => {
				if (!rs) return;
				w.raw += RampageSkills[rs].raw ?? 0;
				w.affinity = sum(w.affinity, RampageSkills[rs].affinity);
				if (w.element) w.element.value += RampageSkills[rs].element ?? 0;

				if (w.type === "Switch Axe" && rs === "BoostEquippedCoating") {
					w.properties.value += 10;
				}
			});
		});
	}, [_weapon, rampageSkills]);

	const skills = useMemo(() => {
		const armorSkills = [helm, chest, arms, waist, legs]
			.filter<Armor>((n): n is Armor => n != undefined)
			.reduce<SkillSlot[]>((acc, s) => [...acc, ...s.skills], []);

		const decoSkills = _decos.reduce<SkillSlot[]>((acc, s) => (s ? [...acc, s.skill] : acc), []);

		const charmSkills = [charmSkillOne, charmSkillTwo].filter<SkillSlot>(
			(n): n is SkillSlot => n != undefined,
		);

		const base = [armorSkills, decoSkills, charmSkills]
			.flat()
			.reduce<SkillMap>((acc, [skill, value]) => {
				const maxRank = Skills[skill].ranks.length;
				const current = acc[skill];
				const newValue = current ? current + value : value;

				acc[skill] = lowest(newValue, maxRank);
				return acc;
			}, {});

		// Stormsoul
		if (!base.Stormsoul || base.Stormsoul < 4) return base;
		const bonus = base.Stormsoul - 3;

		return produce(base, (draft) => {
			(Object.entries(draft) as [SkillKey, number][]).forEach(([skill, level]) => {
				if (skill === "Stormsoul") return;

				const maxRank = Skills[skill].ranks.length;
				draft[skill] = lowest(maxRank, level + bonus);
			});
		});
	}, [helm, chest, arms, waist, legs, _decos, charmSkillOne, charmSkillTwo]);

	const activeSkills = useMemo(() => {
		return produce(skills, (draft) => {
			disabledSkills.forEach((ds) => {
				delete draft[ds];
			});

			return draft;
		});
	}, [skills, disabledSkills]);

	const activeSkillsEntries = useMemo(() => {
		return Object.entries(activeSkills) as [SkillKey, number][];
	}, [activeSkills]);

	const sharpnessArray = useMemo(() => {
		if (!weapon.sharpness) return undefined;
		if (!activeSkills.Handicraft) return weapon.sharpness;
		const handicraftPoints = Skills.Handicraft.ranks[activeSkills.Handicraft! - 1];

		return sharpnessHandicraft(weapon.sharpness, weapon.handicraft, handicraftPoints);
	}, [weapon, activeSkills]);

	const sharpness = useMemo(() => {
		if (!sharpnessArray) return undefined;
		return getSharpnessFromArray(sharpnessArray);
	}, [sharpnessArray]);

	const effectiveRaw = useMemo(() => {
		const base = weapon.raw;

		const multipliers = [
			(100 + miscMultiplier) / 100,
			powerDrum ? 1.05 : 1,
			weapon.type === "Long Sword" && spiritGauge ? LongSwordSpiritGauge[spiritGauge] : 1,
			weapon.type === "Great Sword" && powerSheathe ? 1.1 : 1,
		];

		const bonuses = [
			demondrug ? Demondrug[demondrug] : 0,
			powercharm ? 6 : 0,
			powertalon ? 9 : 0,
			dangoBooster ? 9 : 0,
			mightSeed ? 10 : 0,
			demonPowder ? 10 : 0,
			miscRaw,
		];

		activeSkillsEntries.forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "AttackBoost":
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "Agitator":
					bonuses.push(Skills[skill].ranks[level].flat);
					break;
				case "OffensiveGuard":
				case "Dragonheart":
				case "Heroics":
					multipliers.push(Skills[skill].ranks[level]);
					break;
				case "Resentment":
				case "Resuscitate":
				case "PeakPerformance":
				case "PunishingDraw":
				case "Counterstrike":
					bonuses.push(Skills[skill].ranks[level]);
					break;
				case "Bludgeoner":
					if (Skills[skill].ranks[level].sharpnesses.some((s) => s === sharpness)) {
						multipliers.push(Skills[skill].ranks[level].multiplier);
					}
			}
		});

		return calculateUI(base, multiply(...multipliers), sum(...bonuses));
	}, [
		weapon,
		miscMultiplier,
		powerDrum,
		spiritGauge,
		powerSheathe,
		demondrug,
		powercharm,
		powertalon,
		dangoBooster,
		mightSeed,
		demonPowder,
		miscRaw,
		activeSkillsEntries,
		sharpness,
	]);

	const effectiveEle = useMemo(() => {
		if (!weapon.element) return 0;
		const type = weapon.element.type;

		const bonuses: number[] = [];
		const multipliers: number[] = [];

		activeSkillsEntries.forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "FireAttack":
					if (type !== "Fire") break;
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "IceAttack":
					if (type !== "Ice") break;
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "WaterAttack":
					if (type !== "Water") break;
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "ThunderAttack":
					if (type !== "Thunder") break;
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "DragonAttack":
					if (type !== "Dragon") break;
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "TeostraBlessing":
					if (type !== "Fire") break;
					multipliers.push(Skills[skill].ranks[level]);
					break;
				case "KushalaBlessing":
					if (type !== "Water" && type !== "Ice") break;
					multipliers.push(Skills[skill].ranks[level]);
					break;
				case "Stormsoul":
					if (type !== "Thunder" && type !== "Dragon") break;
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
			}
		});

		return calculateUI(weapon.element.value, multiply(...multipliers), sum(...bonuses));
	}, [weapon, activeSkillsEntries]);

	const dragonPhial = useMemo(() => {
		if (weapon.type !== "Switch Axe") return 0;
		if (weapon.properties?.type !== "Dragon") return 0;

		const bonuses: number[] = [];
		const multipliers: number[] = [];

		activeSkillsEntries.forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "DragonAttack":
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "Stormsoul":
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
			}
		});

		return calculateUI(weapon.properties.value, multiply(...multipliers), sum(...bonuses));
	}, [weapon, activeSkillsEntries]);

	const effectiveAffinity = useMemo(() => {
		const affinity = [weapon.affinity ?? 0, rousingRoar ? 30 : 0, miscAffinity];

		activeSkillsEntries.forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "CriticalEye":
				case "CriticalDraw":
				case "MaximumMight":
					affinity.push(Skills[skill].ranks[level]);
					break;
				case "WeaknessExploit":
					if (hitzone >= 45) affinity.push(Skills.WeaknessExploit.ranks[level]);
					break;
				case "Agitator":
					affinity.push(Skills.Agitator.ranks[level].affinity);
					break;
			}
		});

		return lowest(sum(...affinity), 100);
	}, [weapon, activeSkillsEntries, rousingRoar, miscAffinity, hitzone]);

	const rawHit = useCallback(
		(attack: Attack): number => {
			const { mv, hzMod, ignoreHz, morph, sword, silkbind, shelling, artillery } = attack;

			if (weapon.type === "Gunlance" && shelling) {
				return (
					shelling[weapon.properties.type][weapon.properties.value - 1].raw *
					multiply(
						artillery && activeSkills.Artillery
							? Skills.Artillery.ranks[activeSkills.Artillery - 1]
							: 1,
						artillery && groundSplitter ? 1.2 : 1,
						artillery && dangoBombardier ? 1.1 : 1,
						ignoreHz ? 1 : hitzone / 100,
					)
				);
			}

			const sharpnessRawMultiplier = sharpness ? SharpnessRawMultipliers[sharpness] : 1;

			// color of hit
			const computedHitzone = multiply(ignoreHz ? 1 : hitzone / 100, hzMod, sharpnessRawMultiplier);

			const rawMultipliers = [
				mv / 100,
				computedHitzone,
				computedHitzone < 0.45 && activeSkills.MindsEye
					? Skills.MindsEye.ranks[activeSkills.MindsEye - 1]
					: 1,
				isRanged && dangoMarksman ? 1.1 : 1,
				isRanged && dangoTemper ? 1.05 : 1,
				morph && activeSkills.RapidMorph ? Skills.RapidMorph.ranks[activeSkills.RapidMorph - 1] : 1,
				sword && weapon.type === "Switch Axe" && weapon.properties.type === "Power" ? 1.15 : 1,
				silkbind && rampageSkills.some((rs) => rs === "SilkbindBoost") ? 1.1 : 1,
			];

			return effectiveRaw * multiply(...rawMultipliers);
		},
		[
			sharpness,
			hitzone,
			activeSkills,
			weapon,
			rampageSkills,
			effectiveRaw,
			isRanged,
			groundSplitter,
			dangoMarksman,
			dangoTemper,
			dangoBombardier,
		],
	);

	const eleHit = useCallback(
		(attack: Attack): number => {
			const { sword, eleMod, shelling, artillery } = attack;

			if (weapon.type === "Gunlance" && shelling) {
				return multiply(
					shelling[weapon.properties.type][weapon.properties.value - 1].fire,
					artillery && activeSkills.Artillery
						? Skills.Artillery.ranks[activeSkills.Artillery - 1]
						: 1,
					artillery && groundSplitter ? 1.2 : 1,
					artillery && dangoBombardier ? 1.1 : 1,
					hitzoneEle / 100,
				);
			}

			const base = sword && dragonPhial > 0 ? dragonPhial : effectiveEle;

			if (base === 0) return 0;

			const sharpnessEleMultiplier = sharpness ? SharpnessEleMultipliers[sharpness] : 1;

			const multipliers = [
				eleMod,
				sharpnessEleMultiplier,
				hitzoneEle / 100,
				rampageSkills.includes("ElementExploit") && hitzoneEle >= 25 ? 1.3 : 1,
				sword && weapon.type === "Switch Axe" && weapon.properties.type === "Element" ? 1.45 : 1,
			];

			return base * multiply(...multipliers);
		},
		[
			effectiveEle,
			dragonPhial,
			hitzoneEle,
			rampageSkills,
			weapon,
			sharpness,
			activeSkills,
			groundSplitter,
			dangoBombardier,
		],
	);

	const rawCrit = useCallback(
		(attack: Attack): number => {
			const base = rawHit(attack);

			if (effectiveAffinity < 0) return base * 0.75;

			const critMultiplier = activeSkills.CriticalBoost
				? Skills.CriticalBoost.ranks[activeSkills.CriticalBoost - 1]
				: 1.25;

			return base * critMultiplier;
		},
		[rawHit, effectiveAffinity, activeSkills],
	);

	const eleCrit = useCallback(
		(attack: Attack): number => {
			const base = eleHit(attack);

			if (!activeSkills.CriticalElement || effectiveAffinity < 0) return base;

			return base * Skills.CriticalElement.ranks[activeSkills.CriticalElement - 1];
		},
		[eleHit, activeSkills, effectiveAffinity],
	);

	const _baseCritChance = useMemo(() => Math.abs(effectiveAffinity), [effectiveAffinity]);
	const _baseHitChance = useMemo(() => 100 - _baseCritChance, [_baseCritChance]);

	const hasDullingStrike = useMemo(() => rampageSkills.includes("DullingStrike"), [rampageSkills]);
	const hasBrutalStrike = useMemo(() => rampageSkills.includes("BrutalStrike"), [rampageSkills]);

	const hitChance = useMemo(() => {
		return hasDullingStrike ? _baseHitChance * 0.9 : _baseHitChance;
	}, [hasDullingStrike, _baseHitChance]);

	const critChance = useMemo(() => {
		if (hasDullingStrike) return _baseCritChance * 0.9;
		if (hasBrutalStrike) return _baseCritChance * 0.75;

		return _baseCritChance;
	}, [_baseCritChance, hasDullingStrike, hasBrutalStrike]);

	const brutalStrikeChance = useMemo(() => {
		if (!hasBrutalStrike || effectiveAffinity >= 0) return 0;
		return _baseCritChance * 0.25;
	}, [hasBrutalStrike, effectiveAffinity, _baseCritChance]);

	const dullHitChance = useMemo(() => {
		return hasDullingStrike ? _baseHitChance * 0.1 : 0;
	}, [hasDullingStrike, _baseHitChance]);

	const dullCritChance = useMemo(() => {
		return hasDullingStrike ? _baseCritChance * 0.1 : 0;
	}, [hasDullingStrike, _baseCritChance]);

	const hit = useCallback(
		(a: Attack) => Math.round(rawHit(a)) + Math.round(eleHit(a)),
		[rawHit, eleHit],
	);

	const crit = useCallback(
		(a: Attack) => Math.round(rawCrit(a)) + Math.round(eleCrit(a)),
		[rawCrit, eleCrit],
	);

	const dullHit = useCallback(
		(a: Attack) => Math.round(rawHit(a) * 1.2) + Math.round(eleHit(a)),
		[rawHit, eleHit],
	);

	const dullCrit = useCallback(
		(a: Attack) => Math.round(rawCrit(a) * 1.2) + Math.round(eleCrit(a)),
		[rawCrit, eleCrit],
	);

	const brutalStrike = useCallback(
		(a: Attack) => Math.round(rawHit(a) * 1.5) + Math.round(eleHit(a)),
		[rawHit, eleHit],
	);

	const attackAverage = useCallback(
		(a: Attack) => {
			return sum(
				(hit(a) * hitChance) / 100,
				(crit(a) * critChance) / 100,
				(dullHit(a) * dullHitChance) / 100,
				(dullCrit(a) * dullCritChance) / 100,
				(brutalStrike(a) * brutalStrikeChance) / 100,
			);
		},
		[
			hit,
			hitChance,
			crit,
			critChance,
			dullHit,
			dullHitChance,
			dullCrit,
			dullCritChance,
			brutalStrike,
			brutalStrikeChance,
		],
	);

	return {
		weapon,
		isRanged,
		setWeapon,
		sharpnessArray,
		sharpness,
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
		setLegs,
		weaponDecos,
		setWeaponDecos,
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
		demondrug,
		setDemondrug,
		powercharm,
		setPowercharm,
		powertalon,
		setPowertalon,
		dangoBooster,
		setDangoBooster,
		mightSeed,
		setMightSeed,
		demonPowder,
		setDemonPowder,
		spiritGauge,
		setSpiritGauge,
		powerSheathe,
		setPowerSheathe,
		groundSplitter,
		setGroundSplitter,
		dangoMarksman,
		setDangoMarksman,
		dangoTemper,
		setDangoTemper,
		dangoBombardier,
		setDangoBombardier,
		miscRaw,
		setMiscRaw,
		miscMultiplier,
		setMiscMultiplier,
		miscAffinity,
		setMiscAffinity,
		powerDrum,
		setPowerDrum,
		rousingRoar,
		setRousingRoar,
		hitzone,
		setHitzone,
		hitzoneEle,
		setHitzoneEle,
		disabledSkills,
		setDisabledSkills,
		combo,
		setCombo,
		skills,
		activeSkills,
		activeSkillsEntries,
		effectiveRaw,
		effectiveEle,
		dragonPhial,
		effectiveAffinity,
		rawHit,
		eleHit,
		rawCrit,
		eleCrit,
		hasDullingStrike,
		hasBrutalStrike,
		hitChance,
		critChance,
		brutalStrikeChance,
		dullHitChance,
		dullCritChance,
		hit,
		crit,
		dullHit,
		dullCrit,
		brutalStrike,
		attackAverage,
	};
};

export default useModel;
