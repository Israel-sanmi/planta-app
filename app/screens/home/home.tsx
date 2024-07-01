import { Colors } from "@/constants/Colors";
import { Fonts, height, width } from "@/constants/Font";
import Feather from "@expo/vector-icons/build/Feather";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    { id: "1", title: "All" },
    { id: "2", title: "Indoor" },
    { id: "3", title: "Outdoor" },
    { id: "4", title: "Popular" },
    { id: "5", title: "Red" },
    { id: "6", title: "Green" },
  ]);
  const [plants, setPlants] = useState([
    { id: "1", title: "Monstera", price: "$30" },
    { id: "2", title: "Yucca", price: "$45" },
    { id: "3", title: "Sansevier", price: "$12" },
    { id: "4", title: "Roparotilis", price: "$49" },
  ]);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: Colors.gray100,
        paddingHorizontal: 15,
        borderRadius: 16,
        marginRight: 5,
        paddingVertical: 6,
      }}
    >
      <Text
        style={{
          fontFamily: Fonts.montSemiBold,
          fontSize: 12,
          color: Colors.gray200,
        }}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  const renderPlants = ({ item }: any) => (
    <View
          style={{
            width: width * 0.8,
            height: 370,
            backgroundColor: Colors.lightHover,
            borderRadius: 14,
            padding: 10,
            marginRight: 15
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.montBold,
                fontSize: 24,
              }}
            >
              {item.title}
            </Text>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 100,
                borderColor: Colors.gray100,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Feather name="heart" size={18} color={Colors.gray200} />
            </TouchableOpacity>
          </View>
          <Image source={require("@/assets/images/onboard3.png")} style={{
              width: width * 0.8,
              resizeMode: "contain",
              height: height * 0.35,
              marginVertical: 5
          }}/>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.montBold,
                fontSize: 24,
              }}
            >
              {item.price}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 100,
                borderColor: Colors.gray100,
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 8
              }}
            >
              <Text style={{
                fontFamily: Fonts.montSemiBold
              }}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              fontSize: 18,
            }}
          >
            Choose your
          </Text>
          <Text
            style={{
              fontFamily: Fonts.montSemiBold,
              color: Colors.primary,
              fontSize: 22,
            }}
          >
            favourite plant
          </Text>
        </View>
        <View style={styles.avatar}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "gray",
          borderRadius: 20,
          borderWidth: 1,
          paddingHorizontal: 16,
          paddingVertical: 6,
          marginVertical: 10,
        }}
      >
        <Feather name="search" size={18} color={Colors.gray200} />
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Search for any plant"
          style={{
            fontFamily: Fonts.roboteReg,
            color: Colors.gray200,
            marginLeft: 10,
          }}
        />
      </View>
      <View
        style={{
          width: width * 0.91,
          height: 150,
          backgroundColor: Colors.lightActive,
          borderRadius: 12,
          paddingVertical: 10,
          paddingLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 22,
              fontFamily: Fonts.montSemiBold,
            }}
          >
            Upto 30% OFF
          </Text>
          <Text
            style={{
              fontFamily: Fonts.roboteReg,
              lineHeight: 20,
              paddingVertical: 10,
            }}
          >
            Enjoy your big offer of{"\n"}the week
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              borderRadius: 8,
              padding: 9,
              width: width * 0.21,
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Shop now
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("@/assets/images/onboard3.png")}
            style={{
              width: width * 0.4,
              resizeMode: "contain",
              height: height * 0.3,
              marginTop: -50,
            }}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          onEndReachedThreshold={0.5}
        />
      </View>
      <View>
        <FlatList
          data={plants}
          renderItem={renderPlants}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor:"white"
  },
  avatar: {
    backgroundColor: "gray",
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  flatlist: {
    marginVertical: 16,
  },
});
export default HomeScreen;
