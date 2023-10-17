import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, icons} from '../helper';

const CommonHeader = ({
  isBack,
  headerText,
  isRightIcon,
  rightIconStyle,
  containerStyle,
  onRightIconPress,
  rightIconPosition,
}) => {
  const {goBack} = useNavigation();
  return (
    <View style={[styles.container, containerStyle]}>
      {isBack && (
        <TouchableOpacity onPress={() => goBack()} style={styles.backPosition}>
          <Text style={[styles.headerText, {fontWeight: '400', fontSize: 16}]}>
            Back
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{headerText}</Text>
      {isRightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={[styles.rightIconPosition, rightIconPosition]}>
          <Image
            style={[styles.rightIcon, rightIconStyle]}
            source={icons.favorite}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primaryText,
  },
  backPosition: {
    left: 10,
    position: 'absolute',
  },
  rightIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  rightIconPosition: {
    right: 10,
    position: 'absolute',
  },
});

export default CommonHeader;
