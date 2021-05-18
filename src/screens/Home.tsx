import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import colors from '../styles/colors';
import { SimpleLineIcons } from '@expo/vector-icons';
import fonts from '../styles/fonts';
import WatchCard from '../components/WatchCard'
import { api } from '../services/api';
import FilterBadge from '../components/Filters';

interface Watch{
  _id: string,
  name: string,
  price: number,
  rating: number,
  amount: number,
  about: string,
  key: number
}

function Home() {
  
  const [watches, setWatches] = useState<Watch[]>([])
  
  useEffect(() => {
    async function fetchWatches(){ 
      const { data } = await api.get('/watches') 
      setWatches(data)
    }
    fetchWatches()
  }, [])
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.LeftSide}>
          <View style={{alignItems: 'center', flexDirection: "row", justifyContent: 'center', marginBottom: -5}}>
            <SimpleLineIcons name="diamond" size={24} color={colors.pink} />
            <Text style={styles.FeaturedText}>  Featured</Text>
          </View> 
          <Text style={styles.title}>Watches</Text>
        </View>
        <SimpleLineIcons name="handbag" size={28} color="white" />
      </View>

      
      <View style={styles.itemList}>
      <View style={styles.filterList}>
        <FilterBadge name="Metal" isPurple/>
        <FilterBadge name="Silver" />
      </View>
        <FlatList 
          keyExtractor={(items) => items._id}
          data={watches}
          renderItem={({ item }) => (
            <WatchCard name={item.name} key={item._id}/>
            )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
        />
      </View>
    </SafeAreaView>
    )
  }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 65,
        // paddingHorizontal: 25,
      },
      
      headerContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 25,
      },
      
      LeftSide: {
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      
      FeaturedText: {
        color: colors.pink,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: fonts.interMedium
        
      },
      
      title: {
        color: colors.white,
        fontSize: 32,
        fontFamily: fonts.interLight 
      },
      
      itemList: {
        backgroundColor: colors.foreground,
        flex: 1,
        paddingHorizontal: 15,
        // justifyContent: 'center',
        marginTop: 25
        
      },

      filterList: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 6,
        marginVertical: 10
      }
    })
    
    export { Home } 