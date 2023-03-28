import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback, View} from 'react-native';

class TouchableHighlightComponentPractice extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* ====Touchable with Highlights==== */}
        <TouchableHighlight onPress={this.onPress}>
          <View style={styles.button}>
            <Text>Touchable Highlights</Text>
          </View>
        </TouchableHighlight>
        {/* =====Touchable Opacity===== */}
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Touchable Opacity</Text>
        </TouchableOpacity>
        {/* ====Touchable without feedback==== */}
        <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.button}>
                <Text>Touchable without feedback</Text>
            </View>
      </TouchableWithoutFeedback>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
});

export default TouchableHighlightComponentPractice;