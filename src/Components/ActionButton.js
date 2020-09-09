import React from 'react';
import {Image, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import {chooseImage} from '../utils/helpers';
import {colors} from '../styles';

const ActionButton = ({
  icon,
  action,
  singleCat,
  updateCat,
  setSingleCat,
  removeCat,
  navigation,
  setIsEditable,
  isEditable,
  cat,
}) => {
  const remove = () => {
    removeCat(singleCat);
    navigation.navigate('Home');
  };

  const save = (action) => {
    if (singleCat.name && singleCat.age && singleCat.gender) {
      updateCat(singleCat);
      toggleEdit(action);
    } else {
      ToastAndroid.showWithGravity(
        'Your cat must have a name, age and gender',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  const toggleEdit = (action) => {
    setIsEditable(!isEditable);
    action !== 'save' && setSingleCat(cat);
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
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 1,
    padding: 10,
    backgroundColor: colors.lightBorder,
  },
  icon: {
    width: 25,
    height: 25,
    opacity: 0.6,
  },
});
