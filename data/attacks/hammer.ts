import { Attack } from ".";

export const HammerAttacks: Attack[] = [
	{ name: "Impact Press? (courage max charge 1 follow hit?)", mv: 16, eleMod: 1.5 },
	{ name: "Impact Press? (courage max charge 2 follow hit?)", mv: 24, eleMod: 1.5 },
	{ name: "Impact Press? (courage max charge 3 follow hit?)", mv: 40, eleMod: 2 },
	{
		name: "Impact Burst (Follow-up Damage)_Lv1 ",
		mv: 12,
		eleMod: 0.2,
		statusMod: 0,
		noCrit: true,
	},
	{
		name: "Impact Burst (Follow-up Damage)_Lv2",
		mv: 14,
		eleMod: 0.3,
		statusMod: 0,
		noCrit: true,
	},
	{
		name: "Impact Burst (Follow-up Damage)_Lv3",
		mv: 15,
		eleMod: 0.4,
		statusMod: 0,
		noCrit: true,
	},
	{ name: "Upswing", mv: 86 },
	{ name: "Overhead Smash I", mv: 42 },
	{ name: "Side Smash", mv: 15, eleMod: 1.3, statusMod: 1.3 },
	{ name: "Overhead Smash II", mv: 23 },
	{ name: "Swing", mv: 20 },
	{ name: "Charged Side Blow", mv: 23 },
	{ name: "Backswing", mv: 16 },
	{ name: "Charged Upswing", mv: 50 },
	{ name: "Charged Follow-up", mv: 25 },
	{ name: "Spinning Bludgeon (start)", mv: 26, eleMod: 1.1, statusMod: 1.1 },
	{ name: "Spinning Bludgeon (1st loop)", mv: 18, eleMod: 1.2, statusMod: 1.2 },
	{ name: "Charged Big Bang (1st hit)", mv: 40 },
	{ name: "Charged Big Bang (2nd hit)", mv: 100 },
	{ name: "Spinning Bludgeon (2nd loop)", mv: 18, eleMod: 1.3, statusMod: 1.3 },
	{ name: "Spinning Bludgeon (3rd loop)", mv: 18, eleMod: 1.4, statusMod: 1.4 },
	{ name: "Spinning Side Smash", mv: 15 },
	{ name: "Spinning Follow-up", mv: 55 },
	{ name: "Spinning Strong Upswing", mv: 90 },
	{ name: "Big Bang II", mv: 32 },
	{ name: "Big Bang III", mv: 45 },
	{ name: "Big Bang IV", mv: 65 },
	{ name: "Big Bang I", mv: 28 },
	{ name: "Big Bang Finisher", mv: 175 },
	{ name: "Jumping Smash", mv: 37 },
	{ name: "Jumping Charged Attack", mv: 55 },
	{ name: "Jumping Charged Attack II", mv: 60 },
	{ name: "Jumping Charged Attack III", mv: 70 },
	{ name: "Spinning Bludgeon (4th loop)", mv: 18, eleMod: 1.5, statusMod: 1.5 },
	{ name: "Silkbind Spinning Bludgeon (start)", mv: 25 },
	{ name: "Silkbind Spinning Bludgeon (1st loop)", mv: 25, eleMod: 0.7, statusMod: 0.7 },
	{ name: "[strength] Charged Follow-up", mv: 55 },
	{ name: "[strength] Charged Brutal Upswing", mv: 70 },
	{ name: "Silkbind Spinning Bludgeon (4th loop)", mv: 25, eleMod: 0.7, statusMod: 0.7 },
	{ name: "Silkbind Spinning Bludgeon (Charge 1, Landing)", mv: 80 },
	{ name: "Silkbind Spinning Bludgeon (3rd loop)", mv: 25, eleMod: 0.7, statusMod: 0.7 },
	{ name: "Silkbind Spinning Bludgeon (2nd loop)", mv: 25, eleMod: 0.7, statusMod: 0.7 },
	{ name: "[strength] Charged Brutal Big Bang (1st hit)", mv: 60 },
	{ name: "[strength] Charged Brutal Big Bang (2nd hit)", mv: 40 },
	{ name: "[strength] Charged Brutal Big Bang (final hit)", mv: 135 },
	{ name: "[strength] Step Smash (first hit)", mv: 40 },
	{ name: "[strength] Step Smash", mv: 110 },
	{
		name: "[courage] Charged Hammer Down (Lv3 charge) (1st hit)",
		mv: 15,
		eleMod: 1.5,
		statusMod: 1.2,
	},
	{
		name: "[courage] Charged Hammer Down (Lv3 charge)  (finish)",
		mv: 80,
		eleMod: 2,
		statusMod: 1.2,
	},
	{ name: "Silkbind Spinning Bludgeon (Charge 2, Landing)", mv: 90 },
	{ name: "Silkbind Spinning Bludgeon (Charge 3, Landing)", mv: 100 },
	{ name: "Dash Breaker (Charge 1)", mv: 50 },
	{ name: "Dash Breaker (Charge 2)", mv: 60 },
	{ name: "Dash Breaker (Charge 3)", mv: 70 },
	{ name: "Impact Crater (Finish)", mv: 80 },
	{ name: "Impact Crater (Charge 2, Finish)", mv: 100 },
	{ name: "Impact Crater (Charge 3, Finish)", mv: 150 },
	{ name: "Impact Crater Spin (1st hit)", mv: 20 },
	{ name: "Impact Crater Spin (2nd hit)  (dummy move)", mv: 20 },
	{ name: "Impact Crater Spin (3rd hit)", mv: 20 },
	{ name: "Big Bang Finisher (1st and 2nd hit)", mv: 28 },
	{ name: "Spinning Swing", mv: 15 },
	{ name: "Water Strike", mv: 15 },
	{ name: "Spinning Bludgeon (first hit) (after Charge Switch to normal(yellow))", mv: 26 },
	{ name: "Spinning Bludgeon (first loop) (after Charge Switch to normal(yellow))", mv: 18 },
	{ name: "[wire] Mid-air Swing  (dummy move)", mv: 20 },
	{ name: "[wire] Swing  (dummy move)", mv: 20 },
	{ name: "[wire] Mid-air swing (Landing)  (dummy move)", mv: 20 },
	{ name: "Water Strike (follow-up when success)", mv: 120 },
	{ name: "Jumping Smash (Wirebug)", mv: 37 },
	{ name: "Jumping Charged Attack (Wirebug)", mv: 65 },
	{ name: "Jumping Charged Attack II (Wirebug)", mv: 70 },
	{ name: "Jumping Charged Attack III (Wirebug)", mv: 80 },
	{ name: "Impact Crater Spin (1st hit) (Charge 3) (dummy move)", mv: 15 },
	{ name: "Impact Crater Spin (2nd hit) (Charge 2) (dummy move)", mv: 15 },
	{ name: "Impact Crater Spin (3rd hit) (Charge 2) (dummy move)", mv: 15 },
	{ name: "Midair Spinning Bludgeon (1st hit)", mv: 23 },
	{ name: "Midair Spinning Bludgeon (loop)", mv: 23, eleMod: 0.7, statusMod: 0.7 },
	{ name: "Midair Spinning Bludgeon (final hit)", mv: 100 },
	{ name: "[courage] Swing? (Lv1 charge) ", mv: 35, eleMod: 1.5, statusMod: 1.1 },
	{ name: "[courage] Charged Upswing? (Lv2 charge) ", mv: 55, eleMod: 1.5, statusMod: 1.1 },
	{ name: "[courage] Jumping Charged Attack", mv: 45, eleMod: 1.1, statusMod: 1.1 },
	{ name: "[courage] Jumping Charged Attack II", mv: 50, eleMod: 1.2, statusMod: 1.1 },
	{ name: "[courage] Jumping Charged Attack III", mv: 60, eleMod: 1.35, statusMod: 1.1 },
	{ name: "[courage] Jumping Charged Attack (Wirebug)", mv: 55, eleMod: 1.1, statusMod: 1.1 },
	{ name: "Spinning Bludgeon first loop", mv: 25 },
	{ name: "Spinning Bludgeon second loop", mv: 25 },
	{ name: "Spinning Bludgeon third loop", mv: 60 },
	{ name: "Impact Burst activated ", mv: 10, eleMod: 0.2, statusMod: 0.2 },
	{ name: "Side Smash Ⅱ * TEST", mv: 26 },
];

export default HammerAttacks;
