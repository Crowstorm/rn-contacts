import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { black, white } from "./Colors";

export const ContainerStyles = StyleSheet.create({
  APP_CONTAINER: {
    backgroundColor: white,
    height: hp("100%"),
    paddingHorizontal: wp("5%"),
    justifyContent: "center",
  },
});

export const TextStyles = StyleSheet.create({
  PRIMARY_TEXT: {
    color: black,
    fontSize: hp("4%"),
    textAlign: "center",
  },
});
