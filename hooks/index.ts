import { useState } from "react";

export const useForceUpdate = () => {
	const [, setV] = useState({});
	return () => setV({});
};

export { default as useModel, type Model } from "./useModel";
