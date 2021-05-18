import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import { AntDesign } from '@expo/vector-icons';
import WatchImage from '../assets/watche.svg'
import { SvgFromUri } from 'react-native-svg'


interface Watch extends RectButtonProps{
    id?: string,
    name?: string,
    price?: number,
    rating?: number,
    amount?: number,
    about?: string
}

const WatchCard: React.FC<Watch> = ({name, id, price, rating, amount, about}: Watch) => {
  return (
  <RectButton style={styles.container}>
    <View style={styles.FavoriteContainer}>
      <AntDesign name="heart" color='#30353F' size={25}/>
    </View>
    <Image source={require('../assets/watch.png')} style={styles.Image}/>

    <View style={styles.infoContainer}>
      <Text>{name}</Text>
      <View>
        <AntDesign name="star" color={colors.white} size={16}/>
        <Text>{rating}</Text>
        <Text>{amount}</Text>
      </View>
      <Text>{price}</Text>
    </View>
  </RectButton>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'flex-start',
    marginVertical: 8,
    marginHorizontal: 6,
    height: 300,
  },

  FavoriteContainer: {
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15
  },

  Image: {
    width: 165,
    height: 165,
  },

  infoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default WatchCard;