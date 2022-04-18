import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';

const options = [
  {label: 'english', value: 'eng'},
  {label: 'hindi', value: 'hin'},
];

const Language = () => {
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = React.useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(error => console.log(error));
  };

  return (
    <View style={{marginTop: 50}}>
      <Text>{t('setting')}</Text>
      <Button
        title="English"
        style={{
          backgroundColor: currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
        }}
        onPress={() => changeLanguage('eng')}
      />
      <Button
        title="Hindi"
        style={{
          backgroundColor: currentLanguage === 'hi' ? '#33A850' : '#d3d3d3',
        }}
        onPress={() => changeLanguage('hin')}
      />
    </View>
  );
};

export default Language;
