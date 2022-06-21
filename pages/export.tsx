import { NextPage } from "next";
import React from "react";
import { Box } from "../components";
import { Model } from "../model";

type Props = {
	model: Model;
};

const Export: NextPage<Props> = ({ model }) => {
	const link = `localhost:3000/${JSON.stringify(model)}`;

	return (
		<Box head="Export">
			<textarea className="my-1" disabled value={link} rows={5} />
			<button type="button" onClick={() => navigator.clipboard.writeText(link)}>
				Copy Link
			</button>
		</Box>
	);
};

export default Export;
