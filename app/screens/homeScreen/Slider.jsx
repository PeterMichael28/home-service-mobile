import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import globalApi from '../../utils/globalApi';

export default function Slider() {

    const getSliders = () => {
        globalApi.getSlider.then(res => console.log(res))
    }

    useEffect( () => {
        getSliders()
    }, [])
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}