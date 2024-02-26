import { Text, View } from "react-native";
import HomeHeader from "./HomeHeader";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessLists from "./BusinessLists";


export default function HomeSCreen() {

    return (
        <View>
            
            
            {/* header */}
            <HomeHeader />

            <View style={{padding: 20}}>
                
            {/* slider */}
            <Slider />

            {/* categories */}
            <Categories />

            {/* business lists */}
            <BusinessLists />
        </View>
        </View>
    )
}