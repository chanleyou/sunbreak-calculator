import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useMemo, useState } from "react";
import CryptoJS from "crypto-js";
import { Box, Column } from "../components";
import { Model } from "../model";

type Props = {
	model: Model;
	setModel: (m: Model) => void;
};

const NOT_SO_SECRET_KEY = "SUNBREAK";

const Export: NextPage<Props> = ({ model, setModel }) => {
	const router = useRouter();
	const [input, setInput] = useState("");
	const [error, setError] = useState("");

	const tryImport = useCallback(() => {
		setError("");
		try {
			const decrypted = CryptoJS.AES.decrypt(input, NOT_SO_SECRET_KEY);
			const toString = decrypted.toString(CryptoJS.enc.Utf8);
			const json = JSON.parse(toString);
			setModel(Model.from(json));
			router.push("/");
		} catch (e) {
			setError((e as Error).message);
		}
	}, [input, setModel, router]);

	const importValue = useMemo(
		() => CryptoJS.AES.encrypt(JSON.stringify(model), NOT_SO_SECRET_KEY).toString(),
		[model],
	);

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
				{error && <p className="text-xs italic text-red-600">{error}</p>}
			</Box>
			<Box head="Export">
				<textarea className="my-1" disabled value={importValue} rows={10} />
				<button type="button" onClick={() => navigator.clipboard.writeText(importValue)}>
					Copy
				</button>
			</Box>
		</Column>
	);
};

export default Export;
