import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {addCat} from '../redux/actions';
import {TextInput} from 'react-native-gesture-handler';
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
          <TextInput
            style={[styles.inputInfo, styles.nameStyle]}
            placeholder="Add name"
            onChangeText={(name) => setNewCat({...newCat, name})}
            value={newCat.name}
            maxLength={20}
          />
        </View>

        <View style={styles.infoContainer}>
          <AddInput property="age" newCat={newCat} setNewCat={setNewCat} />
          <AddInput property="gender" newCat={newCat} setNewCat={setNewCat} />
          <AddInput property="breed" newCat={newCat} setNewCat={setNewCat} />
          <AddInput property="traits" newCat={newCat} setNewCat={setNewCat} />
        </View>

        <TouchableOpacity
          style={styles.create}
          onPress={() => createCat(newCat, addNewCat, setNewCat, setIsShown)}>
          <Text style={styles.createText}> CREATE CAT ENTRY</Text>
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
    justifyContent: 'center',
    backgroundColor: colors.modalTransparent,
    margin: 0,
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    height: '70%',
    marginHorizontal: 35,
    padding: 20,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  catImage: {
    width: 150,
    height: 150,
    marginTop: 15,
    alignSelf: 'center',
    borderRadius: 100,
  },
  imagePicker: {
    position: 'absolute',
    right: 40,
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
    marginVertical: 20,
    width: 200,
  },
  createText: {
    fontSize: 16,
    color: colors.primaryLight,
  },
});
