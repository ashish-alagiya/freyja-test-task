import React, {useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {STORE_DATA} from '../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {CommonHeader, RenderProcuctItem} from '../components';
import {BASE_URL, GET, colors, makeAPIRequest} from '../helper';

// import {API_KEY} from '@env'; (To import API_KEY from .env)

const HomeScreen = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const productsData = useSelector(state => state.products?.products);
  const favoriteData = useSelector(state => state.favorites?.favorites);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    const data = await makeAPIRequest({url: BASE_URL, method: GET});
    dispatch({type: STORE_DATA, payload: data?.products});
  };

  const renderItem = ({item}) => {
    const isFavorite = favoriteData?.some(favorite => favorite.id === item.id);
    return <RenderProcuctItem isFavorite={isFavorite} item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.bgColor} />
      <CommonHeader
        headerText={'HomeScreen'}
        isRightIcon
        onRightIconPress={() => navigate('FavoriteItemsScreen')}
      />
      {productsData.length > 0 ? (
        <FlatList
          data={productsData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={{marginHorizontal: 10}}
          numColumns={2}
        />
      ) : (
        <View style={styles.subView}>
          <Text style={styles.headerText}>Loading...</Text>
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

export default HomeScreen;
