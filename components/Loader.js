import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
    return (
        <View style={styles.screen}>
            <LottieView
            source={require('../assets/99589-loader-for-web.json')}
            autoPlay
            style={styles.animated}
            />
        </View>
    )
};

export default Loader;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animated: {
        height: 100,
        width: 100,
    }
})