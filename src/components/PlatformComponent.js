import {Platform} from "react-native";

const Component = Platform.select({
    ios: () => require('ComponentIOS'),
    android: () => require('ComponentAndroid'),
    native: () => require('ComponentForNative'),
    default: () => require('ComponentForWeb')
})();
