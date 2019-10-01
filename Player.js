import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, NativeModules} from 'react-native';
import Orientation from 'react-native-orientation-locker';
console.log("TCL: NativeModules", NativeModules)
// import {
//   MediastreamPlayer,
//   MediastreamPlayerModules,
// } from 'react-native-mediastream-player';

function Player() {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => [
      // MediastreamPlayerModules.dismissMediastreamPlayer(),
      Orientation.lockToPortrait(),
    ];
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.player}>
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
  player: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
});

export default Player;
