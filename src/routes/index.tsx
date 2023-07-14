import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabs.routes";
import React from "react";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}
