import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 1;
const Rating = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.rating}>
        <AntDesign name="star" color={'white'} size={15} />
        <AntDesign name="star" color={'white'} size={15} />
        <AntDesign name="star" color={'white'} size={15} />
        <AntDesign name="star" color={'white'} size={15} />
        <AntDesign name="staro" color={'white'} size={15} />
        <Text style={styles.text}>4</Text>
        <Text style={styles.text}>SEE REVIEWS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    backgroundColor: '#ffba59',
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    borderRadius: 25,
    paddingVertical: 5,
    padding: 10
  },
  text: {
    paddingHorizontal: 10,
    color: 'white',
  },
  screen: {
      justifyContent: 'center',
      alignItems: 'center',
    marginTop: '70%',
    position: 'absolute',
    marginLeft: '15%',
  },
});

export default Rating;
