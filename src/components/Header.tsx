import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import CartIcon from './CartIcon';
import MenuIcon from './MenuIcon';

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <MenuIcon />
      <CartIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default Header;
