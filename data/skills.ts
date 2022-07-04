export type SkillKey = keyof typeof Skills;

export type Skill = typeof Skills[SkillKey];

export type SkillSlot = [SkillKey, number];

export const Skills = {
	AttackBoost: {
		name: "Attack Boost",
		ranks: [
			{ flat: 3, multiplier: 1 },
			{ flat: 6, multiplier: 1 },
			{ flat: 9, multiplier: 1 },
			{ flat: 7, multiplier: 1.05 },
			{ flat: 8, multiplier: 1.06 },
			{ flat: 9, multiplier: 1.08 },
			{ flat: 10, multiplier: 1.1 },
		],
	},
	IceAttack: {
		name: "Ice Attack",
		ranks: [
			{ flat: 2, multiplier: 1 },
			{ flat: 3, multiplier: 1 },
			{ flat: 4, multiplier: 1.05 },
			{ flat: 4, multiplier: 1.1 },
			{ flat: 4, multiplier: 1.2 },
		],
	},
	ThunderAttack: {
		name: "Thunder Attack",
		ranks: [
			{ flat: 2, multiplier: 1 },
			{ flat: 3, multiplier: 1 },
			{ flat: 4, multiplier: 1.05 },
			{ flat: 4, multiplier: 1.1 },
			{ flat: 4, multiplier: 1.2 },
		],
	},
	FireAttack: {
		name: "Fire Attack",
		ranks: [
			{ flat: 2, multiplier: 1 },
			{ flat: 3, multiplier: 1 },
			{ flat: 4, multiplier: 1.05 },
			{ flat: 4, multiplier: 1.1 },
			{ flat: 4, multiplier: 1.2 },
		],
	},
	DragonAttack: {
		name: "Dragon Attack",
		ranks: [
			{ flat: 2, multiplier: 1 },
			{ flat: 3, multiplier: 1 },
			{ flat: 4, multiplier: 1.05 },
			{ flat: 4, multiplier: 1.1 },
			{ flat: 4, multiplier: 1.2 },
		],
	},
	WaterAttack: {
		name: "Water Attack",
		ranks: [
			{ flat: 2, multiplier: 1 },
			{ flat: 3, multiplier: 1 },
			{ flat: 4, multiplier: 1.05 },
			{ flat: 4, multiplier: 1.1 },
			{ flat: 4, multiplier: 1.2 },
		],
	},
	CriticalEye: {
		name: "Critical Eye",
		ranks: [5, 10, 15, 20, 25, 30, 40],
	},
	WeaknessExploit: {
		name: "Weakness Exploit",
		ranks: [15, 30, 50],
	},
	CriticalBoost: {
		name: "Critical Boost",
		ranks: [1.3, 1.35, 1.4],
	},
	CriticalElement: {
		name: "Critical Element",
		ranks: [1.05, 1.1, 1.15],
	},
	CriticalDraw: {
		name: "Critical Draw",
		ranks: [10, 20, 40],
		conditional: true,
	},
	Bludgeoner: {
		name: "Bludgeoner",
		ranks: [
			{ sharpnesses: ["Red", "Orange", "Yellow"], multiplier: 1.05 },
			{ sharpnesses: ["Red", "Orange", "Yellow"], multiplier: 1.1 },
			{ sharpnesses: ["Red", "Orange", "Yellow", "Green"], multiplier: 1.1 },
		],
	},
	MaximumMight: {
		name: "Maximum Might",
		ranks: [10, 20, 30],
		conditional: true,
	},
	LatentPower: {
		name: "Latent Power",
		ranks: [10, 20, 30, 40, 50],
		conditional: true,
	},
	Agitator: {
		name: "Agitator",
		ranks: [
			{ flat: 4, affinity: 3 },
			{ flat: 8, affinity: 5 },
			{ flat: 12, affinity: 7 },
			{ flat: 16, affinity: 10 },
			{ flat: 20, affinity: 15 },
		],
		conditional: true,
	},
	OffensiveGuard: {
		name: "Offensive Guard",
		ranks: [1.05, 1.1, 1.15],
		conditional: true,
	},
	NormalRapidUp: {
		name: "Normal/Rapid Up",
		ranks: [5, 10, 20],
	},
	PierceUp: {
		name: "Pierce Up",
		ranks: [5, 10, 20],
	},
	SpreadUp: {
		name: "Spread Up",
		ranks: [5, 10, 20],
	},
	RapidFireUp: {
		name: "Rapid Fire Up",
		ranks: [5, 10, 20],
	},
	SpareShot: {
		name: "Spare Shot",
		ranks: [1, 2, 3],
	},
	PeakPerformance: {
		name: "Peak Performance",
		ranks: [5, 10, 20],
		conditional: true,
	},
	Counterstrike: {
		name: "Counterstrike",
		ranks: [10, 15, 25],
		conditional: true,
	},
	Heroics: {
		name: "Heroics",
		ranks: [1, 1.05, 1.05, 1.1, 1.3],
		conditional: true,
	},
	MindsEye: {
		name: "Mind's Eye",
		ranks: [1.1, 1.15, 1.3],
	},
	Dragonheart: {
		name: "Dragonheart",
		ranks: [1, 1, 1, 1.05, 1.1],
		conditional: true,
	},
	Resuscitate: {
		name: "Resuscitate",
		ranks: [5, 10, 20],
		conditional: true,
	},
	Resentment: {
		name: "Resentment",
		ranks: [5, 10, 15, 20, 25],
		conditional: true,
	},
	PunishingDraw: {
		name: "Punishing Draw",
		ranks: [3, 5, 7],
		conditional: true,
	},
	RapidMorph: {
		name: "Rapid Morph",
		ranks: [1, 1.1, 1.2],
	},
	TeostraBlessing: {
		name: "Teostra Blessing",
		ranks: [1.05, 1.1, 1.1, 1.1],
	},
	KushalaBlessing: {
		name: "Kushala Blessing",
		ranks: [1.05, 1.1, 1.1, 1.1],
	},
	ChameleosBlessing: {
		name: "Chameleos Blessing",
		ranks: [1, 2, 3, 4],
	},
	Stormsoul: {
		name: "Stormsoul",
		ranks: [
			{ boost: 0, multiplier: 1.05 },
			{ boost: 0, multiplier: 1.1 },
			{ boost: 0, multiplier: 1.15 },
			{ boost: 1, multiplier: 1.15 },
			{ boost: 2, multiplier: 1.15 },
		],
	},
	Artillery: {
		name: "Artillery",
		ranks: [1.1, 1.2, 1.3],
	},
	Focus: {
		name: "Focus",
		ranks: [1.05, 1.1, 1.15],
	},
	MastersTouch: {
		name: "Master's Touch",
		ranks: [0.2, 0.4, 0.8],
	},
	PowerProlonger: {
		name: "Power Prolonger",
		ranks: [1, 2, 3],
	},
	WirebugWhisperer: {
		name: "Wirebug Whisperer",
		ranks: [1, 2, 3],
	},
	Ballistics: {
		name: "Ballistics",
		ranks: [1, 2, 3],
	},
	Partbreaker: {
		name: "Partbreaker",
		ranks: [1, 2, 3],
	},
	EvadeExtender: {
		name: "Evade Extender",
		ranks: [1, 2, 3],
	},
	SpeedSharpening: {
		name: "Speed Sharpening",
		ranks: [1, 2, 3],
	},
	LoadShells: {
		name: "Load Shells",
		ranks: [1, 2],
	},
	Guard: {
		name: "Guard",
		ranks: [1, 2, 3, 4, 5],
	},
	GuardUp: {
		name: "Guard Up",
		ranks: [1, 2, 3],
	},
	DefenseBoost: {
		name: "Defense Boost",
		ranks: [
			{ flat: 5, multiplier: 1, resistances: 0 },
			{ flat: 10, multiplier: 1, resistances: 0 },
			{ flat: 10, multiplier: 1.05, resistances: 0 },
			{ flat: 20, multiplier: 1.05, resistances: 3 },
			{ flat: 20, multiplier: 1.08, resistances: 3 },
			{ flat: 35, multiplier: 1.08, resistances: 5 },
			{ flat: 35, multiplier: 1.1, resistances: 5 },
		],
	},
	Earplugs: {
		name: "Earplugs",
		ranks: [1, 2, 3, 4, 5],
	},
	RazorSharp: {
		name: "Razor Sharp",
		ranks: [1, 2, 3],
	},
	Windproof: {
		name: "Windproof",
		ranks: [1, 2, 3],
	},
	Handicraft: {
		name: "Handicraft",
		ranks: [10, 20, 30, 40, 50],
	},
	HungerResistance: {
		name: "Hunger Resistance",
		ranks: [1, 2, 3],
	},
	WindAlignment: {
		name: "Wind Alignment",
		ranks: [1, 2, 3, 4, 5],
	},
	ThunderAlignment: {
		name: "Thunder Alignment",
		ranks: [1, 2, 3, 4, 5],
	},
	FlinchFree: {
		name: "Flinch Free",
		ranks: [1, 2, 3],
	},
	Constitution: {
		name: "Constitution",
		ranks: [1, 2, 3, 4, 5],
	},
	StaminaSurge: {
		name: "Stamina Surge",
		ranks: [1, 2, 3],
	},
	EvadeWindow: {
		name: "Evade Window",
		ranks: [1, 2, 3, 4, 5],
	},
	Slugger: {
		name: "Slugger",
		ranks: [1, 2, 3],
	},
	MarathonRunner: {
		name: "Marathon Runner",
		ranks: [1, 2, 3],
	},
	DivineBlessing: {
		name: "Divine Blessing",
		ranks: [1, 2, 3],
	},
	Botanist: {
		name: "Botanist",
		ranks: [1, 2, 3, 4],
	},
	Geologist: {
		name: "Geologist",
		ranks: [1, 2, 3],
	},
	CarvingPro: {
		name: "Carving Pro",
		ranks: [1],
	},
	RecoveryUp: {
		name: "Recovery Up",
		ranks: [1, 2, 3],
	},
	WallRunner: {
		name: "Wall Runner",
		ranks: [0, 0, 20],
		conditional: true,
	},
	WallRunnerBoost: {
		name: "Wall Runner (Boost)",
		ranks: [1],
	},
	AffinitySliding: {
		name: "Affinity Sliding",
		ranks: [30],
		conditional: true,
	},
	SpecialAmmoBoost: {
		name: "Special Ammo Boost",
		ranks: [1.1, 1, 2],
	},
	ItemProlonger: {
		name: "Item Prolonger",
		ranks: [1, 2, 3],
	},
	QuickSheathe: {
		name: "Quick Sheathe",
		ranks: [1, 2, 3],
	},
	AmmoUp: {
		name: "Ammo Up",
		ranks: [1, 2, 3],
	},
	StunResistance: {
		name: "Stun Resistance",
		ranks: [1, 2, 3],
	},
	ProtectivePolish: {
		name: "Protective Polish",
		ranks: [1, 2, 3],
	},
	ParalysisResistance: {
		name: "Paralysis Resistance",
		ranks: [1, 2, 3],
	},
	BlightResistance: {
		name: "Blight Resistance",
		ranks: [1, 2, 3],
	},
	BlastResistance: {
		name: "Blast Resistance",
		ranks: [1, 2, 3],
	},
	SleepResistance: {
		name: "Sleep Resistance",
		ranks: [1, 2, 3],
	},
	TremorResistance: {
		name: "Tremor Resistance",
		ranks: [1, 2, 3],
	},
	PoisonResistance: {
		name: "Poison Resistance",
		ranks: [1, 2, 3],
	},
	RecoverySpeed: {
		name: "Recovery Speed",
		ranks: [1, 2, 3],
	},
	SpeedEating: {
		name: "Speed Eating",
		ranks: [1, 2, 3],
	},
	BubblyDance: {
		name: "Bubbly Dance",
		ranks: [1, 2, 3],
	},
	LeapOfFaith: {
		name: "Leap of Faith",
		ranks: [1],
	},
	Mushroomancer: {
		name: "Mushroomancer",
		ranks: [1, 2, 3],
	},
	HornMaestro: {
		name: "Horn Maestro",
		ranks: [1], // TODO: HH mv+
	},
	WideRange: {
		name: "Wide-Range",
		ranks: [1, 2, 3, 4, 5],
	},
	CaptureMaster: {
		name: "Capture Master",
		ranks: [1],
	},
	Steadiness: {
		name: "Steadiness",
		ranks: [1, 2, 3],
	},
	TuneUp: {
		// TODO: figure out what this is
		name: "Tune-Up",
		ranks: [1, 2],
	},
	PoisonAttack: {
		name: "Poison Attack",
		ranks: [
			{ flat: 1, multiplier: 1.05 },
			{ flat: 2, multiplier: 1.1 },
			{ flat: 5, multiplier: 1.2 },
		],
	},
	ParalysisAttack: {
		name: "Paralysis Attack",
		ranks: [
			{ flat: 1, multiplier: 1.05 },
			{ flat: 2, multiplier: 1.1 },
			{ flat: 5, multiplier: 1.2 },
		],
	},
	BlastAttack: {
		name: "Blast Attack",
		ranks: [
			{ flat: 1, multiplier: 1.05 },
			{ flat: 2, multiplier: 1.1 },
			{ flat: 5, multiplier: 1.2 },
		],
	},
	SleepAttack: {
		name: "Sleep Attack",
		ranks: [
			{ flat: 1, multiplier: 1.05 },
			{ flat: 2, multiplier: 1.1 },
			{ flat: 5, multiplier: 1.2 },
		],
	},
	FreeMeal: {
		name: "Free Meal",
		ranks: [1, 2, 3],
	},
	RecoilDown: {
		name: "Recoil Down",
		ranks: [1, 2, 3],
	},
	Fortify: {
		name: "Fortify",
		ranks: [{ attack: 1.1, defense: 1.15 }],
	},
	GoodLuck: {
		name: "Good Luck",
		ranks: [1, 2, 3],
	},
	ChargeMaster: {
		// TOOD: model
		name: "Charge Master",
		ranks: [
			{ others: 1.05, bow: 1.025 },
			{ others: 1.1, bow: 1.05 },
			{ others: 1.15, bow: 1.1 },
		],
	},
	Foray: {
		name: "Foray",
		ranks: [
			{ flat: 10, affinity: 0 },
			{ flat: 15, affinity: 10 },
			{ flat: 25, affinity: 20 },
		],
		conditional: true,
	},
	Diversion: {
		name: "Diversion",
		ranks: [1],
	},
	MuckResistance: {
		name: "Muck Resistance",
		ranks: [1, 2],
	},
	MasterMounter: {
		name: "Master Mounter",
		ranks: [1],
	},
	IceResistance: {
		name: "Ice Resistance",
		ranks: [
			{ flat: 6, defense: 0 },
			{ flat: 12, defense: 0 },
			{ flat: 20, defense: 10 },
		],
	},
	FireResistance: {
		name: "Fire Resistance",
		ranks: [
			{ flat: 6, defense: 0 },
			{ flat: 12, defense: 0 },
			{ flat: 20, defense: 10 },
		],
	},
	DragonResistance: {
		name: "Dragon Resistance",
		ranks: [
			{ flat: 6, defense: 0 },
			{ flat: 12, defense: 0 },
			{ flat: 20, defense: 10 },
		],
	},
	WaterResistance: {
		name: "Water Resistance",
		ranks: [
			{ flat: 6, defense: 0 },
			{ flat: 12, defense: 0 },
			{ flat: 20, defense: 10 },
		],
	},
	ThunderResistance: {
		name: "Thunder Resistance",
		ranks: [
			{ flat: 6, defense: 0 },
			{ flat: 12, defense: 0 },
			{ flat: 20, defense: 10 },
		],
	},
	ReloadSpeed: {
		name: "Reload Speed",
		ranks: [1, 2, 3],
	},
	Bombardier: {
		name: "Bombardier",
		ranks: [1, 2, 3],
	},
	StaminaThief: {
		// TODO: model
		name: "Stamina Thief",
		ranks: [1.2, 1.3, 1.4],
	},
	JumpMaster: {
		name: "Jump Master",
		ranks: [1],
	},
	HellfireCloak: {
		name: "Hellfire Cloak",
		ranks: [1, 2, 3, 4],
	},
	SpiribirdsCall: {
		name: "Spiribird's Call",
		ranks: [1],
	},
	GrinderS: {
		name: "Grinder (S)",
		ranks: [
			{ rawMultiplier: 1.1, eleMultiplier: 1.075 },
			{ rawMultiplier: 1.1, eleMultiplier: 1.075 },
			{ rawMultiplier: 1.1, eleMultiplier: 1.075 },
		],
		conditional: true,
	},
	Furious: {
		name: "Furious",
		ranks: [
			{ defense: 10, resistances: 5 },
			{ defense: 20, resistances: 10 },
			{ defense: 30, resistances: 20 },
		],
		conditional: true,
	},
	ChainCrit: {
		name: "Chain Crit",
		ranks: [
			{ flat: 10, ele: 4 },
			{ flat: 12, ele: 6 },
			{ flat: 15, ele: 8 },
		],
		conditional: true,
	},
	Coalescence: {
		name: "Coalescence",
		ranks: [
			{ flat: 12, ele: 2, status: 1.05 },
			{ flat: 15, ele: 3, status: 1.1 },
			{ flat: 18, ele: 4, status: 1.15 },
		],
		conditional: true,
	},
	Bloodlust: {
		name: "Bloodlust",
		ranks: [1, 2, 3],
	},
	BladescaleHone: {
		name: "Bladescale Hone",
		ranks: [1, 2, 3],
	},
	Redirection: {
		name: "Redirection",
		ranks: [1, 2, 3],
	},
	MailOfHellfire: {
		name: "Mail of Hellfire",
		ranks: [
			{ redRawUp: 15, redDefenseDown: 50, blueElementMultiplier: 1.05, blueResistancesDown: 10 },
			{ redRawUp: 20, redDefenseDown: 75, blueElementMultiplier: 1.1, blueResistancesDown: 25 },
			{ redRawUp: 25, redDefenseDown: 100, blueElementMultiplier: 1.2, blueResistancesDown: 50 },
		],
	},
	BloodRite: {
		name: "Blood Rite",
		ranks: [1, 2, 3],
	},
	Dereliction: {
		name: "Dereliction",
		ranks: [1, 2, 3],
	},
	QuickBreath: {
		name: "Quick Breath",
		ranks: [1],
	},
	BowChargePlus: {
		name: "Bow Charge Plus",
		ranks: [1],
	},
} as const;

export type SkillMap = Partial<{ [key in SkillKey]: number }>;
