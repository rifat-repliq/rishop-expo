import { ScrollView, View, Text } from "react-native";
import ProductList from "./components/ProductList";
import { Stack } from "expo-router";

export default function index() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <ScrollView className="p-2 flex-1">
        <Text className="font-bold text-xl py-4">Welcome to Rishop!</Text>
        <ProductList />
      </ScrollView>
    </>
  );
}
