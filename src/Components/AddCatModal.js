import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {addCat} from '../redux/actions';
import {TextInput} from 'react-native-gesture-handler';
import {chooseImage, createCat} from '../utils/helpers';
import {images, fonts, colors} from '../styles';
import MyText from './MyText';

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
              uri: newCat.image || 'https://placekitten.com/200/300',
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

        <View style={{flex: 3, justifyContent: 'center'}}>
          <MyText text="Age" />
          <TextInput
            style={styles.inputInfo}
            placeholder="Add age"
            onChangeText={(age) => setNewCat({...newCat, age})}
            value={newCat.age}
            keyboardType="number-pad"
          />
          <MyText text="Gender" />
          <TextInput
            style={styles.inputInfo}
            placeholder="Add gender"
            onChangeText={(gender) => setNewCat({...newCat, gender})}
            value={newCat.gender}
          />
          <MyText text="Breed" />
          <TextInput
            style={styles.inputInfo}
            placeholder="Add breed"
            onChangeText={(breed) => setNewCat({...newCat, breed})}
            value={newCat.breed}
          />
          <MyText text="Traits" />
          <TextInput
            style={styles.inputInfo}
            placeholder="Add traits"
            onChangeText={(traits) => setNewCat({...newCat, traits})}
            value={newCat.traits}
          />
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
    backgroundColor: '#000000aa',
    margin: 0,
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: '70%',
    marginHorizontal: 35,
    padding: 10,
  },
  topContainer: {flex: 2, justifyContent: 'center', alignSelf: 'center'},
  catImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
    alignSelf: 'center',
    borderRadius: 100,
  },
  imagePicker: {
    position: 'absolute',
    right: 60,
    borderWidth: 1,
    borderRadius: 100,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'whitesmoke',
    elevation: 1,
  },
  nameStyle: {
    fontSize: 26,
    textAlign: 'center',
    alignSelf: 'center',
    borderColor: 'transparent',
    fontFamily: fonts.catName,
  },
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
  create: {
    backgroundColor: colors.mainGreen,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 7,
    borderRadius: 25,
    marginVertical: 20,
    width: 200,
  },
  createText: {
    fontSize: 16,
    color: colors.limeGreen,
  },
});
