import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import HeaderCartIcon from "./components/common/HeaderCartIcon";

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerRight: () => <HeaderCartIcon />,
        }}
      />
    </Provider>
  );
}
