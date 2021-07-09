import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

export const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>Merhaba</Text>
      <Icon
        reverse
        name="ios-american-football"
        type="ionicon"
        color="#517fa4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
