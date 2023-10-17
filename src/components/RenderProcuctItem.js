import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors, icons} from '../helper';
import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from '../redux/actions';

const RenderProcuctItem = ({item, isFavorite}) => {
  const dispatch = useDispatch();

  const onLikePress = item => {
    isFavorite
      ? dispatch({type: REMOVE_FROM_FAVORITE, payload: item})
      : dispatch({type: ADD_TO_FAVORITE, payload: item});
  };

  return (
    <View style={styles.cardItemParent}>
      <Image style={styles.cardItem} source={{uri: item?.thumbnail}} />
      <TouchableOpacity
        style={styles.likeIconPos}
        onPress={() => onLikePress(item)}>
        <Image
          style={[styles.likeIcon]}
          source={isFavorite ? icons.favorite : icons.like}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardItemParent: {
    flex: 1,
    height: 250,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.primaryText,
  },
  cardItem: {
    height: 200,
    width: '100%',
    borderWidth: 2,
    borderRadius: 18,
    resizeMode: 'cover',
    borderColor: colors.blackColor
  },

  likeIconPos: {
    bottom: 5,
    right: 10,
    position: 'absolute',
  },
  likeIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default RenderProcuctItem;
