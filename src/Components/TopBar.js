import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {images, colors} from '../styles';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={images.logo} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.mainGreen,
  },
  logo: {
    height: '90%',
    width: '80%',
  },
});
