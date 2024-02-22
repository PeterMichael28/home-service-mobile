import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import colors from '../../utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function HomeHeader() {

    const { user, isLoading } = useUser();
    
  return user && (
    <View style={styles.con}>

        {/* profile section */}
      <View style={styles.profileConMain}>
          <View style={styles.profileCon}>
              <Image source={ { uri: user?.imageUrl } } style={styles.userImage } />

              <View >
                  <Text style={{color:colors.white, fontFamily:'outfit'}}>Welcome,</Text>
                  <Text style={{color:colors.white, fontSize: 20, fontFamily:'outfit-medium'}}>{user?.fullName }</Text>
              </View>
      </View>
        
      <MaterialCommunityIcons name="bookmark-plus-outline" size={32} color={colors.white} />
      </View>


      {/* search bar */}
          <View style={styles.searchBarCon}>
              <TextInput placeholder='search' style={ styles.textInput} />

              <FontAwesome name="search" size={24} color={colors.pry} style={ styles.searchBtn}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create( {
    con: {
        padding: 20,
        // paddingTop: 40,
        backgroundColor: colors.pry,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileConMain: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    profileCon: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,

    },
    searchBarCon: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 10,
        marginBottom:10
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        borderRadius: 8,
        width: '80%',
        fontSize: 16
        
    },
    searchBtn: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 8
    }

})