import Navigation from "./navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </CartProvider>
    </FavoritesProvider>
  );
}
