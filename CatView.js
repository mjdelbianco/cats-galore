import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const CatView = ({cat}) => {
  return (
    <TouchableOpacity style={styles.catListItem}>
      <Text>{cat.name}</Text>
      <Image source={require('./assets/plus.png')} style={styles.catImage} />
    </TouchableOpacity>
  );
};

export default CatView;

const styles = StyleSheet.create({
  catListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  catImage: {
    height: 40,
    width: 40,
  },
});
