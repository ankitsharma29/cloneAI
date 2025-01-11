import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';

const SlideInText = ({ texts, duration, delay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX] = useState(new Animated.Value(-100));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: duration * 0.4,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration * 0.4,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(duration * 0.2),
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 100,
          duration: duration * 0.4,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: duration * 0.4,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
      translateX.setValue(-100);
      opacity.setValue(0);
    });
  }, [currentIndex]);

  return (
    <View>
      <Animated.View style={{ transform: [{ translateX }], opacity }}>
        <Text style={{fontFamily: 'Poppins-Bold', fontSize:20, color : '#000000' }}>{texts[currentIndex]}</Text>
      </Animated.View>
    </View>
  );
};

export default SlideInText;
