import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import { Button } from './Button';
import * as RNLocalize from 'react-native-localize';
import {storage} from '../storage';

const Language = props => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setcurrentLanguage] = useState('en');

  const changeLanguage = () => {
    i18n
      .changeLanguage(i18n.language === 'en' ? 'hi' : 'en')
      .then(() => {
        setcurrentLanguage(i18n.language);
      })
      .catch(error => console.log(error));
  };

  console.log('lang', currentLanguage);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>{t('choose_language')}</Text>
      <View style={styles.buttonView}>
        <Button
          title="Switch language"
          buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
        }}
          onPress={() => {
            changeLanguage();
          }}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
