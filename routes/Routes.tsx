import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Login from "../screens/Login";

import firestore from "@react-native-firebase/firestore";
import { useRecoilState } from "recoil";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const StackLogin = createStackNavigator();

const LoginStack = () => (
  <StackLogin.Navigator
    screenOptions={{
      // headerBackground: () => null,
      headerTransparent: true,
      headerShown: false,
      headerStyle: {
        backgroundColor: "transparent"
      }
    }}>
    <StackLogin.Screen name="Login" component={Login} />
  </StackLogin.Navigator>
);

// const HomeStack = () => (
//   <Drawer.Navigator
//     initialRouteName="Recipes"
//     // useLegacyImplementation
//     drawerContent={(props: any) => <Sidebar {...props} />}
//     screenOptions={{
//       headerShown: false,
//       drawerContentContainerStyle: {
//         backgroundColor: "white"
//       },
//       drawerActiveBackgroundColor: "#FF1E00",
//       drawerActiveTintColor: "white",
//       drawerInactiveTintColor: "#6D6D6D",
//       drawerInactiveBackgroundColor: "white",
//       drawerLabelStyle: {
//         fontSize: 16,
//         fontWeight: "bold",
//         marginLeft: -10
//       }
//     }}>
//     <Drawer.Screen
//       options={{
//         drawerIcon: ({ color }) => (
//           <WalletIcon className="mt-2" size={22} stroke={color} strokeWidth={1.6} />
//         )
//       }}
//       name="Wallet"
//       component={Wallet}
//     />
//     <Drawer.Screen
//       options={{
//         drawerIcon: ({ color }) => <RecipeIcon className="mt-2" size={22} fill={color} />
//       }}
//       name="Recipes"
//       component={RecipeStack} //
//     />
//     <Drawer.Screen
//       options={{
//         drawerIcon: ({ color }) => <MealsIcon className="mt-2" size={22} color={color} />
//       }}
//       name="My Meals"
//       component={Meals}
//     />
//   </Drawer.Navigator>
// );
const Routes = () => {
  //   const [user, setUser] = useRecoilState(userState);
  return <NavigationContainer>{<LoginStack />}</NavigationContainer>;
};

export default Routes;
