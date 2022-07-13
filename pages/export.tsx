import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";
import CryptoJS from "crypto-js";
import { Box, Column } from "../components";
import { Model } from "../model";

type Props = {
	model: Model;
};

const NOT_SO_SECRET_KEY = "SUNBREAK";

const Export: NextPage<Props> = ({ model }) => {
	const router = useRouter();
	const [input, setInput] = useState("");
	const [error, setError] = useState("");

	const tryImport = useCallback(() => {
		setError("");
		try {
			const decrypted = CryptoJS.AES.decrypt(input, NOT_SO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
			const json: Model = JSON.parse(decrypted);

			// remember order
			model.setWeapon(json._weapon);
			model.setRampageSkills(json.rampageSkills);
			model.setRampageDecos(json.rampageDecos);

			model.setHelm(json.helm);
			model.setChest(json.chest);
			model.setArms(json.arms);
			model.setWaist(json.waist);
			model.setLegs(json.legs);

			model.setWeaponDecos(json.weaponDecos);
			model.setHelmDecos(json.helmDecos);
			model.setChestDecos(json.chestDecos);
			model.setArmsDecos(json.armsDecos);
			model.setWaistDecos(json.waistDecos);
			model.setLegsDecos(json.legsDecos);
			model.setCharmDecos(json.charmDecos);

			model.setCharmSkillOne(json.charmSkillOne);
			model.setCharmSkillTwo(json.charmSkillTwo);

			// Buffs
			model.setDemondrug(json.demondrug);
			model.setPowercharm(json.powercharm);
			model.setPowertalon(json.powertalon);
			model.setDangoBooster(json.dangoBooster);
			model.setMightSeed(json.mightSeed);
			model.setDemonPowder(json.demonPowder);

			// Weapon Buffs
			model.setSpiritGauge(json.spiritGauge);
			model.setPowerSheathe(json.powerSheathe);
			model.setGroundSplitter(json.groundSplitter);
			model.setDangoMarksman(json.dangoMarksman);
			model.setDangoTemper(json.dangoTemper);
			model.setDangoTemper(json.dangoBombardier);

			// Misc. Buffs
			model.setMiscRaw(json.miscRaw);
			model.setMiscMultiplier(json.miscMultiplier);
			model.setMiscAffinity(json.miscAffinity);

			// Palico
			model.setPowerDrum(json.powerDrum);
			model.setRousingRoar(json.rousingRoar);

			// Hitzone
			model.setHitzone(json.hitzone);
			model.setHitzoneEle(json.hitzoneEle);

			// Skills
			model.setDisabledSkills(json.disabledSkills);

			// Combo
			model.setCombo(json.combo);

			router.push("/");
		} catch (e) {
			setError((e as Error).message);
		}
	}, [input, model, router]);

	const exportString = useMemo(() => {
		const keys = [
			"_weapon",
			"rampageSkills",
			"rampageDecos",
			"helm",
			"chest",
			"arms",
			"waist",
			"legs",
			"weaponDecos",
			"helmDecos",
			"chestDecos",
			"armsDecos",
			"waistDecos",
			"legsDecos",
			"charmDecos",
			"charmSkillOne",
			"charmSkillTwo",
			"demondrug",
			"powercharm",
			"powertalon",
			"dangoBooster",
			"mightSeed",
			"demonPowder",
			"spiritGauge",
			"powerSheathe",
			"groundSplitter",
			"dangoMarksman",
			"dangoTemper",
			"dangoBombardier",
			"miscRaw",
			"miscMultiplier",
			"miscAffinity",
			"powerDrum",
			"rousingRoar",
			"hitzone",
			"hitzoneEle",
			"disabledSkills",
			"combo",
		];

		const json = Object.keys(model)
			.filter((k) => keys.includes(k))
			.reduce<Partial<typeof model>>((acc, k) => {
				return {
					...acc,
					[k]: model[k as keyof typeof model],
				};
			}, {});

		return CryptoJS.AES.encrypt(JSON.stringify(json), NOT_SO_SECRET_KEY).toString();
	}, [model]);

	return (
		<Column>
			<Box head="Import">
				<textarea
					className="my-1"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					rows={10}
				/>
				<button disabled={!input} type="button" onClick={tryImport}>
					Import
				</button>
				{error && <p className="italic text-red-600">{error}</p>}
			</Box>
			<Box head="Export">
				<textarea className="my-1" disabled value={exportString} rows={10} />
				<button type="button" onClick={() => navigator.clipboard.writeText(exportString)}>
					Copy
				</button>
			</Box>
		</Column>
	);
};

export default Export;
