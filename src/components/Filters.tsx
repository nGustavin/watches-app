import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import colors from '../styles/colors';
import React from 'react'
import fonts from '../styles/fonts';

interface BadgeProps{
    name?: string;
    isPurple?: boolean;
}

const FilterBadge: React.FC<BadgeProps> = ({ name, isPurple }: BadgeProps) => {
  return (
    <TouchableOpacity style={isPurple ? styles.containerColor1 : styles.containerColor0}>
        <Text style={
          isPurple ? styles.textPurple : styles.textGreen
        }>{name}</Text>
        {
          isPurple ? <SimpleLineIcons name="close" size={17}  color={colors.purple}/> : <SimpleLineIcons name="close" size={17}  color={colors.green}/>
        }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerColor0: {
    height: 36,
    width: 100,
    borderRadius: 9,
    backgroundColor: colors.green_dark500,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.green,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    marginLeft: 2,
  },

  containerColor1: {
    height: 36,
    width: 100,
    borderRadius: 9,
    backgroundColor: colors.purple_dark500,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },

  textGreen: {
    color: colors.green,
    fontFamily: fonts.interLight,
    fontSize: 15
  },

  textPurple: {
    color: colors.purple,
    fontFamily: fonts.interLight,
    fontSize: 15
  }
})

export default FilterBadge;