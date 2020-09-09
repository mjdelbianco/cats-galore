import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const AddButton = ({setIsShown}) => {
  return (
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => {
        setIsShown(true);
      }}>
      <Image
        style={styles.addIcon}
        source={require('../../assets/addNewCat.png')}
      />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
  },
  addIcon: {
    width: 110,
    height: 110,
  },
});
