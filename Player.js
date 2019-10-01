import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation-locker';

function Player() {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return Orientation.lockToPortrait;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Player</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Player;
