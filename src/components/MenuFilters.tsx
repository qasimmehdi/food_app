import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps {
  onFilterPress: (filter: string) => void;
  selectedFilter: string;
  filters: string[];
}

const MenuFilters: FC<IProps> = props => {
  const {onFilterPress, selectedFilter, filters} = props;

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.filterContainer}>
          {filters.map((filter, i) => (
            <TouchableOpacity
              onPress={() => onFilterPress(filter)}
              key={`filter-${i}`}
              style={[styles.filterBtn, i === 0 ? styles.firstFilterBtn : {}]}>
              <Text
                style={[
                  styles.filterBtnText,
                  selectedFilter === filter ? styles.selectedFilterText : {},
                ]}>
                {filter}
              </Text>
              {selectedFilter === filter && <View style={styles.border}></View>}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
  },
  filterBtn: {
    paddingVertical: 20,
  },
  firstFilterBtn: {
    marginLeft: 60,
  },
  filterBtnText: {
    fontSize: 18,
    color: '#9A9A9D',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedFilter: {
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 3,
  },
  selectedFilterText: {
    color: '#FA4A0C',
  },
  border: {
    backgroundColor: '#FA4A0C',
    height: 3,
    width: '100%',
    borderRadius: 5,

    shadowColor: 'rgb(196, 63, 21)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MenuFilters;
