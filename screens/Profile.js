import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {handleSignOut} from '../redux/action/AuthAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';


const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const {t} = useTranslation();

  const uid = useSelector(state => state?.auth?.accessToken);
  const dispatch = useDispatch();
  function Logout() {
    dispatch(handleSignOut());
  }

  const getUser = async () => {
    const currentUser = await firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    navigation.addListener('focus', () => setLoading(!loading));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, loading]);

  return (
    <SafeAreaView style={styles.screen_light}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{t('profile')}</Text>
        <AntDesign
          name="setting"
          size={30}
          color={'black'}
          style={{paddingLeft: '50%'}}
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
      <View style={styles.image}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image
            style={styles.imageAlg}
            source={{
              uri: userData
                ? userData.Image
                : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>
          {userData ? userData.FullName : 'Name not assigned'}
        </Text>
        <Text style={styles.title}>
          {userData ? userData.Email : 'Email not assigned'}
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          <View style={styles.textIcon}>
            <View style={styles.icons}>
              <AntDesign name="creditcard" size={25} color={'black'} />
            </View>
            <Text style={styles.bottomText}>{t('billing_details')}</Text>
            <MaterialCommunityIcons name="forward" size={30} color={'black'} />
          </View>
          <View style={styles.textIcon}>
            <View style={styles.icons}>
              <AntDesign name="user" size={25} color={'black'} />
            </View>
            <Text style={styles.bottomText}>{t('user_management')}</Text>
            <MaterialCommunityIcons name="forward" size={30} color={'black'} />
          </View>
          <View style={styles.textIcon}>
            <View style={styles.icons}>
              <AntDesign name="infocirlce" size={25} color={'black'} />
            </View>
            <Text style={styles.bottomText}>{t('information')}</Text>
            <MaterialCommunityIcons name="forward" size={30} color={'black'} />
          </View>
          <View style={styles.textIcon}>
            <View style={styles.icons}>
              <AntDesign
                name="logout"
                size={25}
                color={'black'}
                onPress={() => Logout()}
              />
            </View>
            <Text style={styles.bottomText} onPress={() => Logout()}>
            {t('logout')}
            </Text>
            <MaterialCommunityIcons
              name="forward"
              size={30}
              color={'black'}
              onPress={() => Logout()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen_light: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  screen_dark: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headingText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginTop: '9%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  imageAlg: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  bottom: {
    flex: 2,
    backgroundColor: 'white',
    marginTop: '5%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bottomContainer: {
    padding: '5%',
  },
  textIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4%',
  },
  bottomText: {
    color: 'black',
    fontSize: 20,
    padding: 5,
    marginHorizontal: 15,
  },
  icons: {
    backgroundColor: '#dad9dd',
    height: 40,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    padding: 7,
  },
});
