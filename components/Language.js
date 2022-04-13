import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {View, Text} from 'react-native';

const Language = () =>{
    const [toggleLanguage, settoggleLanguage] = useState();
    const [currentLanguage, setcurrentLanguage] = useState();

    return (
        <View>
        <Button 
        onPress={toggleLanguage}
        />
        <Text>{currentLanguage}</Text>
        </View>
    )
}