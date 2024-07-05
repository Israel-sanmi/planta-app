import TopNav from "@/components/header";
import { Colors } from "@/constants/Colors";
import { Fonts, height, width } from "@/constants/Font";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopNav headText={"Shopping cart"} />
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.gray100,
              
              height: height * 0.15,
              borderRadius: 8,
              padding: 5,
              flexDirection: "row",
              gap: 10,
              position: "relative",
              marginBottom: 5,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: 100,
                backgroundColor: Colors.gray50,
                borderRadius: 8,
              }}
            >
              <Image
                source={require("@/assets/images/flower.png")}
                style={{
                  width: width * 0.3,
                  resizeMode: "contain",
                  height: height * 0.12,
                  marginVertical: 5,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontFamily: Fonts.montSemiBold,
                  color: "black",
                  fontSize: 18,
                }}
              >
                Banana
              </Text>
              <View
                style={{
                  width: 80,
                  height: 28,
                  backgroundColor: Colors.gray50,
                  borderRadius: 20,
                  padding: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 13,
                  }}
                >
                  60 x 40cm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: width * 0.6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Fonts.montSemiBold,
                    fontSize: 20,
                  }}
                >
                  $6,750
                </Text>
                <View
                  style={{
                    backgroundColor: Colors.gray50,
                    flexDirection: "row",
                    padding: 5,
                    borderRadius: 12,
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity onPress={decrement}>
                    <Text style={styles.countBtn}>-</Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: Fonts.montSemiBold,
                      fontSize: 15,
                    }}
                  >
                    {count}
                  </Text>
                  <TouchableOpacity onPress={increment}>
                    <Text style={styles.countBtn}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{
                position: "absolute",
                top: 3,
                right: 3,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  countBtn: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingHorizontal: 5,
    fontFamily: Fonts.montSemiBold,
    fontSize: 15,
  },
  scrollViewContent: {
    // paddingHorizontal: 16,
    // paddingTop: 20,
    paddingBottom: 70,
    // width: width * 0.93,
  },
});

export default Cart;
