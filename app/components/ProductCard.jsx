import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function ProductCard({ product }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/products/${product.id}`)}
      className="p-1 w-1/2"
    >
      <View className="bg-white rounded overflow-hidden">
        <Image
          source={{ uri: product.thumbnail }}
          style={{ width: "100%", height: 160 }}
        />
        <View className="px-2">
          <Text className="">{product.title}</Text>
          <Text className="text-lg font-bold">${product.price}</Text>
        </View>
        <View className="flex-row px-2 pb-2 justify-between items-center">
          <TouchableOpacity className="bg-gray-700 rounded p-1">
            <Text className="text-white text-xs">Add To Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-1 rounded border border-gray-500">
            <Text className="text-xs">Buy now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
