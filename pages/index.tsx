import { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
	Armor,
	Helms,
	Chests,
	Arms,
	Waists,
	Legs,
	Weapon,
	Weapons,
	WeaponType,
	WeaponTypes,
	Decoration,
	Decorations,
	Skills,
	InitialSkills,
	SkillKey,
	SkillSlot,
	Demondrug,
	RampageSkills,
	RampageSkillSlot,
	Sharpness,
	Sharpnesses,
	SharpnessRawMultipliers,
	SharpnessElementalMultipliers,
	SwitchAxeAttacks,
	GreatSwordAttacks,
	Attack,
	LightBowgunAttacks,
	HeavyBowgunAttacks,
	GunlanceAttacks,
} from "../data";
import { Box, TextDisplay, NumberInput, Select, SkillToggle, useCheckbox } from "../components";
import { calculateUI, JSONclone, lowest, multiply, sum, roundToDigits } from "../utils";

const Gear: NextPage = () => {
	// Weapon
	const [weaponType, setWeaponType] = useState<WeaponType | undefined>("Switch Axe");
	const [weapon, setWeapon] = useState<Weapon>();
	const [sharpness, setSharpness] = useState<Sharpness>();
	const [rampageSkills, setRampageSkills] = useState<(RampageSkillSlot | undefined)[]>([]);

	const filteredWeapons = useMemo(() => {
		return Weapons.filter((w) => w.type === weaponType);
	}, [weaponType]);

	useEffect(() => {
		setWeapon(filteredWeapons[0]);
	}, [filteredWeapons]);

	useEffect(() => {
		setRampageSkills([]);
		if (!weapon) {
			setSharpness(undefined);
			return;
		}
		if ("sharpness" in weapon) setSharpness(weapon.sharpness);
		else setSharpness(undefined);
	}, [weapon]);

	const isRanged = useMemo(() => {
		return weaponType === "Bow" || weaponType === "Light Bowgun" || weaponType === "Heavy Bowgun";
	}, [weaponType]);

	// Armor
	const [helm, setHelm] = useState<Armor>();
	const [chest, setChest] = useState<Armor>();
	const [arms, setArms] = useState<Armor>();
	const [waist, setWaist] = useState<Armor>();
	const [legs, setLegs] = useState<Armor>();

	// Decorations
	const [weaponDecos, setWeaponDecos] = useState<(Decoration | undefined)[]>([]);
	const [helmDecos, setHelmDecos] = useState<(Decoration | undefined)[]>([]);
	const [chestDecos, setChestDecos] = useState<(Decoration | undefined)[]>([]);
	const [armsDecos, setArmsDecos] = useState<(Decoration | undefined)[]>([]);
	const [waistDecos, setWaistDecos] = useState<(Decoration | undefined)[]>([]);
	const [legsDecos, setLegsDecos] = useState<(Decoration | undefined)[]>([]);
	const [charmDecos, setCharmDecos] = useState<(Decoration | undefined)[]>([]);

	// Charm
	const [charmSlots, setCharmSlots] = useState<(SkillSlot | undefined)[]>([]);

	// Items
	const [demondrug, setDemondrug] = useState<keyof typeof Demondrug>();
	const [powercharm, PowercharmComponent] = useCheckbox(true);
	const [powertalon, PowertalonComponent] = useCheckbox(true);
	const [mightSeed, MightSeedComponent] = useCheckbox();
	const [demonPowder, DemonPowderComponent] = useCheckbox();

	// Palico
	const [powerDrum, PowerDrumComponent] = useCheckbox();
	const [rousingRoar, RousingRoarComponent] = useCheckbox();

	// Dango
	const [dangoBooster, DangoBoosterComponent] = useCheckbox();
	const [dangoMarksman, DangoMarksmanComponent] = useCheckbox();
	const [dangoTemper, DangoTemperComponent] = useCheckbox();

	// Hitzone
	const [hitzone, setHitzone] = useState(100);
	const [hitzoneElemental, setHitzoneElemental] = useState(30);

	// Attacks
	const attacks = useMemo(() => {
		if (weaponType === "Switch Axe") return SwitchAxeAttacks;
		if (weaponType === "Great Sword") return GreatSwordAttacks;
		if (weaponType === "Gunlance") return GunlanceAttacks;
		if (weaponType === "Light Bowgun") return LightBowgunAttacks;
		if (weaponType === "Heavy Bowgun") return HeavyBowgunAttacks;
		return GreatSwordAttacks;
	}, [weaponType]);

	useEffect(() => setWeaponDecos([]), [weapon]);
	useEffect(() => setHelmDecos([]), [helm]);
	useEffect(() => setChestDecos([]), [chest]);
	useEffect(() => setArmsDecos([]), [arms]);
	useEffect(() => setWaistDecos([]), [waist]);
	useEffect(() => setLegsDecos([]), [legs]);

	const decorations = useMemo(() => {
		return [
			...weaponDecos,
			...helmDecos,
			...chestDecos,
			...armsDecos,
			...waistDecos,
			...legsDecos,
			...charmDecos,
		];
	}, [weaponDecos, helmDecos, chestDecos, armsDecos, waistDecos, legsDecos, charmDecos]);

	const [disabledSkills, setDisabledSkills] = useState<Partial<{ [K in SkillKey]: boolean }>>({});

	const skillsMap = useMemo(() => {
		const skills = [helm, chest, arms, waist, legs, ...decorations].reduce((acc, slot) => {
			slot?.skills.forEach(([skill, level]) => {
				const maxRank = Skills[skill].ranks.length;
				acc[skill] = lowest(acc[skill] + level, maxRank);
			});
			return acc;
		}, JSONclone(InitialSkills));

		charmSlots.forEach((slot) => {
			if (!slot) return;
			const [skill, level] = slot;
			const maxRank = Skills[skill].ranks.length;
			skills[skill] = lowest(skills[skill] + level, maxRank);
		});

		return skills;
	}, [helm, chest, arms, waist, legs, charmSlots, decorations]);

	const armorSkills = useMemo(() => {
		let skills = [helm, chest, arms, waist, legs, ...decorations].reduce<SkillSlot[]>(
			(acc, slot) => {
				if (!slot) return acc;
				slot.skills.forEach(([skill, level]) => {
					const found = acc.find((n) => n[0] === skill);

					const maxRank = Skills[skill].ranks.length;
					level = lowest(maxRank, found ? found[1] + level : level);

					if (found) found[1] = level;
					else acc.push([skill, level]);
				});
				return acc;
			},
			JSONclone(charmSlots).filter<SkillSlot>((s): s is SkillSlot => s != undefined),
		);

		// TODO: test Stormsoul
		const stormSoul = skills.find((v) => v[0] === "Stormsoul");

		if (stormSoul) {
			const level = stormSoul[1];

			let increase = 0;
			if (level === 5) increase = 2;
			else if (level === 4) increase = 1;

			if (increase > 0) {
				skills = skills.map(([skill, level]) => {
					if (skill === "Stormsoul") return [skill, level];

					const maxRank = Skills[skill].ranks.length;
					level = lowest(maxRank, level + increase);

					return [skill, level];
				});
			}
		}

		return skills.sort((a, b) => {
			if (a[1] < b[1]) return 1;
			if (a[1] > b[1]) return -1;
			return a[0] < b[0] ? -1 : 1;
		});
	}, [helm, chest, arms, waist, legs, charmSlots, decorations]);

	const weaponStats = useMemo(() => {
		if (!weapon) return { raw: 0, element: 0, affinity: 0 };

		let { raw, element, affinity } = weapon;

		rampageSkills.forEach((rs) => {
			if (!rs) return;
			const [skill, level] = rs;
			const rank = RampageSkills[skill].ranks[level - 1];
			if ("raw" in rank) raw += rank.raw;
			if ("element" in rank) element += rank.element;
			if ("affinity" in rank) affinity += rank.affinity;
		});

		return { raw, element, affinity: lowest(affinity, 100) };
	}, [weapon, rampageSkills]);

	const elementIsPhial = useMemo(() => {
		return weapon && "phial" in weapon && weapon.phial === "Dragon";
	}, [weapon]);

	const uiRaw = useMemo(() => {
		if (weaponStats.raw === 0) return 0;

		const multipliers = [powerDrum ? 5 : 0];

		const bonuses: number[] = [
			demondrug == "Demondrug" ? 5 : 0,
			demondrug == "Mega Demondrug" ? 7 : 0,
			powercharm ? 6 : 0,
			powertalon ? 9 : 0,
			dangoBooster ? 9 : 10,
			mightSeed ? 10 : 0,
			demonPowder ? 10 : 0,
		];

		armorSkills.forEach(([skill, level]) => {
			if (disabledSkills[skill]) return;

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
			}
		});

		return calculateUI(weaponStats.raw, multiply(...multipliers), sum(...bonuses));
	}, [
		weaponStats,
		armorSkills,
		demondrug,
		powercharm,
		powertalon,
		mightSeed,
		demonPowder,
		dangoBooster,
		powerDrum,
		disabledSkills,
	]);

	const uiElement = useMemo(() => {
		if (!weaponStats.element) return 0;

		const bonuses: number[] = [];

		const multipliers: number[] = [];

		armorSkills.forEach(([skill, level]) => {
			if (disabledSkills[skill]) return;

			level = level - 1;

			const elementType = weapon?.elementType;

			switch (skill) {
				case "ElementalAttack":
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "TeostraBlessing":
					if (elementType === "Fire") multipliers.push(Skills[skill].ranks[level]);
					break;
				case "DaoraBlessing":
					if (elementType === "Water" || elementType === "Ice") {
						multipliers.push(Skills[skill].ranks[level]);
					}
					break;
				case "Stormsoul":
					if (elementType === "Thunder" || elementType === "Dragon") {
						multipliers.push(Skills[skill].ranks[level]);
					}
					break;
			}
		});

		return calculateUI(weaponStats.element, multiply(...multipliers), sum(...bonuses));
	}, [weaponStats, armorSkills, disabledSkills]);

	const uiAffinity = useMemo(() => {
		let affinity = weaponStats?.affinity ?? 0;

		if (rousingRoar) affinity += 30;

		armorSkills.forEach(([skill, level]) => {
			if (disabledSkills[skill]) return;

			level = level - 1;

			switch (skill) {
				case "CriticalEye":
				case "CriticalDraw":
				case "MaximumMight":
					affinity += Skills[skill].ranks[level];
					break;
				case "WeaknessExploit":
					if (hitzone >= 45) affinity += Skills.WeaknessExploit.ranks[level];
					break;
				case "Agitator":
					affinity += Skills.Agitator.ranks[level].affinity;
					break;
			}
		});

		return lowest(affinity, 100);
	}, [weaponStats, armorSkills, disabledSkills, hitzone, rousingRoar]);

	const calculateRawHit = useCallback(
		({ mv, hz, ignoreHz, morph, sword }: Attack) => {
			if (!weapon) return 0;

			const sharpnessMulti = sharpness ? SharpnessRawMultipliers[sharpness] : 1;

			// color of hit
			const computedHitzone = multiply(ignoreHz ? 1 : hitzone / 100, hz, sharpnessMulti);

			const multipliers = [mv / 100, computedHitzone];

			if (computedHitzone < 0.45 && skillsMap.MindsEye) {
				multipliers.push(Skills.MindsEye.ranks[skillsMap.MindsEye - 1]);
			}

			if (morph && skillsMap.RapidMorph) {
				multipliers.push(Skills.RapidMorph.ranks[skillsMap.RapidMorph - 1]);
			}

			if (sword && "phial" in weapon && weapon.phial === "Power") multipliers.push(1.15);

			return uiRaw * multiply(...multipliers);
		},
		[weapon, uiRaw, sharpness, hitzone, skillsMap],
	);

	const calculateElementalHit = useCallback(
		({ element, sword }: Attack) => {
			if (!weapon) return 0;

			const sharpnessMulti = sharpness ? SharpnessElementalMultipliers[sharpness] : 1;

			const base =
				weapon.type === "Switch Axe" && weapon.phial === "Dragon" && !sword ? 0 : uiElement;

			// TODO: check if phial burst, ED pre-finishers count as sword attacks for phial
			const multipliers = [sharpnessMulti, hitzoneElemental / 100];
			if (sword && "phial" in weapon && weapon.phial === "Element") multipliers.push(1.45);

			return base * multiply(...multipliers, element);
		},
		[weapon, uiElement, sharpness],
	);

	const calculateRawCrit = useCallback(
		(attack: Attack) => {
			const hit = calculateRawHit(attack);

			const isPositiveCrit = uiAffinity >= 0;
			let critMulti = isPositiveCrit ? 1.25 : 0.75;

			if (isPositiveCrit && skillsMap.CriticalBoost) {
				critMulti = Skills.CriticalBoost.ranks[skillsMap.CriticalBoost - 1];
			}

			return hit * multiply(critMulti);
		},
		[calculateRawHit, uiAffinity, skillsMap],
	);

	const calculateElementalCrit = useCallback(
		(attack: Attack) => {
			const hit = calculateElementalHit(attack);
			if (uiAffinity < 0 || !skillsMap.CriticalElement) return hit;
			return hit * multiply(Skills.CriticalElement.ranks[skillsMap.CriticalElement - 1]);
		},
		[calculateElementalHit, armorSkills, uiAffinity],
	);

	type SlotProps = {
		label: string;
		options: Armor[];
		value?: Armor;
		onSelectOption: (a: Armor | undefined) => void;
		decos: (Decoration | undefined)[];
		setDecos: typeof setWeaponDecos;
	};

	const Slot = ({ label, options, value, onSelectOption, decos, setDecos }: SlotProps) => (
		<>
			<Select
				label={label}
				options={options}
				value={value}
				onSelectOption={onSelectOption}
				formatter={(o) => o.name}
			/>
			<div className="grid grid-cols-3 gap-2">
				{value?.decorations.map((s, i) => (
					<Select
						key={label + i}
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
		</>
	);

	return (
		<div className="flex gap-2">
			<div className="flex flex-col gap-2">
				<Box head="Weapon">
					<Select
						label="Type"
						options={[...WeaponTypes]}
						value={weaponType}
						onSelectOption={setWeaponType}
						formatter={(o) => o.toString()}
					/>
					<Select
						label="Weapon"
						options={filteredWeapons}
						value={weapon}
						onSelectOption={setWeapon}
						formatter={(o) => o.name}
					/>
					{weapon && (
						<>
							{!isRanged && (
								<Select
									label="Sharpness"
									options={[...Sharpnesses]}
									value={sharpness}
									onSelectOption={setSharpness}
									formatter={(o) => o}
									disabled={isRanged}
								/>
							)}
							<div className="grid grid-cols-3 gap-2">
								<TextDisplay label="Raw" value={weaponStats.raw} />
								<TextDisplay
									label={weapon.elementType || "Element"}
									value={elementIsPhial ? `0 (${weaponStats.element})` : weaponStats.element}
								/>
								<TextDisplay label="Affinity (%)" value={weaponStats.affinity} />
							</div>
							{weapon.rampageSkills.map((opts, i) => (
								<Select
									key={`rampage-${i}`}
									options={opts}
									label={
										weapon.rampageSkills.length > 1 ? `Rampage Skill ${i + 1}` : "Rampage Skill"
									}
									formatter={(v) => RampageSkills[v[0]].name}
									renderer={(v) => {
										const rampageSkill = RampageSkills[v[0]];
										let output = rampageSkill.name;
										if (rampageSkill.ranks.length > 1) output += ` ${v[1]}`;
										return output;
									}}
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
							<div className="grid grid-cols-3 gap-2">
								{weapon.decorations.map((s, i) => (
									<Select
										key={"weapon-" + i}
										label={`Decoration [${s}]`}
										options={Decorations.filter((d) => d.rank <= s)}
										value={weaponDecos[i]}
										formatter={(o) => o.name}
										onSelectOption={(o) =>
											setWeaponDecos((current) => {
												const newDecos = [...current];
												newDecos[i] = o;
												return newDecos;
											})
										}
									/>
								))}
							</div>
						</>
					)}
				</Box>
				<Box head="Armor">
					<Slot
						label="Helm"
						options={Helms}
						value={helm}
						onSelectOption={setHelm}
						decos={helmDecos}
						setDecos={setHelmDecos}
					/>
					<Slot
						label="Chest"
						options={Chests}
						value={chest}
						onSelectOption={setChest}
						decos={chestDecos}
						setDecos={setChestDecos}
					/>
					<Slot
						label="Waist"
						options={Waists}
						value={waist}
						onSelectOption={setWaist}
						decos={waistDecos}
						setDecos={setWaistDecos}
					/>
					<Slot
						label="Arms"
						options={Arms}
						value={arms}
						onSelectOption={setArms}
						decos={armsDecos}
						setDecos={setArmsDecos}
					/>
					<Slot
						label="Legs"
						options={Legs}
						value={legs}
						onSelectOption={setLegs}
						decos={legsDecos}
						setDecos={setLegsDecos}
					/>
				</Box>
				<Box head="Charm">
					{[0, 1].map((i) => {
						return (
							<div key={`charm-${i}`} className="grid grid-cols-4 gap-2">
								<div className="col-span-3">
									<Select
										value={charmSlots[i] ? charmSlots[i]![0] : undefined}
										label="Skill"
										options={Object.keys(Skills)}
										renderer={(t) => Skills[t as SkillKey].name}
										formatter={(t) => t}
										onSelectOption={(v) => {
											setCharmSlots((current) => {
												const newSlots = [...current];
												if (!v) newSlots[i] = undefined;
												else newSlots[i] = [v as SkillKey, 1];
												return newSlots;
											});
										}}
									/>
								</div>
								<Select
									value={charmSlots[i] ? charmSlots[i]![1] : undefined}
									label="Level"
									options={[1, 2, 3]}
									disabled={!charmSlots[i]}
									formatter={(n) => n.toString()}
									onSelectOption={(v) => {
										setCharmSlots((current) => {
											const newSlots = [...current];
											if (!newSlots[i] || !v) return current;
											newSlots[i] = [newSlots[i]![0], v];
											return newSlots;
										});
									}}
								/>
							</div>
						);
					})}
					<div className="grid grid-cols-3 gap-2">
						{[3, 2, 1].map((s, i) => (
							<Select
								key={`charm-deco-${i}`}
								label={`Decoration [${s}]`}
								options={Decorations.filter((d) => d.rank <= s)}
								value={charmDecos[i]}
								formatter={(o) => o.name}
								onSelectOption={(o) =>
									setCharmDecos((current) => {
										const newDecos = [...current];
										newDecos[i] = o;
										return newDecos;
									})
								}
							/>
						))}
					</div>
				</Box>
			</div>
			<div className="flex flex-col gap-2">
				<Box head="Hitzone">
					<div className="grid grid-cols-2 gap-2">
						<NumberInput label="Raw" value={hitzone} onChangeValue={setHitzone} />
						<NumberInput
							label="Elemental"
							value={hitzoneElemental}
							onChangeValue={setHitzoneElemental}
						/>
					</div>
				</Box>
				<Box head="Buffs">
					<Select
						label="Demondrug"
						options={["Demondrug", "Mega Demondrug"]}
						value={demondrug}
						onSelectOption={setDemondrug}
						formatter={(o) => o.toString()}
					/>
					<div className="grid grid-cols-3 gap-2">
						<PowercharmComponent label="Powercharm" />
						<PowertalonComponent label="Powertalon" />
						<MightSeedComponent label="Might Seed" />
						<DemonPowderComponent label="Demon Powder" />
					</div>
					<h4 className="mt-2">Dango Skills</h4>
					<div className=" grid grid-cols-3 gap-2">
						<DangoBoosterComponent label="Dango Booster" />
						<DangoMarksmanComponent label="Dango Marksman" />
						<DangoTemperComponent label="Dango Temper" />
					</div>
					<h4 className="mt-2">Palico</h4>
					<div className=" grid grid-cols-3 gap-2">
						<PowerDrumComponent label="Power Drum" />
						<RousingRoarComponent label="Rousing Roar" />
					</div>
				</Box>
				<Box head="Final Values">
					<div className="grid grid-cols-3 gap-2">
						<TextDisplay label="Raw" value={uiRaw} />
						<TextDisplay
							label={weapon?.elementType || "Element"}
							value={elementIsPhial ? `0 (${uiElement})` : uiElement}
						/>
						<TextDisplay label="Affinity (%)" value={uiAffinity} />
					</div>
					{/* <div className="grid grid-cols-2 gap-2">
						<NumberInput disabled label="Effective Raw" value={effectiveRaw} />
						<NumberInput disabled label="Effective Element" value={effectiveElement} />
					</div> */}
				</Box>
				<Box head="Skills">
					{armorSkills.map(([skill, value]) => (
						<SkillToggle
							key={skill}
							value={value}
							active={!disabledSkills[skill]}
							disabled={!("conditional" in Skills[skill])}
							label={Skills[skill].name}
							onChangeValue={(v) => setDisabledSkills((current) => ({ ...current, [skill]: !v }))}
						/>
					))}
				</Box>
			</div>
			<div className="flex-1">
				<Box stretch head="Attacks">
					<table className="table-auto w-full text-left text-xs">
						<thead>
							<tr className="border-b border-gray-200">
								<th>Attack</th>
								<th>MV</th>
								<th>Hit (R + E)</th>
								<th>Crit (R + E)</th>
								<th>Avg</th>
							</tr>
						</thead>
						<tbody className="text-xs text-gray-600 divide-y divide-gray-200">
							{attacks.map((attack) => {
								const { name, mv, noCrit } = attack;

								const rawHit = Math.round(calculateRawHit(attack));
								const eleHit = Math.round(calculateElementalHit(attack));
								const hitTotal = rawHit + eleHit;

								const rawCrit = Math.round(calculateRawCrit(attack));
								const eleCrit = Math.round(calculateElementalCrit(attack));
								const critTotal = rawCrit + eleCrit;

								const affinity = noCrit ? 0 : Math.abs(uiAffinity);

								const average = roundToDigits(
									hitTotal * ((100 - affinity) / 100) + critTotal * (affinity / 100),
								);

								return (
									<tr key={name}>
										<td>{name}</td>
										<td>{mv}</td>
										<td>
											{hitTotal} ({rawHit} + {eleHit})
										</td>
										<td>{noCrit ? "-" : `${critTotal} (${rawCrit} + ${eleCrit})`}</td>
										<td>{average}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</Box>
			</div>
		</div>
	);
};

export default Gear;
