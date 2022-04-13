import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';

export const registration = async (email, password, fullName, image, callBack) => {
  try {
    const userData = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    await firebase.firestore().collection('users').doc(userData.user.uid).set({
      FullName: fullName,
      Email: email,
      Image: image,
    });

    callBack();
  } catch (error) {
    alert(error.message);
  }
};
