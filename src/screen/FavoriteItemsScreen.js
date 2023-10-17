import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {colors} from '../helper';
import {CommonHeader, RenderProcuctItem} from '../components';

const FavoriteItemsScreen = () => {
  const favoriteData = useSelector(state => state.favorites?.favorites);

  const renderItem = ({item}) => {
    const isFavorite = true;
    return <RenderProcuctItem isFavorite={isFavorite} item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader headerText={'Favorite'} isBack />
      {favoriteData?.length > 0 ? (
        <FlatList
          data={favoriteData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{marginHorizontal: 10}}
        />
      ) : (
        <View style={styles.subView}>
          <Text style={styles.headerText}>
            Don't have favorite items. Please add some items to favorite list.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.primaryText,
  },
  subView: {flex: 1, justifyContent: 'center'},
});

export default FavoriteItemsScreen;
