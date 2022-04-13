import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 1.24;

const Details = ({navigation, route}) => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const [postData, setpostData] = useState(route?.params?.key);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <View style={mode=='light' ? styles.screen_light : styles.screen_dark}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={44}
        style={mode == 'light' ? styles.arrow_light : styles.arrow_dark}
        onPress={() => navigation.navigate('Dashboard')}
      />
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: postData.image}} style={styles.image} />
        </View>
        <View>
          <Text style={mode=='light' ? styles.headingText_light : styles.headingText_dark}>{postData.Title}</Text>
          <Text style={mode=='light' ? styles.bodyText_light : styles.headingText_dark}>{postData.Description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen_light: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15,
  },
  screen_dark: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 15,
  },
  image: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    resizeMode: 'cover',
    borderRadius: 17,
  },
  container: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
  },
  headingText_light: {
    fontSize: 29,
    fontWeight: '800',
    color: '#757D75',
    padding: '5%',
  },
  headingText_dark: {
    fontSize: 29,
    fontWeight: '800',
    color: '#EEEEEE',
    padding: '5%',
  },
  bodyText_light: {
    fontSize: 18,
    color: '#D2D7D3',
    marginLeft: 15,
    marginRight: 15,
  },
  bodyText_dark: {
    fontSize: 18,
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  arrow_light: {
    marginTop: 40,
    color: '#121212',
  },
  arrow_dark: {
      marginTop: 40,
      color: 'white',
  },
});

export default Details;
