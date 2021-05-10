import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react';
import colors from '../styles/colors';
import { SimpleLineIcons } from '@expo/vector-icons';
import fonts from '../styles/fonts';
import WatchCard from '../components/WatchCard'

interface Watch {
    id: string,
    name: string,
    price: number,
    rating: number,
    amount: number,
    about: string
}


function Home() {

    const [watches, setWatches] = useState<Watch>()

    const renderItem = ({ item }: any) => (
      <WatchCard title={item.title} />
    );
    

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
                <FlatList 
                    data={watch}
                    renderItem={renderItem}
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
        paddingVertical: 65,
        paddingHorizontal: 25,
    },

    headerContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
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
        width: '100%',
        
    }
})

export { Home } 