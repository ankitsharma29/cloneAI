import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {RNCamera} from 'react-native-camera'; // Install: npm install react-native-camera
import Icon from 'react-native-vector-icons/MaterialIcons';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions'; // Install: npm install react-native-permissions

const {width, height} = Dimensions.get('window');

const GoogleLensScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    requestCameraPermission();
  }, []);
  // Request Camera Permissions
  const requestCameraPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message:
              'This app needs access to your camera for scanning and capturing.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        const status = await request(PERMISSIONS.IOS.CAMERA);
        if (status === RESULTS.GRANTED) {
          setHasPermission(true);
        } else {
          Alert.alert(
            'Permission Denied',
            'Camera access is required to use this feature.',
          );
        }
      }
    } catch (error) {
      console.error('Error requesting camera permission:', error);
    }
  };

  // Check Camera Permission on Mount
  useEffect(() => {
    const checkPermission = async () => {
      if (Platform.OS === 'android') {
        const status = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        setHasPermission(status);
      } else {
        const status = await check(PERMISSIONS.IOS.CAMERA);
        setHasPermission(status === RESULTS.GRANTED);
      }
    };
    checkPermission();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.container}>
        {/* Check Permission */}
        {hasPermission && (
          <RNCamera
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}>
            {({camera, status}) => {
              if (status !== 'READY') return <View style={styles.loading} />;
              return (
                <>
                  {/* Top Navigation */}
                  <View style={styles.topBar}>
                    <TouchableOpacity>
                      <Icon name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Google Lens</Text>
                    <TouchableOpacity>
                      <Icon name="history" size={24} color="#fff" />
                    </TouchableOpacity>
                  </View>

                  {/* Center Overlay */}
                  <View style={styles.overlay}>
                    <View style={styles.overlayBorder} />
                  </View>

                  {/* Bottom Bar */}
                  <View style={styles.bottomBar}>
                    <TouchableOpacity
                      style={styles.captureButton}
                      onPress={async () => {
                        const options = {quality: 0.5, base64: true};
                        const data = await camera.takePictureAsync(options);
                        console.log('Image captured:', data.uri);
                        navigation.navigate('LensSearchScreen')
                      }}>
                      <View style={styles.captureCircle} />
                    </TouchableOpacity>
                  </View>
                </>
              );
            }}
          </RNCamera>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loading: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  permissionText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: '#4285F4',
    padding: 12,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayBorder: {
    width: width * 0.8,
    height: width * 0.8,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  captureButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#aaa',
  },
});

export default GoogleLensScreen;
