import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Details } from '../pages/Details';
import { Favorites } from '../pages/Favorites';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { Text } from 'react-native';
import Login from '../pages/Auth/Login/index';
import Register from '../pages/Auth/Register';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase/firebase';
import { Profile } from '../pages/Auth/Profile';

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const [username, setUsername] = useState<string>("Login");

  onAuthStateChanged(auth, (user: any) => {
    if(user && user.displayName) {
      setUsername(user.displayName.split(" ")[0]);
    } else {
      setUsername("Login");
    }
  })

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#242a32",
          height: 78,
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#0296E5",
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#0296E5",
        tabBarInactiveTintColor: "#67686D",
      }}
    >
      <Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }: any) => (
          <>
            <Feather name="home" size={24} color={color} />
            <Text style={{ color: color, fontFamily: "Poppins-600", fontSize: 12 }}>Home</Text>
          </>
        )
      }}
      />
      <Screen name="Details" component={Details} options={{
        tabBarButton: () => null,
      }}
      />
      <Screen name="Register" component={Register} options={{
        tabBarButton: () => null,
      }}
      />
      <Screen name="Buscar" component={Search} options={{
        tabBarIcon: ({ color }: any) => (
          <>
            <Feather name="search" size={24} color={color} />
            <Text style={{ color: color, fontFamily: "Poppins-600", fontSize: 12 }}>Buscar</Text>
          </>
        )
      }}
      />
      <Screen name="Favoritos" component={Favorites} options={{
        tabBarIcon: ({ color }: any) => (
          <>
            <Feather name="bookmark" size={24} color={color} />
            <Text style={{ color: color, fontFamily: "Poppins-600", fontSize: 12 }}>Favoritos</Text>
          </>
        )
      }}
      />
      <Screen name="Login" component={username == "Login" ? Login : Profile} options={{
        tabBarIcon: ({ color }: any) => (
          <>
            <Feather name="user" size={24} color={color} />
            <Text style={{ color: color, fontFamily: "Poppins-600", fontSize: 12 }}>{username}</Text>
          </>
        )
      }}
      />
    </Navigator>
  )
}
