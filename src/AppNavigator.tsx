import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importa as telas
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Conf';
import AboutScreen from './screens/Sobre';
import AccountScreen from './screens/Conta';

// Tipos das rotas
// Stack principal
export type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined;
  Account: undefined;
};

// Tabs
export type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
  About: undefined;
};

// Criação dos navegadores
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

// Tabs (Home, Configurações, Sobre)
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Settings')
            iconName = focused ? 'settings' : 'settings-outline';
          else iconName = focused ? 'information-circle' : 'information-circle-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ title: 'Sobre' }} />
    </Tab.Navigator>
  );
}

// Navegação geral (Stack)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela inicial de Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Tabs principais */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
