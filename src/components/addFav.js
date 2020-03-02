import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddFav = (props) => { 
  const dispatch = useDispatch();

  function addFavorite(props) {
    dispatch({type: 'ADD_FAVORITE', title: props});
  }

  return (
    <TouchableOpacity style={styles.ButtonFav} onPress={() => addFavorite(props.city)}>
      <Icon
        name="star"
        size={25}
        color="#cc7e2f"
        style={{padding: 10, alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonFav: {
    width: 50,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#ffc53b',
    borderColor: '#ffc53b',
    borderRadius: 3,
    borderWidth: 1,
  },
});
export default AddFav;
