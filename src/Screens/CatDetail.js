import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import {editCat, deleteCat} from '../redux/actions';
import ActionButton from '../Components/ActionButton';
import {images, colors, fonts} from '../styles';

const CatDetail = ({cat, updateCat, removeCat, navigation}) => {
  const [isEditable, setIsEditable] = useState(false);
  const toggleEdit = (action) => {
    setIsEditable(!isEditable);
    action !== 'save' && setSingleCat(cat);
  };
  const [singleCat, setSingleCat] = useState(cat);

  return (
    <View style={styles.backgroundContainer}>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: 'white',
          padding: 10,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'whitesmoke',
            borderRadius: 5,
            elevation: 5,
            alignSelf: 'center',
            padding: 10,
            margin: 10,
          }}>
          <Image
            source={{uri: singleCat.image || 'https://placekitten.com/200/300'}}
            style={{flex: 1, width: 100, height: 150, borderRadius: 5}}
            resizeMode="cover"
          />
          {isEditable && (
            <View
              style={{
                position: 'absolute',
                left: 120,
                bottom: 15,
                padding: 5,

                elevation: 1,
              }}>
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

        <TextInput
          style={[
            styles.mainInfo,
            isEditable
              ? {
                  borderWidth: 1,
                  borderColor: '#ebe2cf',
                  borderRadius: 3,
                  paddingVertical: 1,
                }
              : null,
          ]}
          editable={isEditable}
          textAlignVertical="center"
          underlineColorAndroid="transparent"
          onChangeText={(breed) => setSingleCat({...singleCat, breed})}>
          {singleCat.breed}
        </TextInput>
        <TextInput
          style={styles.mainInfo}
          editable={isEditable}
          underlineColorAndroid="transparent"
          onChangeText={(age) => setSingleCat({...singleCat, age})}>
          {singleCat.age}
        </TextInput>
        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            margin: 10,
            position: 'absolute',
            bottom: '5%',
            right: '5%',
          }}>
          <ActionButton
            toggleEdit={toggleEdit}
            icon={isEditable ? images.close : images.edit}
            action="enableEdit"
          />
          <ActionButton
            removeCat={removeCat}
            navigation={navigation}
            singleCat={singleCat}
            action="deleteCat"
            icon={images.delete}
          />

          {isEditable && (
            <>
              <ActionButton
                singleCat={singleCat}
                updateCat={updateCat}
                toggleEdit={toggleEdit}
                icon={images.save}
                action="save"
              />
            </>
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
  mainInfo: {
    paddingVertical: 1,
    color: 'black',
    fontSize: 16,
    fontFamily: fonts.text,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: colors.mainGreen,
    paddingTop: 10,
  },
});
