/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

export default class AwesomeProject extends Component {
   constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // Initial value for opacity: 0
    };
  }
  componentDidMount() {
    Animated.timing(                            // Animate over time
      this.state.fadeAnim,                      // The animated value to drive
      {
        toValue: 1,
        duration: 2000,                            // Animate to opacity: 1, or fully opaque
      }
    ).start();                                  // Starts the animation
  }
  render() {
    let pic = {uri: 'http://core0.staticworld.net/images/article/2017/01/pornhub-100704300-large.jpeg'};
    return (
      <Animated.View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: this.state.fadeAnim,          // Bind opacity to animated value
        }}>
        <Text style={styles.welcome}>
          Welcome to Karl's chamber of secrets!
        </Text>
        <Image source={pic} style={{width: 400, height:200}}/>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
