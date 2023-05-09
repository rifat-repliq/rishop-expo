import { useSearchParams } from "expo-router";
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

export default function ProductDetail() {
  const { id } = useSearchParams();
  const { isLoading, data, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ScrollView className="flex-1 ">
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
              <Text className="text-lg">{data.title}</Text>
              <Text className="text-xl font-bold">${data.price}</Text>
            </View>

            <View className="p-2 space-y-2">
              {Object.keys(data).map((key) => (
                <Text>
                  {key.toUpperCase()}:{" "}
                  <Text className="font-bold">{data[key]}</Text>
                </Text>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
