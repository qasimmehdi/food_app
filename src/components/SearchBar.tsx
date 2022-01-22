import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

interface IProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: FC<IProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <FeatherIcons
        style={styles.searchIcon}
        name="search"
        size={24}
        color="#000000"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#777777"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#EFEEEE',
    height: 60,
    borderRadius: 30,
    paddingRight: 30,
    paddingLeft: 55,
    fontSize: 18,
  },
  inputContainer: {
    position: 'relative',
    marginVertical: 20,
    marginRight: 30,
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    left: 20,
  },
});

export default SearchBar;
