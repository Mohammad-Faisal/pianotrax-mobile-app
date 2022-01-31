import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Routes } from "../constants/Routes";
import useCategoryDetailsFetch from "../hooks/useCategoryDetailsFetch";

const CategoryDetailsScreen = ({ navigation, route }: any) => {
  console.log(route.params.categorySlug);
  const { songs, isLoading, isError } = useCategoryDetailsFetch(
    route.params.categorySlug,
    0
  );

  useEffect(() => {
    navigation.setOptions({ title: route.params.categoryName });
  }, []);

  console.log("songs ", songs[0]);

  return (
    <View style={styles.container}>
      <Text> Songs for {route.params.categoryName} </Text>
      <FlatList
        style={styles.listContainer}
        data={songs}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate(Routes.SONG_DETAILS, {
                songSlug: item.slug,
                songName: item.name,
              })
            }
            style={styles.row}
            key={item.id}
          >
            {item.name}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryDetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  listContainer: {
    flex: 1,
  },
  row: {
    height: 60,
    margin: 15,
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue",
  },
});
