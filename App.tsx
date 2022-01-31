import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";

import { AppStateStatus, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyTracksScreen from "./src/screens/MyTracksScreen";
import BrowseScreen from "./src/screens/BrowseScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubscribeScreen from "./src/screens/SubscribeScreen";
import { Ionicons } from "@expo/vector-icons";
import MoreScreen from "./src/screens/MoreScreen";
import { Routes } from "./src/constants/Routes";
import { SWRConfig } from "swr";
import { AppState } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            if (
              appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // Subscribe to the app state change events
          const subscription: any = AppState.addEventListener(
            "change",
            onAppStateChange
          );

          return () => {
            subscription.remove();
          };
        },
      }}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any = "browsers-outline";
              if (route.name === Routes.BROWSE) {
                iconName = focused ? "browsers" : "browsers-outline";
              } else if (route.name === Routes.MY_TRACKS) {
                iconName = focused ? "wallet" : "wallet-outline";
              } else if (route.name === Routes.SUBSCRIBE) {
                iconName = focused ? "cog" : "cog-outline";
              } else if (route.name === Routes.MORE) {
                iconName = focused
                  ? "ellipsis-horizontal"
                  : "ellipsis-horizontal-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name={Routes.BROWSE} component={BrowseScreen} />
          <Tab.Screen name={Routes.MY_TRACKS} component={MyTracksScreen} />
          <Tab.Screen name={Routes.SUBSCRIBE} component={SubscribeScreen} />
          <Tab.Screen name={Routes.MORE} component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SWRConfig>
  );
}
registerRootComponent(App);
