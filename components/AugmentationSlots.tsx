import Image from 'next/image';

type Props = {
    value: number;
    maxValue: number;
};

const imgDivStyle: any = {
    "max-width": "20px",
    "display": "inline-block",
};

const AugmentationSlots = ({ value, maxValue }: Props) => {
    return (
        <div className="mt-3 flex-column">
            <div className="py-1">
                <p>Available augmentation slots: {value}</p>
            </div>
            <div className="flex-row">
                <div style={imgDivStyle}>
                    <img
                        src="/assets/empty_augm.svg"
                        alt="Deco icon"
                        width={20}
                        height={20}
                    />
                </div>
                <div style={imgDivStyle}>
                    <img
                        src="/assets/empty_augm.svg"
                        alt="Deco icon"
                        width={20}
                        height={20}
                    />
                </div>
                <div style={imgDivStyle}>
                    <img
                        src="/assets/empty_augm.svg"
                        alt="Deco icon"
                        width={20}
                        height={20}
                    />
                </div>
                <div style={imgDivStyle}>
                    <img
                        src="/assets/empty_augm.svg"
                        alt="Deco icon"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default AugmentationSlots;
