import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();

export default function Login() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
    const onPress = React.useCallback( async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();
 
            if ( createdSessionId ) {
                setActive( { session: createdSessionId } );
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch ( err ) {
            console.error( "OAuth error", err );
        }
    })

  return (
    <View style={{alignItems: 'center'}}>
          <Image source={ require( '../../../assets/images/login.png' ) } style={ styles.loginImage } />

          <View style={styles.subCon}>
              <Text style={{fontSize: 22, color:colors.white, textAlign: 'center'}}> 
                  Welcome to the World of <Text style={{fontWeight: 'bold'}}>Professional Cleaning and repair</Text> Service
              </Text>
 
              <Text style={{fontSize: 10, textAlign: "center", marginTop: 10, color:colors.white}}>Best App to Find Services near you</Text>


              <TouchableOpacity style={styles.button}  onPress={onPress}>
                  <Text style={{textAlign: 'center', fontSize: 17, color:colors.pry}}>Get Started</Text>
              </TouchableOpacity>

              
          </View>
    </View>
  )
}

const styles = StyleSheet.create( {
    loginImage: {
        width: 230,
        height: 400,
        borderColor: colors.black,
        marginTop: 30,
        borderWidth: 4,
        borderRadius: 15
    },
    subCon: {
        width: '100%',
        backgroundColor: colors.pry,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding:20
    },
    button: {
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 99,
        marginTop: 40
    }
})





