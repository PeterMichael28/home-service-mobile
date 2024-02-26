import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import BusinessListItem from './BusinessListItem';

const BusinessLists = () => {

    const [allBusinesses, setAllBusinesses] = useState()

    const getBusinessLists = () => {
        globalApi.getBusinessLists().then(res => setAllBusinesses(res?.businessLists))
    }

    useEffect( () => {
        getBusinessLists()
    }, [])



  return (
    <View style={{marginTop: 20}}>
      <Heading text='Latest Business' viewAll={true}/>

      <FlatList
          data={allBusinesses}
              horizontal={ true }
          showsHorizontalScrollIndicator={false}
              renderItem={ ( { item, i } ) => (
            <View style={{marginRight: 10}}>
                    <BusinessListItem business={ item } />
            </View>
        )}
          
          
          />
    </View>
  )
}

export default BusinessLists