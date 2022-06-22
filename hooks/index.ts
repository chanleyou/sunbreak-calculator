import { useState } from "react";
import { Model } from "../data";

export const useForceUpdate = () => {
	const [, setV] = useState({});
	return () => setV({});
};

export const useModel = () => {
	const [model, setModel] = useState<Model>();

	return [model, setModel] as const;
};

export { default as useModelContext } from "./useModelContext";
