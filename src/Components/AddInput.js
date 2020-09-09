import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {colors, fonts} from '../styles';
import MyText from '../Components/MyText';

const AddInput = ({property, setNewCat, newCat}) => {
  return (
    <>
      <MyText text={property[0].toUpperCase() + property.slice(1)} />
      <TextInput
        style={styles.inputInfo}
        placeholder={`Add ${property}`}
        onChangeText={(props) => setNewCat({...newCat, [property]: props})}
        value={newCat[property]}
        maxLength={50}
      />
    </>
  );
};

export default AddInput;

const styles = StyleSheet.create({
  inputInfo: {
    height: 25,
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 2,
    margin: 2,
    marginBottom: 5,
    borderColor: colors.lightBorder,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    width: 250,
    fontFamily: fonts.text,
  },
});
