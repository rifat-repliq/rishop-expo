import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import HeaderCartIcon from "./components/common/HeaderCartIcon";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: true,
            headerRight: () => <HeaderCartIcon />,
          }}
        />
      </Provider>
    </QueryClientProvider>
  );
}
