import {
	Armor,
	Decoration,
	RampageSkills,
	RampageSkillKey,
	Weapon,
	SkillSlot,
	SkillMap,
	Skills,
	SkillKey,
	Demondrug,
	Sharpness,
	SharpnessRawMultipliers,
	Attack,
	SharpnessEleMultipliers,
} from "../data";
import { JSONclone, lowest, multiply, sum } from "../utils";

interface ModelAttributes {
	_weapon: Weapon;
	rampageSkills?: RampageSkillKey[];
	sharpness?: Sharpness;
	_helm?: Armor;
	_chest?: Armor;
	_arms?: Armor;
	_waist?: Armor;
	_legs?: Armor;
	weaponDecos?: (Decoration | undefined)[];
	helmDecos?: (Decoration | undefined)[];
	chestDecos?: (Decoration | undefined)[];
	armsDecos?: (Decoration | undefined)[];
	waistDecos?: (Decoration | undefined)[];
	legsDecos?: (Decoration | undefined)[];
	charmDecos?: (Decoration | undefined)[];
	charmSlotOne?: SkillSlot;
	charmSlotTwo?: SkillSlot;
	demondrug?: keyof typeof Demondrug;
	powercharm?: boolean;
	powertalon?: boolean;
	dangoBooster?: boolean;
	mightSeed?: boolean;
	demonPowder?: boolean;
	powerDrum?: boolean;
	rousingRoar?: boolean;
	hitzone?: number;
	hitzoneEle?: number;
	disabledSkills?: SkillKey[];
}

export function calculateUI(base: number, multipliers = 1, bonuses = 0): number {
	return Math.floor(base * multipliers + bonuses + 0.1);
}

export class Model implements ModelAttributes {
	// Weapon
	_weapon: Weapon;
	rampageSkills: RampageSkillKey[] = [];
	sharpness?: Sharpness;

	// Armor
	_helm?: Armor;
	_chest?: Armor;
	_arms?: Armor;
	_waist?: Armor;
	_legs?: Armor;

	// Decos
	weaponDecos: (Decoration | undefined)[] = [];
	helmDecos: (Decoration | undefined)[] = [];
	chestDecos: (Decoration | undefined)[] = [];
	armsDecos: (Decoration | undefined)[] = [];
	waistDecos: (Decoration | undefined)[] = [];
	legsDecos: (Decoration | undefined)[] = [];
	charmDecos: (Decoration | undefined)[] = [];

	// Charm
	charmSlotOne?: SkillSlot;
	charmSlotTwo?: SkillSlot;

	// Buffs
	demondrug?: keyof typeof Demondrug;
	powercharm? = true;
	powertalon? = true;
	dangoBooster?: boolean;
	mightSeed?: boolean;
	demonPowder?: boolean;

	// Palico
	powerDrum?: boolean;
	rousingRoar?: boolean;

	// Target
	hitzone = 100;
	hitzoneEle = 30;

	disabledSkills: SkillKey[] = [];

	constructor({
		_weapon,
		rampageSkills = [],
		sharpness,
		_helm,
		_chest,
		_arms,
		_waist,
		_legs,
		weaponDecos = [],
		helmDecos = [],
		chestDecos = [],
		armsDecos = [],
		waistDecos = [],
		legsDecos = [],
		charmDecos = [],
		charmSlotOne,
		charmSlotTwo,
		demondrug,
		powercharm,
		powertalon,
		dangoBooster,
		mightSeed,
		demonPowder,
		powerDrum,
		rousingRoar,
		hitzone = 100,
		hitzoneEle = 30,
	}: ModelAttributes) {
		this._weapon = _weapon;
		this._weapon = _weapon;
		this.rampageSkills = rampageSkills;
		this.sharpness = sharpness ?? _weapon.sharpness;
		this._helm = _helm;
		this._chest = _chest;
		this._arms = _arms;
		this._waist = _waist;
		this._legs = _legs;
		this.weaponDecos = weaponDecos;
		this.helmDecos = helmDecos;
		this.chestDecos = chestDecos;
		this.armsDecos = armsDecos;
		this.waistDecos = waistDecos;
		this.legsDecos = legsDecos;
		this.charmDecos = charmDecos;
		this.charmSlotOne = charmSlotOne;
		this.charmSlotTwo = charmSlotTwo;
		this.demondrug = demondrug;
		this.powercharm = powercharm;
		this.powertalon = powertalon;
		this.dangoBooster = dangoBooster;
		this.mightSeed = mightSeed;
		this.demonPowder = demonPowder;
		this.powerDrum = powerDrum;
		this.rousingRoar = rousingRoar;
		this.hitzone = hitzone;
		this.hitzoneEle = hitzoneEle;
	}

	static new(weapon: Weapon) {
		return new Model({ _weapon: weapon });
	}

	static from(model: ModelAttributes) {
		return new Model(JSONclone(model));
	}

	get weapon(): Weapon {
		const weapon = JSONclone(this._weapon);

		for (const rs of this.rampageSkills) {
			weapon.raw += RampageSkills[rs].raw ?? 0;
			weapon.affinity = sum(weapon.affinity, RampageSkills[rs].raw);
			if (weapon.element) weapon.element.value += RampageSkills[rs].element ?? 0;

			if (weapon.type === "Switch Axe" && rs === "BoostEquippedCoating") {
				weapon.properties.value += 10;
			}
		}

		return weapon;
	}

	set weapon(w: Weapon) {
		this._weapon = w;
		this.sharpness = w.sharpness;
		this.rampageSkills = [];
		this.weaponDecos = [];
	}

	get helm(): Armor | undefined {
		return this._helm;
	}

	set helm(helm: Armor | undefined) {
		this._helm = helm;
		this.helmDecos = [];
	}

	get chest(): Armor | undefined {
		return this._chest;
	}

	set chest(chest: Armor | undefined) {
		this._chest = chest;
		this.chestDecos = [];
	}

	get arms(): Armor | undefined {
		return this._arms;
	}

	set arms(arms: Armor | undefined) {
		this._arms = arms;
		this.armsDecos = [];
	}

	get waist(): Armor | undefined {
		return this._waist;
	}

	set waist(waist: Armor | undefined) {
		this._waist = waist;
		this.waistDecos = [];
	}

	get legs(): Armor | undefined {
		return this._legs;
	}

	set legs(legs: Armor | undefined) {
		this._legs = legs;
		this.legsDecos = [];
	}

	skills(): SkillMap {
		const armorSkills = [this.helm, this.chest, this.arms, this.waist, this.legs]
			.filter<Armor>((n): n is Armor => n != undefined)
			.reduce<SkillSlot[]>((acc, s) => [...acc, ...s.skills], []);

		const decoSkills = [
			...this.weaponDecos,
			...this.helmDecos,
			...this.chestDecos,
			...this.armsDecos,
			...this.legsDecos,
			...this.charmDecos,
		].reduce<SkillSlot[]>((acc, s) => (s ? [...acc, ...s.skills] : acc), []);

		const charmSkills = [this.charmSlotOne, this.charmSlotTwo].filter<SkillSlot>(
			(n): n is SkillSlot => n != undefined,
		);

		// TODO: Stormsoul Bonus

		return [...armorSkills, ...decoSkills, ...charmSkills].reduce<SkillMap>(
			(acc, [skill, value]) => {
				const maxRank = Skills[skill].ranks.length;
				const current = acc[skill];
				const newValue = current ? current + value : value;

				acc[skill] = lowest(newValue, maxRank);
				return acc;
			},
			{},
		);
	}

	activeSkills(): SkillMap {
		return this.disabledSkills.reduce<SkillMap>((acc, ds) => {
			acc[ds] = 0;
			return acc;
		}, this.skills());
	}

	activeSkillsEntries(): [SkillKey, number][] {
		return Object.entries(this.activeSkills()) as [SkillKey, number][];
	}

	effectiveRaw(): number {
		const base = this.weapon.raw;

		const multipliers = [this.powerDrum ? 5 : 0];

		const bonuses = [
			this.demondrug == "Demondrug" ? 5 : this.demondrug == "Mega Demondrug" ? 7 : 0,
			this.powercharm ? 6 : 0,
			this.powertalon ? 9 : 0,
			this.dangoBooster ? 9 : 10,
			this.mightSeed ? 10 : 0,
			this.demonPowder ? 10 : 0,
		];

		this.activeSkillsEntries().forEach(([skill, level]) => {
			level = level - 1;

			if (level < 1) return;

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
					if (Skills[skill].ranks[level].sharpnesses.some((s) => s === this.sharpness)) {
						multipliers.push(Skills[skill].ranks[level].multiplier);
					}
			}
		});

		return calculateUI(base, multiply(...multipliers), sum(...bonuses));
	}

	effectiveEle(): number {
		if (!this.weapon.element) return 0;
		const type = this.weapon.element.type;

		const bonuses: number[] = [];
		const multipliers: number[] = [];

		this.activeSkillsEntries().forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "ElementalAttack":
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "TeostraBlessing":
					if (type === "Fire") multipliers.push(Skills[skill].ranks[level]);
					break;
				case "DaoraBlessing":
					if (type === "Water" || type === "Ice") multipliers.push(Skills[skill].ranks[level]);
					break;
				case "Stormsoul":
					if (type === "Thunder" || type === "Dragon") {
						multipliers.push(Skills[skill].ranks[level].multiplier);
					}
					break;
			}
		});

		return calculateUI(this.weapon.element.value, multiply(...multipliers), sum(...bonuses));
	}

	effectiveDragonPhial(): number {
		if (this.weapon.type !== "Switch Axe") return 0;
		if (this.weapon.properties?.type !== "Dragon") return 0;

		const bonuses: number[] = [];
		const multipliers: number[] = [];

		this.activeSkillsEntries().forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "ElementalAttack":
					bonuses.push(Skills[skill].ranks[level].flat);
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
				case "Stormsoul":
					multipliers.push(Skills[skill].ranks[level].multiplier);
					break;
			}
		});

		return calculateUI(this.weapon.properties.value, multiply(...multipliers), sum(...bonuses));
	}

	effectiveAffinity(): number {
		const affinity = [this.weapon.affinity ?? 0, this.rousingRoar ? 30 : 0];

		this.activeSkillsEntries().forEach(([skill, level]) => {
			level = level - 1;

			switch (skill) {
				case "CriticalEye":
				case "CriticalDraw":
				case "MaximumMight":
					affinity.push(Skills[skill].ranks[level]);
					break;
				case "WeaknessExploit":
					if (this.hitzone >= 45) affinity.push(Skills.WeaknessExploit.ranks[level]);
					break;
				case "Agitator":
					affinity.push(Skills.Agitator.ranks[level].affinity);
					break;
			}
		});

		return lowest(sum(...affinity), 100);
	}

	calculateRawHit(attack: Attack): number {
		const { mv, hz, ignoreHz, morph, sword, silkbind } = attack;

		const activeSkills = this.activeSkills();
		const sharpnessRawMultiplier = this.sharpness ? SharpnessRawMultipliers[this.sharpness] : 1;
		// color of hit
		const computedHitzone = multiply(ignoreHz ? 1 : this.hitzone / 100, hz, sharpnessRawMultiplier);

		const rawMultipliers = [
			mv / 100,
			computedHitzone,
			computedHitzone < 0.45 && activeSkills.MindsEye
				? Skills.MindsEye.ranks[activeSkills.MindsEye - 1]
				: 1,
			morph && activeSkills.RapidMorph ? Skills.RapidMorph.ranks[activeSkills.RapidMorph - 1] : 1,
			sword && this.weapon.type === "Switch Axe" && this.weapon.properties.type === "Power"
				? 1.15
				: 1,
			silkbind && this.rampageSkills.some((rs) => rs === "SilkbindBoost") ? 1.1 : 0,
		];

		return this.effectiveRaw() * multiply(...rawMultipliers);
	}

	calculateEleHit(attack: Attack): number {
		const { sword, element } = attack;

		const dragonPhial = this.effectiveDragonPhial();

		const base = sword && dragonPhial > 0 ? dragonPhial : this.effectiveEle();

		if (base === 0) return 0;

		const sharpnessEleMultiplier = this.sharpness ? SharpnessEleMultipliers[this.sharpness] : 1;

		// TODO: check if phial burst, ED pre-finishers count as sword attacks for phial
		const multipliers = [
			element,
			sharpnessEleMultiplier,
			this.hitzoneEle / 100,
			this.rampageSkills.includes("ElementExploit") && this.hitzoneEle >= 25 ? 1.3 : 1,
			sword && this.weapon.type === "Switch Axe" && this.weapon.properties.type === "Element"
				? 1.45
				: 1,
		];

		return base * multiply(...multipliers);
	}

	calculateRawCrit(attack: Attack): number {
		const base = this.calculateRawHit(attack);

		const activeSkills = this.activeSkills();

		if (this.effectiveAffinity() < 0) return base * 0.75;

		const critMultiplier = activeSkills.CriticalBoost
			? Skills.CriticalBoost.ranks[activeSkills.CriticalBoost - 1]
			: 1.25;

		return base * critMultiplier;
	}

	calculateEleCrit(attack: Attack): number {
		const base = this.calculateEleHit(attack);

		const activeSkills = this.activeSkills();

		if (!activeSkills.CriticalElement || this.effectiveAffinity() < 0) return base;

		return base * Skills.CriticalElement.ranks[activeSkills.CriticalElement - 1];
	}

	hasDullingStrike() {
		return this.rampageSkills.includes("DullingStrike");
	}

	private _baseHitChance(): number {
		return 100 - Math.abs(this.effectiveAffinity());
	}

	private _baseCritChance(): number {
		return Math.abs(this.effectiveAffinity());
	}

	hitChance(): number {
		const base = this._baseHitChance();

		return this.rampageSkills.includes("DullingStrike") ? 0.9 * base : base;
	}

	critChance(): number {
		const crit = this._baseCritChance();

		// TODO: confirm that they're still mutually exclusive in Sunbreak
		if (this.rampageSkills.includes("DullingStrike")) return crit * 0.9;
		if (this.rampageSkills.includes("BrutalStrike")) return crit * 0.75;

		return crit;
	}

	brutalStrikeChance(): number {
		if (!this.rampageSkills.includes("BrutalStrike") || this.effectiveAffinity() >= 0) return 0;
		return this._baseCritChance() * 0.25;
	}

	dullingStrikeHitChance(): number {
		if (!this.rampageSkills.includes("DullingStrike")) return 0;
		return this._baseHitChance() * 0.1;
	}

	dullingStrikeCritChance(): number {
		if (!this.rampageSkills.includes("DullingStrike")) return 0;
		return this._baseCritChance() * 0.1;
	}
}
