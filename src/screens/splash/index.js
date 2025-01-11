import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StatusBar } from 'react-native';
import SlideInText from '../../Components/SlideInText';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  });
  return (
    <LinearGradient
      locations={[0, 0.5]}
      colors={['#000000', '#77d4e4']}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={'#000000'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text style={{ color: '#ffe284', fontSize: 20 }}>Welcome Learn Code</Text> */}
        <SlideInText
          texts={[
            'Welcome To Learn code',
            'Learn Important Topics',
            'Grow Your Knowledge',
          ]}
          duration={1500}
          delay={500}
        />
        <Image source={require('../../assets/images/splash.png')} style={{ width: '50%', height: '30%' }} />

      </View>

    </LinearGradient >
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});