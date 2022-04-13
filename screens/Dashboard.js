/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.54;

const Dashboard = ({navigation}) => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const [lastDoc, setlastDoc] = useState(null);
  const [Data, setData] = useState([]);

  const GetData = async () => {
    const db = firestore().collection('SneakerDatabase');
    const snapshot = await db.orderBy('id').get();
    if (!snapshot.empty) {
      let newDatabase = [];
      setlastDoc(snapshot.docs[snapshot.docs.length - 1]);
      for (let i = 0; i < snapshot.docs.length; i++) {
        newDatabase.push(snapshot.docs[i].data());
      }
      setData(newDatabase);
    } else {
      setlastDoc(null);
    }
  };

  useEffect(() => {
    setMode(theme.mode);
    GetData();
  }, [theme]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.imageCar}>
        <TouchableOpacity onPress={() => navigation.navigate('Details', {key: item})}>
          <Image source={{uri: item.image}} style={styles.photo} />
        </TouchableOpacity>
        <Text style={styles.heading}>{item.Title}</Text>
      </View>
    );
  };

  return (
    <View style={mode == 'light' ? styles.screen_light : styles.screen_dark}>
      <View style={[StyleSheet.absoluteFillObject]}>
        {/* {Data.map((item, index) => {
          return <Image key={`image${index}`} source={{uri: JSON.stringify(item.image)}} style={[StyleSheet.absoluteFillObject]}/>;
        })} */}
        <Image
          source={require('../assets/image/bg.jpg')}
          style={styles.bgImage}
          blurRadius={30}
        />
      </View>

      <FlatList
        data={Data}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
  },
  screen_light: {
    backgroundColor: 'white',
    flex: 1,
  },
  screen_dark: {
    backgroundColor: '#121212',
    flex: 1,
  },
  imageCar: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  bgImage: {
    width: ITEM_WIDTH * 1.9,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 25,
    color: 'white',
  },
});
