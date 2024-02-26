import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SingleBusiness from './SingleBusiness';
import colors from '../../utils/colors';


export default function BusinessListsByCategoryNameScreen() {
    const navigation = useNavigation()
    const param = useRoute( ).params;

    const [allBusiness, setAllBusiness] = useState()

    const getBusinessListsByCategoryName = () => {
        globalApi.getBusinessListsByCategoryName(param.category ).then(res => setAllBusiness(res?.businessLists))
    }

    useEffect( () => {
        param && getBusinessListsByCategoryName()
    }, [param])


  return (
    <View style={{padding: 20, paddingTop: 30}}>
        {/* top bar */}
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', gap: 10}} onPress={() => navigation.goBack()}>
              
      <Ionicons name="arrow-back-outline" size={30} color="black" />
          <Text style={{fontSize: 24, fontFamily: 'outfit-medium'}}>{param.category }</Text>
        </TouchableOpacity>

     { allBusiness.length > 0 ?  <FlatList
          data={allBusiness}
            style={{marginTop: 15}}
              renderItem={ ( { item, i } ) => (
            <SingleBusiness business={item} />
        )}
          
          
          /> : (
                  <Text style={{fontFamily: 'outfit-medium', fontSize: 20, textAlign: 'center', marginTop: 20, color:colors.grey}}>
                      No Business Found
                  </Text>
          )}


    </View>
  )
}