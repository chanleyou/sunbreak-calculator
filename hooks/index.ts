import { useState } from "react";
import { Model } from "../model";

export const useForceUpdate = () => {
	const [, setV] = useState({});
	return () => setV({});
};

export const useModel = () => {
	const [model, setModel] = useState<Model>();

	return [model, setModel] as const;
};
