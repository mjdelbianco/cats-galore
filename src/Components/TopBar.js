import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Image style={styles.logo} source={require('../../assets/logo1.png')} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topbar: {
    height: '10%',
    justifyContent: 'flex-end',
    backgroundColor: '#ebe2cf',
    elevation: 5,
  },
  logo: {
    height: '90%',
    width: '100%',
  },
});
