import { Platform } from "react-native";
import Constants from "expo-constants";

const ENV_API = process.env.EXPO_PUBLIC_API_URL as string | undefined;
const constantsApi = (Constants?.expoConfig as any)?.extra?.apiUrl as string | undefined;

const defaultPerPlatform = Platform.select({
  android: "http://10.0.2.2:3000",
  ios: "http://localhost:3000",
  default: "http://localhost:3000",
});

export const API_URL = ENV_API || constantsApi || (defaultPerPlatform as string);