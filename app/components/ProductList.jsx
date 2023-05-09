import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
import useFetch from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { isLoading, data, error } = useFetch("https://dummyjson.com/products");
  return (
    <View className="flex-1 ">
      <Text className="text-lg pb-4">All Products</Text>
      {isLoading && (
        <View className="h-80 justify-center items-center">
          <ActivityIndicator
            size="large"
            visible={true}
            textContent={"Loading..."}
          />
        </View>
      )}

      <View className="flex-row flex-wrap ">
        {data &&
          data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </View>
    </View>
  );
}
