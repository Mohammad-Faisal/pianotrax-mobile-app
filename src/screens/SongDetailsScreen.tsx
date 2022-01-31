import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import useSongDetailsFetch from "../hooks/useSongDetailsFetch";
import { UrlGenerator } from "../utils/UrlGenerator";
import { Ionicons } from "@expo/vector-icons";

var Sound = require("react-native-sound");

Sound.setCategory("Playback");

const SongDetailsScreen = ({ navigation, route }: any) => {
  var audio = new Sound(
    "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3",
    null,
    (error: any) => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      // if loaded successfully
      console.log(
        "duration in seconds: " +
          audio.getDuration() +
          "number of channels: " +
          audio.getNumberOfChannels()
      );
    }
  );

  const [playing, setPlaying] = useState<boolean>(false);
  useEffect(() => {
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);
  const playPause = () => {
    if (audio.isPlaying()) {
      audio.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      audio.play((success: any) => {
        if (success) {
          setPlaying(false);
          console.log("successfully finished playing");
        } else {
          setPlaying(false);
          console.log("playback failed due to audio decoding errors");
        }
      });
    }
  };
  console.log("song slug is ", route.params.songSlug);
  const { songDetails, isLoading, isError } = useSongDetailsFetch(
    route.params.songSlug
  );

  console.log("songs details are ", songDetails[0]);

  console.log(UrlGenerator.generateTrackPreviewUrl(songDetails[0]?.id));
  return (
    <View>
      <Text>The details for song {route.params.songName}</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
          <Ionicons
            name={playing ? "ios-pause-outline" : "ios-play-outline"}
            size={36}
            color={"#fff"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SongDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  playBtn: {
    padding: 20,
  },
});
