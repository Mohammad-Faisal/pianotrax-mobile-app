import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { Routes } from "../constants/Routes";
import useCategoryListFetch from "../hooks/useCategoryListFetch";

const CategoryListScreen = ({ navigation }: any) => {
  const { categories, isLoading, isError } = useCategoryListFetch();

  return (
    <View style={styles.container}>
      <Text> Categories </Text>
      <FlatList
        style={styles.listContainer}
        data={categories}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate(Routes.CATEGORY_DETAILS, {
                categorySlug: item.slug,
                categoryName: item.name,
              })
            }
            style={styles.row}
          >
            {item.name}
          </Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryListScreen;

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
