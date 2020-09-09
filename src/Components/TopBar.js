import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topbar}>
      <Image style={styles.logo} source={require('../../assets/logoPaw.png')} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topbar: {
    height: '10%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0FAB4D',
  },
  logo: {
    height: '90%',
    width: '80%',
  },
});
