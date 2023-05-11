import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";

export default function HeaderCartIcon() {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push("/cart")} className="relative">
      <AntDesign name="shoppingcart" size={24} color="black" />
      <View className="absolute -top-2 -right-2 z-10 w-5 h-5 flex justify-center items-center rounded-full bg-red-500">
        <Text className="text-white font-bold ">{cart.length}</Text>
      </View>
    </TouchableOpacity>
  );
}
