import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, AlbumList } from './src/components';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Albums" />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

Expo.registerRootComponent(App);
