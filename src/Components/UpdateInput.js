import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {colors, fonts} from '../styles';

const UpdateInput = ({isEditable, singleCat, property, setSingleCat}) => {
  return (
    <>
      <Text style={styles.text}>
        {property[0].toUpperCase() + property.slice(1)}
      </Text>
      <TextInput
        style={[
          styles.input,
          isEditable
            ? {
                borderColor: colors.lightBorder,
                borderRadius: 3,
                paddingVertical: 1,
                borderBottomWidth: 2,
                borderRightWidth: 2,
              }
            : null,
        ]}
        maxLength={property === 'description' ? 200 : 50}
        multiline={property === 'description' && true}
        placeholder={`No ${property} yet`}
        editable={isEditable}
        textAlignVertical="center"
        underlineColorAndroid="transparent"
        onChangeText={(prop) => setSingleCat({...singleCat, [property]: prop})}>
        {singleCat[property]}
      </TextInput>
    </>
  );
};

export default UpdateInput;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontStyle: 'italic',
    fontFamily: fonts.text,
    color: colors.secondaryGreen,
    fontWeight: '500',
  },
  input: {
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.text,
    paddingHorizontal: 5,
    lineHeight: 16,
    minHeight: 26,
    borderColor: colors.lightBorder,
    borderRadius: 3,
    paddingVertical: 1,
    borderBottomWidth: 1,
  },
});
