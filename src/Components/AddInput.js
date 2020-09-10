import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {colors, fonts} from '../styles';
import MyText from '../Components/MyText';

const AddInput = ({property, setNewCat, newCat, styling}) => {
  return (
    <>
      {property !== 'name' && (
        <MyText text={property[0].toUpperCase() + property.slice(1)} />
      )}
      <TextInput
        style={[styles.inputInfo, {...styling}]}
        placeholder={`Add ${property}`}
        onChangeText={(text) => setNewCat({...newCat, [property]: text})}
        value={newCat[property]}
        maxLength={property === 'age' ? 2 : 20}
        keyboardType={property === 'age' ? 'numeric' : 'default'}
      />
    </>
  );
};

export default AddInput;

const styles = StyleSheet.create({
  inputInfo: {
    minHeight: 25,
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
