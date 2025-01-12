import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Voice from '@react-native-voice/voice'; // Install: npm install react-native-voice
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions'; // Install: npm install react-native-permissions

const VoiceSearchScreen = ({navigation}: any) => {
  const [isListening, setIsListening] = useState(false);
  const [resultText, setResultText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = () => setIsListening(true);

  const onSpeechEnd = () => setIsListening(false);

  const onSpeechResults = (event: any) => {
    console.log('event', event);

    setResultText(event.value[0]);
  };

  const onSpeechError = (event: any) => {
    setErrorMessage(event.error.message);
  };

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'This app needs access to your microphone for voice search.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (error) {
        console.warn(error);
        return false;
      }
    } else if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.MICROPHONE);
      return result === RESULTS.GRANTED;
    }
    return false;
  };

  const startListening = async () => {
    const permissionGranted = await requestMicrophonePermission();
    if (!permissionGranted) {
      Alert.alert('Microphone permission is required!');
      return;
    }

    try {
      setResultText('');
      setErrorMessage('');
      await Voice.start('en-US');
    } catch (error) {
      console.error('Error starting Voice:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Error stopping Voice:', error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#202124" barStyle="light-content" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="language" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Speak Now */}
        <Text style={styles.speakNowText}>
          {resultText || errorMessage || 'Speak now'}
        </Text>

        {/* Google Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, {backgroundColor: '#4285F4'}]} />
          <View style={[styles.dot, {backgroundColor: '#EA4335'}]} />
          <View style={[styles.dot, {backgroundColor: '#FBBC05'}]} />
          <View style={[styles.dot, {backgroundColor: '#34A853'}]} />
        </View>

        {/* Button to Search a Song */}
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="music-note" size={18} color="#fff" />
          <Text style={styles.searchButtonText}>Search a song</Text>
        </TouchableOpacity>

        {/* Mic Button */}
        <TouchableOpacity
          onPress={isListening ? stopListening : startListening}
          style={styles.micButton}>
          <Icon name={isListening ? 'mic-off' : 'mic'} size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speakNowText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 32,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  micButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#4285F4',
    padding: 16,
    borderRadius: 50,
  },
});

export default VoiceSearchScreen;
