import { Stack } from "expo-router";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../redux/cart/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <ScrollView className="p-2 flex-1">
      <Stack.Screen options={{ title: "Cart" }} />
      <Text className="font-bold text-xl py-4">Shopping cart</Text>

      <View className="mt-5 gap-1">
        {cart.map((item) => (
          <View
            key={item.id}
            className="flex-row gap-4 p-2 shadow bg-white rounded"
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 100, height: 100, objectFit: "cover" }}
            />
            <View>
              <Text className="text-lg">{item.title}</Text>
              <Text>
                ${item.price} x {item.quantity} = {item.price * item.quantity}
              </Text>
              <View className="flex-row gap-4 items-center mt-1">
                <TouchableOpacity
                  onPress={() => dispatch(decreaseQuantity({ id: item.id }))}
                  className="px-4 py-1 rounded bg-blue-500"
                >
                  <Text className=" font-bold text-white">-</Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(increaseQuantity({ id: item.id }))}
                  className="px-4 py-1 rounded bg-blue-500"
                >
                  <Text className=" font-bold text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View className="flex-row justify-between mt-5">
          <Text className="font-bold text-lg">Total</Text>
          <Text className="font-bold text-lg">
            ${cart.reduce((acc, crr) => (acc += crr.price * crr.quantity), 0)}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
