import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, viewAll}) {
  return (
    <View style={styles.con}>
       <Text style={styles.heading}>{text}</Text>

       {viewAll && <Text>View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create( {
    con: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    heading: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    }
})