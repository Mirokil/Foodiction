import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const colors = {
    top: "#151718",
    middle: "#1d2024",
    bottom: "#373b40",
    black: '#000000',
    gray: "#e6e6e6",
    darkgray: "#8a8d8f",
    green: "#01d494",
    darkgreen: "#181d1b",
    darkblue: '#242247',
    transparent: "transparent"
};

export const sizes = {
    width,
    height
};

export const fonts = {
    h1: { fontFamily: "MuseoSansRounded1000" },
    h2: { fontFamily: "MuseoSansRounded900" },
    h3: { fontFamily: "MuseoSansRounded700" },
    h4: { fontFamily: "MuseoSansRounded500" },
    h5: { fontFamily: "MuseoSansRounded300" }
};

const appTheme = { colors, sizes, fonts };

export default appTheme;