import React, {useEffect} from 'react';
import {TouchableOpacity, Text, ShadowPropTypesIOS} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavButton = props => {
  useEffect(() => {
    const favoriteSaved = favorite;

    if (favoriteSaved) {
      props.onRef(favoriteSaved);
    }
    
  }, []);

  const favorite = useSelector(state => state.item);

  const dispatch = useDispatch();

  function delFavorite() {
    dispatch({type: 'ADD_FAVORITE', title: ''});
  }

  return (
    <>
      {favorite == '' ? (
        <></>
      ) : (
        <>
          <Icon
            name="star"
            size={25}
            color="#ffc53b"
            style={{padding: 5, alignSelf: 'center'}}
          />
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              color: '#f3ecec',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            {favorite}
          </Text>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              marginTop: 10,
              marginRight: 20,
              backgroundColor: '#FF0000',
              borderColor: '#FF0000',
              borderRadius: 3,
              borderWidth: 1,
            }}
            onPress={() => delFavorite()}>
            <Icon
              name="trash"
              size={20}
              color="#f3ecec"
              style={{padding: 4, alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default FavButton;
