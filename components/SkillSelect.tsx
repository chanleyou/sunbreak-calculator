import React, { useMemo, useState } from "react";
import { Select } from ".";

type UseSkillSelectProps = {
	label: string;
	note?: string;
};

export default function useSkillSelect<
	O extends Array<T> | Record<string, T>,
	T,
	K = O extends Array<T> ? number : string,
>(skill: O): [K, React.FC<UseSkillSelectProps>] {
	const options = Object.keys(skill);
	const [value, setValue] = useState<typeof options[number]>();

	const output = useMemo(() => {
		if (Array.isArray(skill)) return Number(value);
		return value;
	}, [value, skill]);

	return [
		output as unknown as K,
		({ label, note }: UseSkillSelectProps) => (
			<Select
				label={label}
				options={options}
				value={value}
				onSelectOption={setValue}
				note={note}
				formatter={(o) => o.toString()}
			/>
		),
	];
}
