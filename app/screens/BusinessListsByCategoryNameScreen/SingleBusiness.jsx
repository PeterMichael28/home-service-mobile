import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';
import { FontAwesome6 } from '@expo/vector-icons';


export default function SingleBusiness({business}) {
  return (
    <View style={styles.con}>
          <Image source={ { uri: business?.images[ 0 ]?.url } } style={ styles.img } />
          
          <View style={styles.infoCon}>
              <Text style={{fontSize: 15, fontFamily: 'outfit', color:colors.grey}}>{business?.contactPeson }</Text>
              <Text style={{fontSize: 18, fontFamily: 'outfit-bold'}}>{business?.name }</Text>
              <Text>
                  <FontAwesome6 name="location-dot" size={ 20 } color={ colors.pry } style={ { marginRight: 6 } } /> 
                  <Text style={ { fontSize: 16, fontFamily: 'outfit', color: colors.grey } }>{ business?.address }</Text>
              </Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create( {
    con: {
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: 'row',
        gap: 10
    },
    infoCon: {
        // padding: 7,
        gap: 7,
        

    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10
    }
})