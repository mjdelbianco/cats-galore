import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {addCat} from '../redux/actions';
import {TextInput} from 'react-native-gesture-handler';
import {chooseImage} from '../utils/helpers';

const AddCatModal = ({isShown, setIsShown, addNewCat}) => {
  const [newCat, setNewCat] = useState({});
  const [borderW, setBorderW] = useState(0);

  return (
    <Modal
      transparent={true}
      visible={isShown}
      onBackdropPress={() => {
        setIsShown(false);
      }}
      style={styles.modal}
      statusBarTranslucent={true}>
      <View style={styles.modalView}>
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Image
            source={{
              uri: newCat.image || 'https://placekitten.com/200/300',
            }}
            style={{
              width: 100,
              height: 100,
              marginBottom: 15,
              alignSelf: 'center',
            }}
          />
          <TextInput
            style={[
              styles.inputInfo,
              {fontSize: 24, textAlign: 'center', alignSelf: 'center'},
            ]}
            placeholder="Enter name"
            onChangeText={(name) => setNewCat({...newCat, name})}
            value={newCat.name}
            maxLength={20}
          />
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.inputInfo}
            placeholder="Enter breed"
            onChangeText={(breed) => setNewCat({...newCat, breed})}
            value={newCat.breed}
          />
          <TextInput
            style={styles.inputInfo}
            placeholder="Enter age"
            onChangeText={(age) => setNewCat({...newCat, age})}
            value={newCat.age}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.inputInfo}
            placeholder="Enter gender"
            onChangeText={(gender) => setNewCat({...newCat, gender})}
            value={newCat.gender}
          />
          <TextInput
            style={styles.inputInfo}
            placeholder="Enter traits"
            onChangeText={(traits) => setNewCat({...newCat, traits})}
            value={newCat.traits}
          />

          {/* TODO add other properties for cat */}
          <Button
            title="ADD IMAGE"
            onPress={() => chooseImage(setNewCat, newCat)}
          />
        </View>
        <TouchableOpacity
          style={styles.create}
          onPress={() => {
            addNewCat({...newCat, id: new Date()});
            setNewCat({});
            setIsShown(false);
          }}>
          <Text style={styles.createText}> CREATE CAT ENTRY</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {
    addNewCat: (cat) => dispatch(addCat(cat)),
  };
};

export default connect(mapStateToProps, mapDispatch)(AddCatModal);

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    margin: 0,
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 500,
    marginHorizontal: 35,
    padding: 10,
  },
  inputInfo: {
    height: 25,
    fontSize: 16,
    paddingVertical: 0,
    paddingHorizontal: 2,
    margin: 2,
    borderColor: 'whitesmoke',
  },
  create: {
    backgroundColor: '#37897c',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 7,
    borderRadius: 25,
    marginVertical: 20,
  },
  createText: {
    fontSize: 16,
    color: 'white',
  },
});
