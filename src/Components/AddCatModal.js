import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {addCat} from '../redux/actions';
import {chooseImage, createCat} from '../utils/helpers';
import {images, fonts, colors} from '../styles';
import AddInput from './AddInput';

const AddCatModal = ({isShown, setIsShown, addNewCat}) => {
  const [newCat, setNewCat] = useState({});

  return (
    <Modal
      transparent={true}
      visible={isShown}
      onBackdropPress={() => {
        setIsShown(false);
        setNewCat({});
      }}
      style={styles.modal}
      statusBarTranslucent={true}>
      <View style={styles.modalView}>
        <View style={styles.topContainer}>
          <Image
            source={{
              uri: newCat.image || images.catPlaceholder,
            }}
            style={styles.catImage}
          />
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={() => chooseImage(setNewCat, newCat)}>
            <Image
              source={images.selectImage}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
          <AddInput
            property="name"
            newCat={newCat}
            setNewCat={setNewCat}
            styling={styles.nameStyle}
          />
        </View>

        <View style={styles.infoContainer}>
          <AddInput property="age" newCat={newCat} setNewCat={setNewCat} />
          <AddInput property="gender" newCat={newCat} setNewCat={setNewCat} />
          <AddInput property="breed" newCat={newCat} setNewCat={setNewCat} />
        </View>

        <TouchableOpacity
          style={styles.create}
          onPress={() => createCat(newCat, addNewCat, setNewCat, setIsShown)}>
          <Text style={styles.createText}>CREATE CAT ENTRY</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapDispatch = (dispatch) => {
  return {
    addNewCat: (cat) => dispatch(addCat(cat)),
  };
};

export default connect(() => ({}), mapDispatch)(AddCatModal);

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.modalTransparent,
    margin: 0,
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    maxHeight: '70%',
    marginHorizontal: 35,
    marginBottom: '25%',
    padding: 20,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  catImage: {
    width: 130,
    height: 130,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 130 / 2,
  },
  imagePicker: {
    position: 'absolute',
    right: 50,
    top: 70,
    borderWidth: 1,
    borderRadius: 100,
    padding: 5,
    backgroundColor: colors.white,
    borderColor: colors.lightBorder,
    elevation: 1,
  },
  nameStyle: {
    fontSize: 26,
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: 'transparent',
    fontFamily: fonts.catName,
    marginHorizontal: 5,
  },
  infoContainer: {flex: 3, justifyContent: 'center'},
  create: {
    backgroundColor: colors.primaryDark,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 40,
    width: 200,
  },
  createText: {
    fontSize: 16,
    color: colors.primaryLight,
  },
});
