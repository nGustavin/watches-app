import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';
const watch = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Apple Watch',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Apple Watch 2',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Apple Watch 3',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Apple Watch 4',
      },
]

interface Watch {
    title: string
}

const WatchCard: React.FC<Watch> = ({title}: Watch) => {
  return (
  <View>
      <Text>{title}</Text>
  </View>);
}

export default WatchCard;