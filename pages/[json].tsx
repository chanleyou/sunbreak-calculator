import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Model } from "../model";

type Props = {
	setModel: (m: Model) => void;
};

const ModelImport: NextPage<Props> = ({ setModel }) => {
	const router = useRouter();
	const { json } = router.query;

	useEffect(() => {
		if (typeof json != "string") return;
		try {
			setModel(Model.from(JSON.parse(json)));
		} catch (e) {
			console.error(e);
		} finally {
			router.push("/");
		}
	}, [router, setModel, json]);

	return <></>;
};

export default ModelImport;
