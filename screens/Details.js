import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const Details = ({navigation, route}) => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const [postData, setpostData] = useState(route?.params?.key);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <ScrollView>
      <View >
        <ImageBackground source={{uri: postData.image}} style={styles.image} />
        <AntDesign
          name="back"
          color={'white'}
          size={30}
          style={styles.icon}
          onPress={() => navigation.navigate('Dashboard')}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomHeading}>
        <Text style={styles.headingText}>{postData.Title}</Text>
        <Text style={styles.bodyText}>{postData.Description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen_light: {
    flex: 2,
    backgroundColor: 'black',
  },
  screen_dark: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 15,
  },
  image: {
    height: ITEM_HEIGHT - 80,
    width: ITEM_WIDTH,
    resizeMode: 'cover',
    borderBottomEndRadius: 17,
  },
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
  },
  icon: {
    flex: 1,
    position: 'absolute',
    marginTop: '10%',
    paddingLeft: '15%',
  },
  bottom: {
    backgroundColor: 'white',
    height: ITEM_HEIGHT,
    marginTop: -30,
    borderTopRightEndRadius: 30,
    borderRadius: 30,
  },
  bottomHeading: {
    marginTop: '10%',
    marginLeft: '5%',
  },
  headingText: {
    fontSize: 40,
    fontWeight: '700',
  },
  bodyText: {
    paddingTop: '5%'
  }
});

export default Details;
