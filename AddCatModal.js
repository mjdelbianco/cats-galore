import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';

const AddCatModal = ({isShown, setIsShown}) => {
  const [catName, setCatName] = useState('');
  const [catBreed, setCatBreed] = useState('');

  return (
    <Modal
      transparent={true}
      visible={isShown}
      onBackdropPress={() => {
        setIsShown(false);
      }}
      style={{
        justifyContent: 'center',
        backgroundColor: '#000000aa',
        margin: 0,
        flex: 1,
      }}
      statusBarTranslucent={true}>
      <View style={styles.modalView}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter name"
          onChangeText={(catName) => setCatName(catName)}
          value={catName}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Enter breed"
          onChangeText={(catBreed) => setCatBreed(catBreed)}
          value={catBreed}
        />
      </View>
      {/* TODO add a submit button */}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, () => ({}))(AddCatModal);

const styles = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 500,
    marginHorizontal: 35,
  },
});
