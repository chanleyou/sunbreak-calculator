import { memo } from "react";
import { SkillKey, Skills, SkillSlot } from "../data";
import { Select } from ".";

type Props = {
	value?: SkillSlot;
	onSetValue: (ss?: SkillSlot) => void;
};

const CharmSlot = ({ value, onSetValue }: Props) => {
	return (
		<div className="grid grid-cols-5 gap-2">
			<div className="col-span-4">
				<Select
					value={value ? value[0] : undefined}
					label="Skill"
					options={Object.keys(Skills) as SkillKey[]}
					renderer={(t) => Skills[t as SkillKey].name}
					formatter={(t) => t}
					onSelectOption={(skill) => {
						const newValue = skill ? ([skill, 1] as SkillSlot) : undefined;
						value = newValue;
						onSetValue(newValue);
					}}
				/>
			</div>
			<Select
				value={value ? value[1] : undefined}
				label="Level"
				options={[1, 2, 3]}
				disabled={!value}
				formatter={(n) => n.toString()}
				onSelectOption={(level) => {
					const newValue = value ? ([value[0], level] as SkillSlot) : undefined;
					value = newValue;
					onSetValue(newValue);
				}}
			/>
		</div>
	);
};

export default memo(CharmSlot);
