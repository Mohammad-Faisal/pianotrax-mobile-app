import React from "react";
import { Routes } from "../constants/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryListScreen from "./CategoryListScreen";
import CategoryDetailsScreen from "./CategoryDetailsScreen";
import SongDetailsScreen from "./SongDetailsScreen";

const Stack = createNativeStackNavigator();

const BrowseScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.CATEGORY_LIST}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{ title: "Categories" }}
      />
      <Stack.Screen name="Category Details" component={CategoryDetailsScreen} />
      <Stack.Screen name="Song Details" component={SongDetailsScreen} />
    </Stack.Navigator>
  );
};

export default BrowseScreen;
