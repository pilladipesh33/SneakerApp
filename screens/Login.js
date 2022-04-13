import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {Input} from '../components/TextInput';
import {Button} from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {handleSignin} from '../redux/action/AuthAction';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [enableshift, setEnableshift] = useState(false);

  function onSubmit() {
    try {
      dispatch(handleSignin(email, password));
    }
    catch {
      error => alert(error.msg);
    }
  }
  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={enableshift}>
          <View>
            <AntDesign name='back' size={30} style={styles.backIcon} onPress={() => navigation.navigate('Welcome')}/>
          </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Let's sign you in.</Text>
          <Text style={styles.headingText}>Welcome back. </Text>
        </View>
        <View style={{padding: "5%"}}>
          <Input
            placeholder={'Email'}
            value={email}
            changeText={setEmail}
            onFocus={() => setEnableshift(true)}
            newStyles={styles.textInput}
            placeholderTextColor={'black'}
          />
          </View>
          <View style={{padding: "5%"}}>
          <Input
            placeholder={'Password'}
            secureTextEntry
            value={password}
            changeText={setPassword}
            onFocus={() => setEnableshift(true)}
            newStyles={styles.textInput}
            placeholderTextColor={'black'}
          />
          <View style={styles.bottom}>
        <TouchableOpacity style={styles.bottomText} onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.buttonText}>Forgot Password</Text>
        </TouchableOpacity>
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
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '58%',
    width: '90%',
    borderRadius: 15,
  },
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  heading: {
    marginTop: '30%',
    paddingLeft: '7%',
  },
  bottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '5%',
  },
  bottomText: {
    color: '#EF5354',
    //paddingTop: '5%',
  },
  buttonText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'white',
  },
  page: {
    flex: 1,
    backgroundColor: 'rgba(18,16,26,1)',
    paddingLeft: '2%',
  },
  backIcon: {
    color: 'white',
    marginTop: '10%',
    justifyContent: 'flex-start',
  },
  textInput: {
    backgroundColor: '#84848c',
    borderRadius: 15,
    padding: '5%',
  },
  button: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'center',
    height: '46%',
  },
});

export default Login;
