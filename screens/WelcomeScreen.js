import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={styles.rectStack}>
          <TouchableOpacity
            style={styles.rect}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signin}>Signin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rect2}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.register}>Register</Text>
          </TouchableOpacity>
        </View>
        <Image
        source={require('../assets/image/ui.png')}
        resizeMode="contain"
        style={styles.image}
       />
       <View style={styles.headingView}>
       <Text style={styles.heading}>Enterprise team</Text>
        <Text style={styles.heading}>collaboration.</Text>
        <Text style={styles.text}>
          Bring together your files, your tools, {'\n'} projects and people.
          Including a new{'\n'} mobile and desktop application.
        </Text>

       </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(18,16,26,1)',
  },
  rect: {
    top: 0,
    width: 308,
    height: 70,
    position: 'absolute',
    backgroundColor: 'rgba(106,106,107,1)',
    borderRadius: 20,
    left: 1,
  },
  signin: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: 16,
    marginLeft: 207,
    fontWeight: 'bold',
  },
  rect2: {
    top: 0,
    left: 0,
    width: 155,
    height: 70,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 20,
  },
  register: {
    color: '#121212',
    fontSize: 24,
    marginTop: 16,
    marginLeft: 26,
    fontWeight: 'bold',
  },
  rectStack: {
    width: 309,
    height: 70,
    marginTop: 682,
    marginLeft: 33,
  },
  image: {
    width: '80%',
    height: '40%',
    marginTop: -696,
    marginLeft: 47,
  },
  headingView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '9%',
  },
  heading: {
    color: 'white',
    fontSize: 35,
    padding: '1%',
    fontWeight: '700',
  },
  text: {
    paddingTop: '2%',
    color: 'grey',
    fontSize: 18,
  },
});

export default WelcomeScreen;
