import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../components/TextInput';
import {Button} from '../components/Button';
import {registration} from '../api/Authentication';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signup = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const [enableShift, setenableShift] = React.useState(false);

  const NavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const onSubmit = () => {
    registration(email, password, fullName, image, NavigateToLogin);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        enabled={enableShift}
        style={styles.container}>
          <View>
            <AntDesign name='back' size={30} style={styles.backIcon} onPress={() => navigation.navigate('Welcome')}/>
          </View>
          <View style={styles.heading}>
            <Text style={styles.headingText}>
              Enter the details to create {'\n'}your new account.
            </Text>
          </View>
          <View style={{padding: "2%", paddingTop: ' 10%'}}>
            <Input
              placeholder={'Username'}
              value={fullName}
              changeText={text => {
                setFullName(text);
              }}
              onFocus={() => setenableShift(true)}
              newStyles={styles.textInput}
              placeholderTextColor = '#8c8b94'
            />
            </View>
            <View style={{padding: "2%"}}>
            <Input
              placeholder={'Email'}
              value={email}
              changeText={text => {
                setEmail(text);
              }}
              onFocus={() => setenableShift(true)}
              newStyles={styles.textInput}
              placeholderTextColor = '#8c8b94'
              />
              </View>
            <View style={{padding: "2%"}}>
            <Input
              placeholder={'Password'}
              secureTextEntry
              value={password}
              changeText={text => {
                setPassword(text);
              }}
              onFocus={() => setenableShift(true)}
              newStyles={styles.textInput}
              placeholderTextColor = '#8c8b94'
            />
          </View>
          <View style={styles.button}>
            <Button
              buttonColor="#E4E8EE"
              titleColor="black"
              title="Sign In"
              buttonStyle={{width: '90%', alignSelf: 'center'}}
              textStyle={{fontSize: 20}}
              onPress={onSubmit}
            />
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(18,16,26,1)',
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  heading: {
    paddingLeft: '7%',
    paddingBottom: '3%',
    paddingTop: '20%',
  },
  bottom: {
    alignItems: 'center',
    paddingTop: '5%',
  },
  bottomText: {
    color: '#EF5354',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  backIcon: {
    color: 'white',
    marginTop: '12%',
    justifyContent: 'flex-start',
    paddingLeft: '5%',
  },
  textInput: {
    backgroundColor: '#1d1c23',
    borderRadius: 15,
    padding: '5%',
  },
  button: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '26%',
  },
});

export default Signup;
