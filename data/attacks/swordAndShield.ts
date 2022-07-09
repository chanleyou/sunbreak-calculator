import { Attack } from ".";

export const SwordAndShieldAttacks: Attack[] = [
	{ name: "sword (multi for Thrust)", mv: 10, eleMod: 1.3, statusMod: 1.3 },
	{ name: "(multi for Plunging Thrust)", mv: 14 },
	{
		name: "Shield (follow hit for Metsu Shoryugeki counter)",
		mv: 30,
		eleMod: 0,
		statusMod: 0,
		silkbind: true,
	},
	{ name: "Charged Slash", mv: 40 },
	{ name: "Chop", mv: 18 },
	{ name: "Side Slash", mv: 17 },
	{ name: "Sword/Shield Combo (Shield)", mv: 12, eleMod: 0 },
	{ name: "Sword/Shield Combo (Sword)", mv: 24 },
	{ name: "Lateral Slash", mv: 26 },
	{ name: "Return Stroke", mv: 26 },
	{ name: "Spinning Rising Slash (Return Stroke > A)", mv: 36 },
	{ name: "Shield Attack", mv: 10, eleMod: 0 },
	{ name: "Shield Bash", mv: 24, eleMod: 0 },
	{ name: "Hard Bash", mv: 37, eleMod: 0 },
	{ name: "Thrust", mv: 22 },
	{ name: "Drill Slash", mv: 28, eleMod: 1.5, statusMod: 1.5 },
	{ name: "Rising Slash", mv: 18 },
	{ name: "Advancing Slash", mv: 22 },
	{ name: "Sliding Slash", mv: 22 },
	{ name: "Round Slash", mv: 38 },
	{ name: "Spinning Reaper (Special Ver. Round Slash)", mv: 65 },
	{ name: "Scaling Slash", mv: 14 },
	{ name: "Plunging Thrust (Helm Breaker in MHW)", mv: 24 },
	{ name: "Falling Bash", mv: 40, eleMod: 0 },
	{ name: "Jumping Slash", mv: 14 },
	{ name: "Jumping Rising Slash", mv: 14 },
	{ name: "Jumping Advancing Slash", mv: 18 },
	{ name: "Guard Slash", mv: 14 },
	{ name: "[wire] Falling Shadow (1st, Chop)", mv: 18, silkbind: true },
	{ name: "[wire] Falling Shadow (2nd, Rising Slash)", mv: 14, silkbind: true },
	{ name: "[wire] Windmill", mv: 18, eleMod: 0.8, statusMod: 0.5, silkbind: true },
	{ name: "[wire] Windmill (Finisher)", mv: 40, silkbind: true },
	{ name: "Metsu Shoryugeki", mv: 80, eleMod: 0, silkbind: true },
	{ name: "[wire]Falling Shadow (Land)", mv: 14 },
	{ name: "[wire]Falling Shadow (mid-air)", mv: 14 },
	{ name: "Sliding Rising Slash", mv: 14 },
	{ name: "Jumping Slash", mv: 14 },
	{ name: "Jumping Slash (Land)", mv: 14 },
	{ name: "[wire]Jumping Slash (Land)", mv: 14 },
	{ name: "Metsu Shoryugeki (counter start)", mv: 80, eleMod: 0, silkbind: true },
	{ name: "Metsu Shoryugeki (counter multi)", mv: 20, eleMod: 0, statusMod: 0, silkbind: true },
	{ name: "Leaping Slash (pre-action for PR)", mv: 40 },
	{ name: "Perfect Rush I-1", mv: 30, eleMod: 0, statusMod: 0 },
	{ name: "Perfect Rush I-2", mv: 35, eleMod: 1.5, statusMod: 1.2 },
	{ name: "Perfect Rush I-3", mv: 30, eleMod: 1.5, statusMod: 1.2 },
	{ name: "Perfect Rush II", mv: 50, eleMod: 0, statusMod: 0 },
	{ name: "Perfect Rush III", mv: 70, eleMod: 1.5, statusMod: 1.2 },
	{ name: "Falling Bash Large", mv: 52, eleMod: 0 },
	{ name: "Falling Bash Large (Landing)", mv: 47, eleMod: 0 },
	{ name: "Perfect Rush I-1 (fail)", mv: 10, eleMod: 0 },
	{ name: "Perfect Rush I-2 (fail)", mv: 15, eleMod: 1.2 },
	{ name: "Perfect Rush I-3 (fail)", mv: 15, eleMod: 1.2 },
	{ name: "Perfect Rush II (fail)", mv: 20, eleMod: 0 },
	{ name: "Perfect Rush III (fail)", mv: 30, eleMod: 1.2 },
	{ name: "Twin Blade Combo Stage 1", mv: 24, eleMod: 1.2, statusMod: 1.2 },
	{ name: "Twin Blade Combo Stage 2", mv: 26, eleMod: 1.2, statusMod: 1.2 },
	{ name: "Wire Charge", mv: 37, eleMod: 0, silkbind: true },
	{ name: "Apply Blade Oil Stage 1", mv: 30, silkbind: true },
	{ name: "Apply Blade Oil Stage 2", mv: 30, silkbind: true },
	{ name: "[wire] Windmill (1st Hit)", mv: 18, eleMod: 0.8, statusMod: 0.5, silkbind: true },
];

export default SwordAndShieldAttacks;
