import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Input} from './TextInput';
import {Button} from './Button';
import * as ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const uid = useSelector(state => state?.auth?.accessToken);

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

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl == null && userData.Image) {
      imgUrl = userData.Image;
    }

    firestore()
      .collection('users')
      .doc(uid)
      .update({
        FullName: userData.FullName,
        Image: imgUrl,
      })
      .then(() => {
        console.log('User Updated!');
        // eslint-disable-next-line no-alert
        alert(
          'Profile Updated!',
          'Your profile has been updated successfully.',
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

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
      setImage(source.uri);
    }
  }

  console.log('image', image);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <AntDesign
          name="back"
          size={30}
          color={'black'}
          style={{paddingLeft: '4%'}}
          onPress={() => navigation.navigate('Profile')}
        />
        <Text style={styles.headingText}>Edit Profile</Text>
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: image
              ? image
              : userData
              ? userData.Image ||
                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
              : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
          }}
          style={styles.imageContainer}
        />
      </View>
      <View style={styles.buttonAlign}>
        <View>
          <Button
            buttonColor="transparent"
            titleColor="#000"
            title="Gallery"
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#1c1c1c',
              borderRadius: 6,
              width: 100,
            }}
            textStyle={{fontSize: 20}}
            onPress={() => openGallery()}
          />
        </View>
        <View>
          <Button
            buttonColor="transparent"
            titleColor="#000"
            title="Camera"
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: '#1c1c1c',
              borderRadius: 6,
              width: 100,
            }}
            textStyle={{fontSize: 20}}
          />
        </View>
      </View>
      <View style={styles.input}>
        <Input
          value={userData ? userData.FullName : ''}
          changeText={txt => setUserData({...userData, FullName: txt})}
          placeholder={'Username'}
          placeholderTextColor={'black'}
          newStyles={styles.textInput}
          underlineColorAndroid="black"
        />
      </View>
      <View>
        <Button
          buttonColor="transparent"
          titleColor="#000"
          title="SUBMIT"
          // eslint-disable-next-line react-native/no-inline-styles
          buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
          }}
          textStyle={{fontSize: 20}}
          onPress={handleUpdate}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headingText: {
    fontSize: 20,
    color: 'black',
    marginRight: '35%',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '9%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  imageContainer: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  textInput: {
    padding: '5%',
  },
  input: {
    padding: '10%',
  },
  buttonAlign: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
