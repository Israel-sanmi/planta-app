import { Dimensions } from "react-native";
import { Colors } from "./Colors";

export const Fonts = {
  montBold: "MontserratBold",
  montSemiBold: "MonteserratSemi",
  robotoMedium: "RobotoMedium",
  roboteReg: "RobotoRegular",
};

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const mainText = {
  fontFamily: Fonts.montSemiBold,
  fontSize: 30,
  color: Colors.primary,
};
