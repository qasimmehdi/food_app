import {View, Text, StyleSheet, Image} from 'react-native';
import React, {FC} from 'react';
import {IProduct} from '../screens/Home/Home';
import currencyFormatter from 'currency-formatter';

const ProductCard: FC<IProduct> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.produceImageContainer}>
        <Image source={props.thumbnail} style={styles.produceImage} />
      </View>
      <Text style={styles.productTitle}>{props.name}</Text>
      <Text style={styles.productPrice}>{eur(props.price)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 220,
    height: 270,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingBottom: 40,
    marginBottom: 15,
    marginTop: 80,
    marginLeft: 30,

    shadowColor: 'rgb(57, 57, 57)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'System',
    color: '#000',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'System',
    color: '#FA4A0C',
    textAlign: 'center',
  },
  produceImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: -60,
  },
  produceImageContainer: {
    shadowColor: 'rgb(57, 57, 57)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
});

const eur = (value: number) => currencyFormatter.format(value, {code: 'EUR'});

export default ProductCard;
