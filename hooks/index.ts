import { useState } from "react";
import { Model } from "../model";

export const useForceUpdate = () => {
	const [v, setV] = useState(true);
	return () => setV(!v);
};

export const useModel = () => {
	const [model, setModel] = useState<Model>();

	return [model, setModel] as const;
};
