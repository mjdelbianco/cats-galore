import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {viewCat} from '../redux/actions';
import {connect} from 'react-redux';

const CatView = ({cat, navigation, viewCat}) => {
  return (
    <TouchableOpacity
      style={styles.catListItem}
      onPress={() => {
        navigation.navigate('Detail');
        viewCat(cat);
      }}>
      <Image
        source={{uri: cat.image || 'https://placekitten.com/200/300'}}
        style={styles.catImage}
      />
      <Text style={styles.catName}>{cat.name}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    // cat: state.cat,
  };
};

const mapDispatch = (dispatch) => {
  return {
    viewCat: (cat) => dispatch(viewCat(cat)),
  };
};
export default connect(mapStateToProps, mapDispatch)(CatView);

const styles = StyleSheet.create({
  catListItem: {
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    elevation: 1,
    backgroundColor: '#F5FADD',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '40%',
  },
  catName: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'wrap',
    padding: 3,
  },
  catImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    padding: 5,
  },
});
