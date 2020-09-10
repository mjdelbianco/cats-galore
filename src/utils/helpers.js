import {PermissionsAndroid, ToastAndroid, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export const chooseImage = async (fn, cat) => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    {
      title: 'We need your permission',
    },
  );

  if (granted === 'granted') {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = response.uri;
        console.log(source);
        fn({...cat, image: source});
      }
    });
  }
};

export const createCat = (newCat, addNewCat, setNewCat, setIsShown) => {
  if (newCat.name && newCat.age && newCat.gender) {
    addNewCat({...newCat, id: new Date()});
    setNewCat({});
    setIsShown(false);
  } else {
    ToastAndroid.showWithGravity(
      'Your cat must have a name, age and gender',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  }
};

export const save = (action, singleCat, updateCat, toggleEdit) => {
  if (singleCat.name && singleCat.age && singleCat.gender) {
    updateCat(singleCat);
    toggleEdit(action);
  } else {
    ToastAndroid.showWithGravity(
      'Your cat must have a name, age and gender',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  }
};

export const remove = (removeCat, singleCat, navigation) => {
  Alert.alert(
    '',
    `Are you sure you want to delete ${singleCat.name} from your list?`,
    [
      {
        text: 'Cancel',
        onPress: navigation.navigate('Detail'),
      },
      {
        text: 'OK',
        onPress: () => {
          removeCat(singleCat);
          navigation.navigate('Home');
        },
      },
    ],
  );
};
