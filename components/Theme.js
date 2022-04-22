import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { switchMode } from '../redux/action/UserAction';
import {View, Text, StatusBar, StyleSheet} from 'react-native'
import { Button } from './Button';

const Theme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [ismode, setMode] = useState(theme.mode);

    const handleThemeChange = () =>{
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    };

    console.log('mode', ismode);

    useEffect(() => {
        setMode(theme.mode);
    }, [theme]);

    return (
        <View style={ismode == 'light' ? styles.container_light : styles.container_dark}>
            <View style={styles.screen}>
            <Text style={ismode == 'light' ? styles.text_light : styles.text_dark}>Switch from {theme.mode} mode!</Text>
            <Button
            title={theme.mode + ' Mode'}
            buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#1c1c1c',
            borderRadius: 6,
        }}
        onPress={handleThemeChange}
            />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
    },
    text_light: {
        marginTop: 30,
        color: '#000',
        fontSize: 18
    },
    text_dark: {
        marginTop: 30,
        color: "#fff",
        fontSize: 18
    },
    screen: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default Theme;