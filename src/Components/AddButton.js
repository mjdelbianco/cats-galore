import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const AddButton = ({setIsShown}) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        setIsShown(true);
      }}>
      <Image style={styles.addIcon} source={require('../../assets/plus.png')} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  addIcon: {
    width: 30,
    height: 30,
  },
});
