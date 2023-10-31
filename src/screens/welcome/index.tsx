import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import Images from './Images';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleHomeRedirect = () => {
    navigation.navigate('AccountSetup');
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <FastImage
        source={Images.Welcome}
        style={styles.welcomeImage}
        resizeMode="contain"
      />

      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Piggypouch</Text>
        <Text style={styles.welcomeDescription}>
          The best way to track your expenses.
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          activeOpacity={0.9}
          onPress={handleHomeRedirect}>
          <Text style={styles.startedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
