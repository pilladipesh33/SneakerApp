/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  ActivityIndicator,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width: screenWidth} = Dimensions.get('screen');
// const ITEM_WIDTH = width * 0.7;
// const ITEM_HEIGHT = ITEM_WIDTH * 1.54;
// const SPACING = 10;

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

  function sendData(item) {
    var title = item.Title;
    var description = item.detail;
    item.Title = title;
    item.Description = description;
    navigation.navigate('Details', {key: item});
  }

  useEffect(() => {
      setMode(theme.mode);
      GetData();
      LogBox.ignoreAllLogs();
  }, [theme]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.item}>
          <Image
            source={{uri: item.image}}
            containerStyle={styles.imageContainer}
            style={styles.images}
          />
        </View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => sendData(item)}>
          <View style={styles.rect}>
            <Text style={styles.buttonText}>{item.Title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.circleAlgn}>
          <View style={styles.circle}>
            <AntDesign
              name="heart"
              color={'white'}
              size={25}
              style={styles.heart}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <View style={styles.icons_1}>
          <MaterialCommunityIcons name="dots-grid" color={'black'} size={20} />
          <View>
            <AntDesign name="search1" color={'black'} size={20} />
          </View>
        </View>
        <Text style={styles.headingText}>Sneaker Store</Text>
      </View>
      <View>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 100}
          data={Data}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  screen: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'white',
  },
  image: {
    position: 'absolute',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth + 60,
    marginTop: '15%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  images: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: 25,
    width: '90%',
  },
  heading: {
    marginLeft: '5%',
    marginTop: '10%',
    marginRight: '5%',
  },
  headingText: {
    fontSize: 40,
    color: '#B9345A',
    padding: '4%',
  },
  icons_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rect: {
    width: screenWidth - 276,
    backgroundColor: '#292d3e',
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    marginLeft: 30,
    marginTop: -30,
    padding: '5%',
  },
  buttonText: {
    color: 'white',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#B9345A',
  },
  circleAlgn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    marginLeft: '25%',
  },
  heart: {
    padding: 12,
  },
});
