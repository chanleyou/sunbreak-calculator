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
		name: "Minds Eye",
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
	},
	RapidMorph: {
		name: "Rapid Morph",
		ranks: [1, 1.1, 1.2],
	},
	TeostraBlessing: {
		name: "Teostra Blessing",
		ranks: [1.05, 1.1, 1.1, 1.1],
	},
	DaoraBlessing: {
		name: "Daora Blessing",
		ranks: [1.05, 1.1, 1.1, 1.1],
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
} as const;

export type SkillMap = Partial<{ [key in SkillKey]: number }>;

export const Demondrug = {
	Demondrug: 5,
	"Mega Demondrug": 7,
} as const;
