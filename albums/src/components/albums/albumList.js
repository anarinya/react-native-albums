import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { AlbumDetail } from '../';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    this.renderAlbums = this.renderAlbums.bind(this);
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ albums: response.data });
      }).catch(err => console.error(err));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    if (!this.state.albums.length) return <Text>No albums found.</Text>;
    return (
      <ScrollView style={styles.container}>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default AlbumList;