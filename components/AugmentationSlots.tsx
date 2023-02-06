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
                {
                    new Array(maxValue - value).fill(0).map((x, i) => (
                        <div key={`augm-icon-${i}`} style={imgDivStyle}>
                            <img
                                src="/assets/filled_augm.svg"
                                alt="Deco icon"
                                width={20}
                                height={20}
                            />
                        </div>
                    ))
                }
                {
                    new Array(value).fill(0).map((x, i) => (
                        <div key={`augm-icon-${value + i + 1}`} style={imgDivStyle}>
                            <img
                                src="/assets/empty_augm.svg"
                                alt="Deco icon"
                                width={20}
                                height={20}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AugmentationSlots;
