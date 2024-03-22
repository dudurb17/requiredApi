import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Principal from "../pages/Principal";
import Repositorios from "../pages/Repositorios";
import CriarRepositorio from "../pages/CriarRepositorio";
import InfoRepositorio from "../pages/InfoRepositorio";

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Principal"
          options={{ title: "Perfil" }}
          component={Principal}
        />
        <Tab.Screen name="Repositorios" component={Repositorios} />
        <Tab.Screen
          name="CriarRepositorio"
          options={{ title: "Criar Repositório" }}
          component={CriarRepositorio}
        />
        <Tab.Screen
          name="InfoRepositorio"
          options={{ title: "Repositório Info" }}
          component={InfoRepositorio}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
