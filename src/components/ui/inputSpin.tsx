import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner"

type Props ={
    guests: number;
    onSelectSpin: (guests: number) => void;
    minGuests: number;
    maxGuests: number;
    stepNumber: number;
    onColorMax: string;
    onColorMin: string;
}

const InputSpin = ({guests, onSelectSpin, minGuests, maxGuests, stepNumber, onColorMax, onColorMin} : Props ) => {

    const  { width, height } = Dimensions.get("window");

    return (
        <InputSpinner
            max={maxGuests}
            min={minGuests}
            step={stepNumber}
            colorMax={onColorMax}
            colorMin={onColorMin}
            value={guests}
            onChange={onSelectSpin}
            style={{
                width: width * 0.45,
            }}
        />
    );
}

export default InputSpin;