import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts} from '../styles';

const MyText = ({style, text}) => {
  return <Text style={[styles.font, {...style}]}>{text}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  font: {
    fontFamily: fonts.text,
  },
});
