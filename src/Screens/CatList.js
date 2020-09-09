import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CatView from '../Components/CatView';
import AddButton from '../Components/AddButton';
import AddCatModal from '../Components/AddCatModal';

const CatList = ({cats, navigation}) => {
  const [isShown, setIsShown] = useState(false);
  console.log(cats);
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.catList}>
            {cats
              .sort((a, b) => b.id - a.id)
              .map((cat, index) => (
                <CatView cat={cat} key={index} navigation={navigation} />
              ))}
          </View>
        </ScrollView>
        <AddButton setIsShown={setIsShown} />
        <AddCatModal setIsShown={setIsShown} isShown={isShown} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cats: state.catList,
  };
};
export default connect(mapStateToProps, () => ({}))(CatList);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    borderTopEndRadius: 30,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#0FAB4D',
    paddingTop: 10,
  },
  catList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 60,
  },
});
