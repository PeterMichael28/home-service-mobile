import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';

const BusinessListItem = ({business}) => {
  return (
    <View style={styles.con}>
      <Image source={ { uri: business?.images[0]?.url } } style={styles.img } />

          <View style={styles.infoCon}>
              <Text style={{fontSize: 17, fontFamily: 'outfit-medium'}}>{business?.name }</Text>
              <Text style={{fontSize: 13, fontFamily: 'outfit', color:colors.grey}}>{business?.contactPeson }</Text>
              <Text style={{fontSize: 10, fontFamily: 'outfit', padding: 3, color:colors.pry, backgroundColor:colors.light_gray, borderRadius: 3, alignSelf: 'flex-start', paddingHorizontal: 7}}>{business?.categories[0]?.name }</Text>
    </View>
    </View>
  )
}

export default BusinessListItem

const styles = StyleSheet.create( {
    con: {
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10
    },
    infoCon: {
        padding: 7,
        gap: 3
    },
    img: {
        width: 160,
        height: 100,
        borderRadius: 10
    }
})