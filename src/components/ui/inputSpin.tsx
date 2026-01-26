import { Dimensions } from "react-native";
import InputSpinner from "react-native-input-spinner"

type Props ={
    onSelectSpin: (guests: string) => void;
}

const InputSpin = ({onSelectSpin} : Props ) => {

    const  { width, height } = Dimensions.get("window");

    return (
        <InputSpinner
            max={6}
            min={1}
            step={1}
            colorMax={"#253241ff"}
            colorMin={"#253241ff"}
            style={{
                width: width * 0.45,
            }}
        />
    );
}

export default InputSpin;