import AsyncStorage from "@react-native-async-storage/async-storage";
import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseQueryWithRath = async (args, api, extraOptions) => {
  // const result = await baseQuery(args, api, extraOptions);

  const token = await AsyncStorage.getItem("token");

  try {
    const result = await axios({
      baseURL: "http://182.252.68.227:10000/api",
      ...args,
      url: args.url,
      method: args.method,
      data: args.body,
      headers: {
        ...args.headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (typeof result?.data === "string") {
      const withCurly = result.data + "}";
      return { data: JSON.parse(withCurly) };
    }

    return { data: result?.data };
  } catch (error) {
    if (error.response?.data) {
      if (typeof error.response.data === "string") {
        const withCurly = error.response.data + "}";
        return { error: JSON.parse(withCurly) };
      } else {
        return { error: error.response.data };
      }
    }

    return {
      error: {
        status: error.response?.status || 500,
        data: error.message || "Something went wrong",
      },
    };
  }
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRath,
  endpoints: () => ({}),
  tagTypes: [
    "auth",
    "attractions",
    "bucket",
    "friend",
    "dashboard",
    "equipment",
    "quests",
    "setting",
    "subscription",
  ],
});

export const ImageUrl = "http://182.252.68.227:10000";

export const makeImage = (url) => {
  if (url) {
    return ImageUrl + url;
  }
  return "";
};
