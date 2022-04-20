import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Rating from '../components/Rating';
import {Button} from '../components/Button';
import { Input } from '../components/TextInput';
import { UploadData } from '../api/ItemService';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 1;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const Details = ({navigation, route}) => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const [postData, setpostData] = useState(route?.params?.key);
  const [editDetail, seteditDetail] = useState(postData);

  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  return (
    <ScrollView>
      <View>
        <ImageBackground source={{uri: postData.image}} style={styles.image} />
        <AntDesign
          name="back"
          color={'white'}
          size={30}
          style={styles.icon}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Rating />
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomHeading}>
          <Text style={styles.headingText}>{postData.Title}</Text>
          <Input
          value={ editDetail ? editDetail.detail : ''}
          changeText={txt => seteditDetail({...editDetail, detail: txt})}
          placeholder={'Description'}
          placeholderTextColor={'black'}
          multiline
        />
        </View>
        <View style={styles.button}>
          <Button
          buttonColor={'#292d3e'}
            title={'ADD TO CART'}
            buttonStyle={{
              width: '60%',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#292d3e',
              borderRadius: 25,
            }}
          />
          <View style={styles.circle}>
            <AntDesign name='heart' color={'white'} size={25} style={{padding: '25%'}}/>
          </View>
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
    paddingTop: '5%',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '45%',
    padding: 20
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#ff468e',
    marginTop: '5%',

  },
});

export default Details;
