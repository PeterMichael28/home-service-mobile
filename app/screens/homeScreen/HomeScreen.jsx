import { Text, View } from "react-native";
import HomeHeader from "./HomeHeader";
import Slider from "./Slider";


export default function HomeSCreen() {

    return (
        <View>
            
            
            {/* header */}
            <HomeHeader />

            {/* slider */}
            <Slider />
        </View>
    )
}