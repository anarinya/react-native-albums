import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.artistImage} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.albumHeader}>
          <Text style={styles.albumTitle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.albumImage} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  albumHeader: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumTitle: {
    fontSize: 18
  },
  artistImage: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;