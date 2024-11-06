import React from "react";
import { View, FlatList, StyleSheet, Text , Image } from "react-native";
import { useFavorites } from "../context/FavoritesContext"; // Import the context
import Card from "../components/Card"; // Import the Card component
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FavoriteScreen = () => {
  const { favorites } = useFavorites(); 
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/nike/favEmpty.webp')} style={{height:250,width:250}}/>
            <Text style={styles.noFavoritesText}>No items in favorites</Text>
            <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.navigate('home')}>

            <Text style={{padding:10 , borderWidth:1,borderRadius:15,backgroundColor:'#0D6EFD',color:'white',fontSize:16}}>Explore Shoes</Text>
            </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          style={styles.subContainer}
          data={favorites}
          renderItem={({ item }) => {
            const fav = true; 
            return (
              <Card
                filter={"BEST SELLER"}
                image={item.image}
                name={item.name}
                price={item.price}
                fav={fav} 
              />
            );
          }}
          keyExtractor={(item) => item.name} 
          numColumns={2} 
          columnWrapperStyle={styles.row} 
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    width: '100%',
  },
  subContainer: {
    marginTop: 10, // Add top margin for spacing
  },
  row: {
    justifyContent: 'space-evenly',
    marginBottom: 15, // Add margin between rows
  },
  noFavoritesText: {
    
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  }
});

export default FavoriteScreen;
