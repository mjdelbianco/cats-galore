import {PermissionsAndroid} from 'react-native';
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
