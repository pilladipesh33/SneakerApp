import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import { Button } from './Button';

const Language = props => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setcurrentLanguage] = useState('eng');

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>{t('choose_language')}</Text>
      <View style={styles.buttonView}>
        <Button
          title="English"
          buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
        }}
          onPress={() => i18n.changeLanguage('eng')}
          s
        />
        <Button
          title="Hindi"
          buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
        }}
          onPress={() => i18n.changeLanguage('hin')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  screen: {
    marginBottom: '100%',
  },
  heading: {
    paddingLeft: '2%',
    fontSize: 20,
    fontWeight: '200',
    color: 'black',
  }
});
export default Language;
