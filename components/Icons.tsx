import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
} from "@expo/vector-icons";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

export interface IconProps {
  type: React.ComponentType<any>;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ type: Tag, name, color, size = 18, style }: IconProps) => {
  return (
    <>
      {Tag && name && (
        <Tag name={name} size={size} color={color} style={style} />
      )}
    </>
  );
};

export default Icon;
