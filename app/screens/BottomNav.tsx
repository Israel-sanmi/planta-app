import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import HomeScreen from "./home/home";
import { Colors } from "@/constants/Colors";
import Icon, { Icons } from "@/components/Icons";
import Favourite from "./home/fav";
import Scan from "./home/scan";
import Cart from "./home/cart";
import Users from "./home/user";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "home",
    inActiveIcon: "home-outline",
    component: HomeScreen,
  },
  {
    route: "Favourite",
    label: "Favourite",
    type: Icons.Ionicons,
    activeIcon: "heart",
    inActiveIcon: "heart-outline",
    component: Favourite,
  },
  {
    route: "Scan",
    label: "Scan",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "line-scan",
    inActiveIcon: "line-scan",
    component: Scan,
  },
  {
    route: "Cart",
    label: "Cart",
    type: Icons.Ionicons,
    activeIcon: "cart",
    inActiveIcon: "cart",
    component: Cart,
  },
  {
    route: "Users",
    label: "Users",
    type: Icons.AntDesign,
    activeIcon: "user",
    inActiveIcon: "user",
    component: Users,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 1.3 },
        1: { scale: 1.5 },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5 },
        1: { scale: 1.3 },
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <Animatable.View ref={viewRef} duration={1000}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.primary : Colors.gray300}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 45,
            position: "absolute",
            margin: 16,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.gray50
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
  },
});
