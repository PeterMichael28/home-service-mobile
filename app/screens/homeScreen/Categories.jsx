import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading';
import colors from '../../utils/colors';
import globalApi from '../../utils/globalApi';

export default function Categories() {

    const [allCategories, setAllCategories] = useState()

    const getCategories = () => {
        globalApi.getCategories().then(res => setAllCategories(res?.categories))
    }

    useEffect( () => {
        getCategories()
    }, [])



  return (
    <View style={{marginTop: 20}}>

<Heading text='Categories' viewAll={true}/>


<FlatList
          data={allCategories}
            //   horizontal={ true }
              numColumns = {4}
        //   showsHorizontalScrollIndicator={false}
              renderItem={ ( { item, i } ) => (
            <View style={styles.con}>
                      <View style={styles.iconsCon}>
                          
                      <Image source={ { uri: item?.icon.url } } style={{width: 30, height: 30} } />
                </View>

                <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>{item?.name}</Text>
            </View>
        )}
          
          
          />
    </View>
  )
}

const styles = StyleSheet.create( {
    con: {
        flex: 1,
        alignItems: 'center',
        // width: '22%',
        // justifyContent: 'space-between'
    },
    iconsCon: {
        backgroundColor: colors.light_gray,
        padding: 17,
        borderRadius: 99
    }
})