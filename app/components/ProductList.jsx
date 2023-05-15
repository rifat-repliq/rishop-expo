import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

export default function ProductList() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios.get("https://dummyjson.com/products").then((res) => {
        return res.data;
      }),
  });

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
