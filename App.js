import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home/index";
import AdminLogin from "./src/Admin/AdminLogin";
import Loading from "./src/Admin/AdminLogin/loading";
import Apps from "./src/Admin/AdminLogin/App";

export default function App() {
  const [splash, IsSplash] = useState(true);
  const [home, IsHome] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      IsSplash(false);
      IsHome(true);
    }, 3000);
  }, []);

  return Loading ? <Home /> : <Apps />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
