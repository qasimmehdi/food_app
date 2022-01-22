import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ProductAnimation: FC = () => {
  return (
    <View style={styles.animationContainer}>
      <SkeletonPlaceholder
        backgroundColor="#F9F9F9"
        highlightColor="rgba(250,74,12,0.2)"
        speed={1000}>
        <SkeletonPlaceholder.Item
          width={220}
          height={270}
          borderRadius={30}
          backgroundColor="#F9F9F9"
          marginBottom={15}
          marginTop={80}>
          <SkeletonPlaceholder.Item
            width={160}
            height={160}
            borderRadius={80}
            borderWidth={3}
            borderColor="white"
            alignSelf="center"
            backgroundColor="#F9F9F9"
            position="relative"
            marginTop={-60}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    marginLeft: 30,
  },
});
export default ProductAnimation;
