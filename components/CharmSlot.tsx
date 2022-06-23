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
						if (!skill) {
							onSetValue(undefined);
							return;
						}
						const newValue = [skill, 1] as SkillSlot;
						onSetValue(newValue);
					}}
				/>
			</div>
			<Select
				value={value ? value[1] : undefined}
				options={[1, 2, 3]}
				disabled={!value}
				formatter={(n) => n.toString()}
				onSelectOption={(level) => {
					if (!level) level = 1;
					const newValue = [value![0], level] as SkillSlot;
					onSetValue(newValue);
				}}
			/>
		</div>
	);
};

export default memo(CharmSlot);
