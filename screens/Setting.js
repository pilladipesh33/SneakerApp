import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Theme from '../components/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Language from '../components/Language';
import { useTranslation } from 'react-i18next';

const Setting = ({navigation}) => {
  const theme = useSelector(state => state.theme);
  const [mode, setMode] = useState(theme.mode);
  const {t} = useTranslation();

  useEffect(() => {
    setMode(theme.mode);
    }, [theme]);

  return (
    <SafeAreaView style={mode=='light' ? styles.screen_light: styles.screen_dark}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={44}
          style={mode == 'light' ? styles.arrow_light : styles.arrow_dark}
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>{t('setting')}</Text>
      <Theme />
      <Language />
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 50,
    fontWeight: '500',
    fontStyle: 'italic',
    color: '#9345AB',
  },
  arrow_light: {
    marginTop: 40,
    color: '#121212',
  },
  arrow_dark: {
      marginTop: 40,
      color: 'white',
  },
  screen_light: {
      flex: 1,
      backgroundColor: 'white',
  },
  screen_dark:{
    flex: 1,
    backgroundColor: '#121212',
  },
  button: {
    marginBottom: 20,
  }
});
