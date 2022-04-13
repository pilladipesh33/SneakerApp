import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Input} from '../components/TextInput';
import {Button} from '../components/Button';
import {forgotPassword} from '../redux/action/AuthAction';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');

  const navigationToLogin = () => {
    navigation.navigate('Login');
  };

  function onSubmit() {
    forgotPassword(email, navigationToLogin());
  }

  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleText}> Forgot {'\n'} Password</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          Did someone forgot their password?
        </Text>
      </View>
      <View style={styles.heading2}>
        <Text style={styles.headingText2}>
          Just enter the email address you've used to {'\n'}register with us and
          we'll send you a reset link!
        </Text>
      </View>
      <View>
        <Input
          placeholder={'Email'}
          value={email}
          changeText={email => setEmail(email)}
          newStyles={styles.button}
          underlineColorAndroid={'black'}
        />
      </View>
      <View style={styles.button}>
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
          onPress={() => onSubmit()}
        />
      </View>
      <View style={styles.bottom}>
        <Text
          style={styles.bottomText}
          onPress={() => navigation.navigate('Login')}>
          Back to Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: '10%',
  },
  titleText: {
    fontSize: 50,
    color: '#B9345A',
    fontWeight: '800',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '9%',
  },
  headingText: {
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
  },
  headingText2: {
    fontWeight: '500',
    fontSize: 16,
  },
  heading2: {
    alignItems: 'center',
    padding: '4%',
  },
  bottom: {
    alignItems: 'center',
    padding: '4%',
  },
  bottomText: {
    color: '#B9345A',
    fontWeight: '500',
    fontSize: 15,
  },
  button: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start'
  },
});

export default ForgotPassword;
