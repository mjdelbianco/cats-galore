import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {chooseImage} from '../utils/helpers';

const ActionButton = ({
  toggleEdit,
  icon,
  action,
  singleCat,
  updateCat,
  setSingleCat,
  removeCat,
  navigation,
}) => {
  const remove = () => {
    removeCat(singleCat);
    navigation.navigate('Home');
  };

  const save = (action) => {
    updateCat(singleCat);
    toggleEdit(action);
  };
  const actionOnPress = () => {
    if (action === 'enableEdit') return toggleEdit(action);
    if (action === 'save') return save(action);
    if (action === 'changeImage') return chooseImage(setSingleCat, singleCat);
    if (action === 'deleteCat') return remove();
    if (action === 'goBack') return navigation.navigate('Home');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => actionOnPress()}>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
