import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {
  MediastreamPlayer,
  MediastreamPlayerModules,
} from 'react-native-mediastream-player';

function Player() {
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
    return () => [
      MediastreamPlayerModules.dismissMediastreamPlayer(),
      Orientation.lockToPortrait(),
    ];
  });
  const configPlayer = {
    id: '5d4363f705a94508a8edf0b4',
    type: 'VOD',
    environment: 'production',
    autoPlay: true,
    live: false,
    showControls: false,
    customUI: false,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.player}>
        <Text>Player</Text>
        <MediastreamPlayer {...configPlayer} style={styles.player} />
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
