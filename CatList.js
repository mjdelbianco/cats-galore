import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import CatView from './CatView';
import AddButton from './AddButton';
import AddCatModal from './AddCatModal';

const CatList = ({cats}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.catList}>
          {cats.map((cat, index) => (
            <CatView cat={cat} key={index} />
          ))}
        </View>
      </ScrollView>
      <AddButton setIsShown={setIsShown} />
      <AddCatModal setIsShown={setIsShown} isShown={isShown} />
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
    margin: 10,
  },
  catList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 60,
  },
});
