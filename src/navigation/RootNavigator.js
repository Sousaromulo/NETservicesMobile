import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 📌 Telas principais
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import AuthScreen from "../screens/AuthScreen";
import RegisterScreen from "../screens/RegisterScreen";
import MainTabs from "./MainTabs";
import ServiceDetailsScreen from "../screens/ServiceDetailsScreen";
import CreateServiceScreen from "../screens/CreateServiceScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NearbyServicesScreen from "../screens/NearbyServicesScreen";
import ViewContractScreen from "../screens/ViewContractScreen";
import ContractDateScreen from "../screens/ContractDateScreen";
import ContractorInfoScreen from "../screens/ContractorInfoScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PaymentScreen from "../screens/PaymentScreen";
import PaymentConfirmationScreen from "../screens/PaymentConfirmationScreen";
import PaymentDynamicScreen from "../screens/PaymentDynamicScreen";
import ContractNotificationsScreen from "../screens/ContractNotificationsScreen";
import ContractConfirmScreen from "../screens/ContractConfirmScreen";

// 📌 Telas de pesquisa e filtros
import SearchScreen from "../screens/SearchScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import FilterScreen from "../screens/FilterScreen";
import VerTudoScreen from "../screens/VerTudoScreen";

// 📌 Telas de recuperação de senha
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

// 📌 Telas de explorar
import ExploreScreen from "../screens/CompassScreen";
import SavedScreen from "../screens/SavedScreen";
import MyContractsScreen from "../screens/ServicesScreen";

// 📌 Tela para completar perfil após registro
import FillProfileScreen from "../screens/FillProfileScreen";

import AnunciarServicosScreen from "../screens/AnunciarServicosScreen";

// 📌 Criando o stack navigator
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 📌 Fluxo inicial */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      {/* 📌 Recuperação de senha */}
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />

      {/* 📌 Tela principal pós-login */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="FillProfile" component={FillProfileScreen} />

      {/* 📌 Telas internas do app */}
      <Stack.Screen name="ServiceDetails" component={ServiceDetailsScreen} />
      <Stack.Screen name="CreateService" component={CreateServiceScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="NearbyServices" component={NearbyServicesScreen} />
      <Stack.Screen name="AnunciarServicos" component={AnunciarServicosScreen}/>
      <Stack.Screen name="ContractDate" component={ContractDateScreen} />
      <Stack.Screen name="ContractorInfo" component={ContractorInfoScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PaymentConfirmationScreen" component={PaymentConfirmationScreen} />
      <Stack.Screen name="PaymentDynamic" component={PaymentDynamicScreen} />
      <Stack.Screen name="ContractNotifications" component={ContractNotificationsScreen} />
      <Stack.Screen name="ContractConfirm" component={ContractConfirmScreen} />


      {/* 📌 Pesquisa e filtros */}
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="VerTudoScreen" component={VerTudoScreen} />

      {/* 📌 Explorar */}
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="MyContracts" component={MyContractsScreen} />

      {/* 📌 Visualizar contrato */}
      <Stack.Screen name="ViewContract" component={ViewContractScreen} />
    </Stack.Navigator>
  );
}
