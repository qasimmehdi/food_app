import React, {FC, useEffect, useState} from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import MenuFilters from '../../components/MenuFilters';
import ProductAnimation from '../../components/ProductAnimation';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
const ProductImage = require('../../assets/food-plate.png');

const filters = ['Foods', 'Drinks', 'Snacks', 'Sauces', 'Desserts'];

export interface IProduct {
  id: string;
  name: string;
  price: number;
  thumbnail: ImageSourcePropType;
}

const Home: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [products] = useState<IProduct[]>([
    {
      id: '1',
      name: 'Veggie tomato mix',
      price: 14.9,
      thumbnail: ProductImage,
    },
    {
      id: '2',
      name: 'Veggie tomato mix',
      price: 14.9,
      thumbnail: ProductImage,
    },
    {
      id: '3',
      name: 'Veggie tomato mix',
      price: 14.9,
      thumbnail: ProductImage,
    },
    {
      id: '4',
      name: 'Veggie tomato mix',
      price: 14.9,
      thumbnail: ProductImage,
    },
  ]);
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [selectedFilter]);

  return (
    <View>
      <Header />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={{flex: 1}}>
          <View style={styles.paddingContainer}>
            <Text style={styles.deliciousText}>
              {'Delicious\nfood for you'}
            </Text>
            <SearchBar value={search} onChangeText={setSearch} />
          </View>

          <MenuFilters
            filters={filters}
            onFilterPress={setSelectedFilter}
            selectedFilter={selectedFilter}
          />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.productsContainer}>
              {products.map(product =>
                isLoading ? (
                  <ProductAnimation key={product.id} {...product} />
                ) : (
                  <ProductCard key={product.id} {...product} />
                ),
              )}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 15,
  },
  deliciousText: {
    fontSize: 34,
    color: '#000',
    fontWeight: '700',
    fontFamily: 'System',
  },
  productsContainer: {
    flexDirection: 'row',
  },
  paddingContainer: {
    paddingLeft: 30,
  },
});

export default Home;
