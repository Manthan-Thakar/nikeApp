import React from "react";
import { View, FlatList, StyleSheet, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Card from "../components/Card";
import { useFavorites } from "../context/FavoritesContext"; // Import context
import { useNavigation } from '@react-navigation/native';

import Screen from "../components/Screen";
import data from "../data/data";


export default function HomeScreen() {
  const { favorites } = useFavorites(); 
  const navigation = useNavigation();


  const toggleDrawer = () => {
    navigation.openDrawer();  
  };
  
  return (
    <>
    <Screen>
    <View style={styles.dContainer}>
      <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
     <Image source={require('../assets/nike/drawerIcon.png')} style={styles.drawerIcon}/>
    </TouchableOpacity>
    <View style={styles.wtnContainer}>
    <Image
          source={require("../assets/nike/ex.png")}
          style={{ height: 30, width: 27, position: "absolute", right:95,bottom:20}}
        />
        <Text style={styles.text}>Explore</Text>
        </View>
        <TouchableOpacity style={styles.myCart} onPress={()=>navigation.navigate('cart')}>
            <Image source={require('../assets/nike/cart2.png')} style={styles.cartIcon}/>
        </TouchableOpacity>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} >
     <View style={styles.container}>
      
      <View style={styles.searchComponents}>
        <View style={styles.searchBar}>
          <Image source={require("../assets/nike/search.png")} />
          <AppTextInput
            placeholder={"Looking for shoes"}
            style={{ overflow: "hidden", marginLeft: 10 }}
          />
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/nike/filter.png")} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Category selection */}
      <View style={styles.selectCategory}>
        <Text style={styles.selectCategoryText}>Select Category</Text>
        <View style={styles.selectCategoryBox}>
          <TouchableOpacity>
            <Text style={styles.selectCategoryBoxText}>All Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.selectCategoryBoxText, { backgroundColor: "#0D6EFD" }]}>Outdoor</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectCategoryBoxText}>Tennis</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Popular Shoes */}
      <View style={styles.popularShoesContainer}>
        <View style={styles.popularShoesSubcontainer}>
          <Text style={styles.popularShoesContainerText}>Popular Shoes</Text>
          <TouchableOpacity>
            <Text style={{ color: "#0D6EFD" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularShoesContainerData}>
          <FlatList
            pagingEnabled
            snapToInterval={153}
            horizontal
            data={data}
            renderItem={({ item }) => (
              <Card
              onPress={()=>navigation.navigate('details',{ item })}
                filter={"BEST SELLER"}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )}
          />
        </View>
      </View>

      {/* New Arrivals */}
      <View style={styles.popularShoesContainer}>
        <View style={styles.popularShoesSubcontainer}>
          <Text style={styles.popularShoesContainerText}>New Arrivals</Text>
          <TouchableOpacity>
            <Text style={{ color: "#0D6EFD" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newArrivalBox}>
          <View style={styles.newArrivalTextBox}>
            <Text>Summer Sale</Text>
            <Text style={styles.offTextStyle}>15% OFF</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../assets/nike/newA.png")} style={styles.newAOffImage} />
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
    </Screen>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    // marginTop:30,
    flex:1,
    alignItems:'center',
    
    backgroundColor: "#F7F7F9",
  },
  dContainer:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    // flex:1,
    width:'100%',
    height:50,
  },
  button:{
        
    marginLeft:20,
    
},
drawerIcon:{
    height:18,
    width:25.71,
},
wtnContainer: {
  // marginTop: 50,

},
text:{
    fontSize:32,
    fontWeight:'bold',
    justifyContent:'center',
    // marginLeft:100,
},
myCart:{
  marginRight:20
},
  searchComponents: {
    marginTop:20,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: "space-between",
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 14,
    width: 275,
    height: 52,
    alignItems: "center",
    paddingLeft: 20,
    flexDirection: "row",
  },
  selectCategory: {
    
    width: "90%",
  },
  selectCategoryText: {
    fontSize: 16,
    fontWeight: "semibold",
    left: 0,
  },
  selectCategoryBox: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  
  },
  selectCategoryBoxText: {
    borderRadius: 8,
    width: 100,
    height: 40,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  },
  popularShoesContainer: {
    marginTop: 30,
    width: "90%",
    
  },
  filterIcon:{
    height:50,
    width:50,
    marginLeft:10,
  },
  popularShoesContainerText: {
    fontSize: 16,
    fontWeight: "semibold",
    left: 0,
  },
  popularShoesSubcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popularShoesContainerData: {
   
    marginTop: 20,
    flexDirection: "row",
  },
  newArrivalBox:{
    flexDirection:'row',
    width:'100%',
   
    height:150
  },
  newArrivalTextBox:{
    justifyContent:'center',
    alignItems:'center',
    width:'50%'
  },
  offTextStyle:{
    fontSize:36,
    color:'#674CD5',
    
  },
  imageContainer:{
    position:'absolute',
    right:20,
  },
  newAOffImage:{
    height:150,
    width:150,
    
  },

});
