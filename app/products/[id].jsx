import { Stack, useSearchParams } from "expo-router";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";

export default function ProductDetail() {
  const { id } = useSearchParams();
  const { isLoading, data, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();

  return (
    <ScrollView className="flex-1 ">
      <Stack.Screen options={{ title: "Product details" }} />
      {isLoading && (
        <View className="h-80 justify-center items-center">
          <ActivityIndicator
            size="large"
            visible={true}
            textContent={"Loading..."}
          />
        </View>
      )}
      {data && (
        <View className="w-full">
          <View className="overflow-hidden">
            <Image
              source={{ uri: selectedImage || data.thumbnail }}
              style={{ width: "100%", height: 400 }}
            />
            <ScrollView horizontal={true} className="divide-x">
              {data.images.map((image) => (
                <TouchableOpacity
                  key={image}
                  onPress={() => setSelectedImage(image)}
                >
                  <Image
                    source={{ uri: image }}
                    style={{ width: 100, height: 100 }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View className="p-2">
              <Text className="text-xl font-bold">{data.title}</Text>
              <Text className="text-5xl font-bold pt-2">${data.price}</Text>
            </View>

            <View className="flex-row gap-4 p-2">
              <TouchableOpacity
                onPress={() => dispatch(addToCart(data))}
                className="flex-1 border-2 border-gray-500 rounded-md"
              >
                <Text className="text-lg text-center py-2">Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 border-2 border-gray-500 rounded-md">
                <Text className="text-lg text-center py-2">Buy now</Text>
              </TouchableOpacity>
            </View>

            <View className="p-2 space-y-2">
              {Object.keys(data).map((key) => (
                <View key={key} className="flex-row">
                  <Text className="flex-1"> {key.toUpperCase()}</Text>
                  <Text className=" font-semibold flex-1">: {data[key]}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
