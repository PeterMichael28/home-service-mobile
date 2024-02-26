import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalApi from '../../utils/globalApi';
import Heading from '../../components/Heading';

export default function Slider() {

    const [allSliders, setAllSliders] = useState()

    const getSliders = () => {
        globalApi.getSlider().then(res => setAllSliders(res?.sliders))
    }

    useEffect( () => {
        getSliders()
    }, [])


  return (
    <View>
      <Heading text='Offers for you' />

          <FlatList
          data={allSliders}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
              renderItem={ ( { item, i } ) => (
            <View style={{marginRight: 20}}>
                      <Image source={ { uri: item.image.url } } style={styles.sliderImage } />
            </View>
        )}
          
          
          />
    </View>
  )
}


const styles = StyleSheet.create( {
    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'cover'
    }
})