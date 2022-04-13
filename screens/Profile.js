import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {useSelector, useDispatch} from 'react-redux';
import {handleSignOut} from '../redux/action/AuthAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {
  const tadaAnimRef = useRef();

  const [imageId, setimageId] = useState('');
  const [imageUri, setimageUri] = useState(null);
  const [name, setName] = useState('')

  const dispatch = useDispatch();
  const userObject = useSelector(state => state.auth.user);
  const uid = useSelector(state => state?.auth?.accessToken);

  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);

  const userDetailRef = firestore().collection('users').doc(uid)

  React.useEffect(() => {
    userObject;
    imageUri
    setMode(theme.mode);
    getProfileDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, imageUri]);

  function Logout() {
    dispatch(handleSignOut());
  }

  function openGallery() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      parseResponse(res);
    });
  }

  function parseResponse(res) {
    console.log('Response = ', res);
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      const source = {uri: res.assets[0].uri};
      setimageId(source);
    }
  }

  const onUpload = () => {
    try {
      userDetailRef.update({
        Image: imageId.uri,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const getProfileDetails = () =>{
    try {
      userDetailRef.get()
      .then((doc) => {
        if (doc.exists) {
          setimageUri(doc.data().Image);
          setName(doc.data().FullName);
        }
      });
    }
    catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView
      style={mode == 'light' ? styles.screen_light : styles.screen_dark}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <Image
          style={mode == 'light' ? styles.userImg_light : styles.userImg_dark}
          source={{uri: imageUri}}
        />
        <View
          style={
            mode == 'light'
              ? styles.userBtnWrapper_light
              : styles.userBtnWrapper_dark
          }>
          <Animatable.View ref={tadaAnimRef}>
            <TouchableOpacity
              style={
                mode == 'light' ? styles.userBtn_light : styles.userBtn_dark
              }
              onPress={() => {
                onUpload();
                if (false) {
                  tadaAnimRef.current.tada(800);
                }
              }}>
              <Text
                style={
                  mode == 'light'
                    ? styles.userBtnTxt_light
                    : styles.userBtnTxt_dark
                }>
                Upload
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View ref={tadaAnimRef}>
            <TouchableOpacity
              style={
                mode == 'light' ? styles.userBtn_light : styles.userBtn_dark
              }
              onPress={() => {
                openGallery()
                if (false) {
                  tadaAnimRef.current.tada(800);
                }
              }}>
              <Text
                style={
                  mode == 'light'
                    ? styles.userBtnTxt_light
                    : styles.userBtnTxt_dark
                }>
                Gallery
              </Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <Text
          style={
            mode == 'light' ? styles.userName_light : styles.userName_dark
          }>
          Username: {name}
        </Text>
        <Text
          style={
            mode == 'light' ? styles.aboutUser_light : styles.aboutUser_dark
          }>
          Email: {userObject?.email}
        </Text>
        <View
          style={mode == 'light' ? styles.Bottom_light : styles.Bottom_dark}>
          <MaterialCommunityIcons
            name="power"
            size={25}
            style={mode == 'light' ? styles.icon_light : styles.icon_dark}
          />
          <TouchableOpacity
            onPress={() => {
              Logout();
            }}>
            <Text
              style={
                mode == 'light'
                  ? styles.buttomText_light
                  : styles.buttomText_dark
              }>
              Logout
            </Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="tools"
            size={23}
            style={mode == 'light' ? styles.icon_light : styles.icon_dark}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Text
              style={
                mode == 'light'
                  ? styles.buttomText_light
                  : styles.buttomText_dark
              }>
              Setting
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen_light: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen_dark: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container_light: {
    flex: 1,
    padding: 20,
  },
  container_dark: {
    flex: 1,
    padding: 20,
  },
  userImg_light: {
    height: 200,
    width: 200,
    borderRadius: 105,
    marginTop: 40,
  },
  userImg_dark: {
    height: 200,
    width: 200,
    borderRadius: 105,
    margintop: 40,
  },
  userName_light: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: '15%',
    paddingBottom: '10%',
    color: 'black',
  },
  userName_dark: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: '15%',
    paddingBottom: '10%',
    color: 'white',
  },
  userBtnWrapper_light: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    paddingTop: '6%',
  },
  userBtnWrapper_dark: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    paddingTop: '6%',
  },
  userBtn_light: {
    borderColor: '#B9345A',
    borderWidth: 3,
    borderRadius: 8,
    paddingVertical: '9%',
    paddingHorizontal: '9%',
    marginHorizontal: 10,
    alignItems: 'center',
    color: 'black',
  },
  userBtn_dark: {
    borderColor: '#B9345A',
    borderWidth: 3,
    borderRadius: 8,
    paddingVertical: '9%',
    paddingHorizontal: '9%',
    marginHorizontal: 10,
    alignItems: 'center',
    color: 'white',
  },
  aboutUser_light: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutUser_dark: {
    fontSize: 19,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  Bottom_light: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '40%',
  },
  Bottom_dark: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '40%',
  },
  buttomText_light: {
    fontSize: 20,
    color: 'black',
  },
  buttomText_dark: {
    fontSize: 20,
    color: 'white',
  },
  userBtnTxt_dark: {
    color: 'white',
  },
  userBtnTxt_light: {
    color: 'black',
  },
  icon_light: {
    color: 'black',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  icon_dark: {
    color: 'white',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
});
