import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import {editCat, deleteCat} from '../redux/actions';
import ActionButton from '../Components/ActionButton';
import UpdateInput from '../Components/UpdateInput';
import {images, colors, fonts} from '../styles';

const CatDetail = ({cat, updateCat, removeCat, navigation}) => {
  const [isEditable, setIsEditable] = useState(false);

  const [singleCat, setSingleCat] = useState(cat);

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={{uri: singleCat.image || images.catPlaceholder}}
            style={styles.catImage}
            resizeMode="cover"
          />
          {isEditable && (
            <View style={styles.imagePicker}>
              <ActionButton
                setSingleCat={setSingleCat}
                singleCat={singleCat}
                icon={images.selectImage}
                action="changeImage"
              />
            </View>
          )}
          <TextInput
            style={styles.catName}
            multiline={true}
            maxLength={20}
            editable={isEditable}
            textAlignVertical="center"
            underlineColorAndroid="transparent"
            onChangeText={(name) => setSingleCat({...singleCat, name})}>
            {singleCat.name}
          </TextInput>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 25,
            marginVertical: 5,
            marginHorizontal: 10,
          }}>
          <ScrollView>
            <UpdateInput
              property="age"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
            <UpdateInput
              property="gender"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
            <UpdateInput
              property="breed"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
            <UpdateInput
              property="traits"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
            <UpdateInput
              property="alergies"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
            <UpdateInput
              property="description"
              isEditable={isEditable}
              setSingleCat={setSingleCat}
              singleCat={singleCat}
            />
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row-reverse', marginHorizontal: 30}}>
          <ActionButton
            setIsEditable={setIsEditable}
            isEditable={isEditable}
            cat={cat}
            icon={isEditable ? images.close : images.edit}
            action="enableEdit"
            setSingleCat={setSingleCat}
          />
          <ActionButton
            removeCat={removeCat}
            navigation={navigation}
            singleCat={singleCat}
            action="deleteCat"
            icon={images.delete}
          />
          {isEditable && (
            <ActionButton
              singleCat={singleCat}
              updateCat={updateCat}
              icon={images.save}
              action="save"
              setIsEditable={setIsEditable}
              isEditable={isEditable}
            />
          )}
          <ActionButton
            navigation={navigation}
            action="goBack"
            icon={images.back}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cat: state.cat,
    cats: state.catList,
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateCat: (cat) => dispatch(editCat(cat)),
    removeCat: (cat) => dispatch(deleteCat(cat)),
  };
};

export default connect(mapStateToProps, mapDispatch)(CatDetail);

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: colors.mainGreen,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingVertical: 20,
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    alignSelf: 'center',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  catImage: {flex: 1, width: 100, height: 150, borderRadius: 5},
  mainInfo: {
    paddingVertical: 1,
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.text,
  },
  catName: {
    fontSize: 34,
    marginHorizontal: 10,
    color: 'black',
    fontFamily: fonts.catName,
    flexWrap: 'wrap',
    width: '50%',
    flex: 1,
    textAlign: 'center',
  },
  imagePicker: {
    position: 'absolute',
    left: 120,
    bottom: 15,
    padding: 5,
    elevation: 1,
  },
  actionContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    margin: 10,
    position: 'absolute',
    top: '31%',
    right: '3%',
  },
});
