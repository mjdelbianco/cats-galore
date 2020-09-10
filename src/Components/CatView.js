import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {viewCat} from '../redux/actions';
import {connect} from 'react-redux';
import {images, colors, fonts} from '../styles';

const CatView = ({cat, navigation, viewCat}) => {
  return (
    <TouchableOpacity
      style={styles.catListItem}
      onPress={() => {
        navigation.navigate('Detail');
        viewCat(cat);
      }}>
      <Image
        source={{uri: cat.image || images.catPlaceholder}}
        style={styles.catImage}
      />
      <Text style={styles.catName} textBreakStrategy="simple">
        {cat.name + ' '}
      </Text>
    </TouchableOpacity>
  );
};

const mapDispatch = (dispatch) => {
  return {
    viewCat: (cat) => dispatch(viewCat(cat)),
  };
};

export default connect(() => ({}), mapDispatch)(CatView);

const styles = StyleSheet.create({
  catListItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    elevation: 1,
    backgroundColor: colors.lightBorder,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '40%',
  },
  catName: {
    fontSize: 22,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontFamily: fonts.catName,
  },
  catImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    padding: 5,
  },
});
