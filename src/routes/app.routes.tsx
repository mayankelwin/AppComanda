import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../views/home";
import { MapaService } from "../views/mapService";

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
      <Navigator screenOptions={{headerShown: false}}>
          <Screen name="Home" component={Home} />
          <Screen name="Mapa" component={MapaService} />

      </Navigator>
  )
}
