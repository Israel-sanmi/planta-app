import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Fonts, height, width } from "@/constants/Font";
import { Colors } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const slidesText = [
  {
    id: "1",
    image: require("@/assets/images/onboard1.png"),
    title: "Welcome to",
    subtitle: (
      <Text>
        Planta <Text style={{ color: "black" }}>Sphere</Text>
      </Text>
    ),
  },
  {
    id: "2",
    image: require("@/assets/images/onboard2.png"),
    title: (
      <Text>
        We provide high{" "}
        <Text style={{ color: Colors.primary }}>quality plants</Text> just for
        you
      </Text>
    ),
    subtitle: "",
  },
  {
    id: "3",
    image: require("@/assets/images/onboard3.png"),
    title: (
      <Text>
        Get tips, plan growth and unlock plant secrets! The fun{" "}
        <Text style={{ color: Colors.primary }}>starts now!</Text>
      </Text>
    ),
    subtitle: "",
  },
];

interface SlideItem {
  image: any;
  title: string;
  subtitle: string;
}

interface SlideProps {
  item: SlideItem;
  currentSlideIndex: number;
}

const IntroductionScreen = ({ navigation }: any) => {
  const ref = useRef<FlatList<any>>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slidesText.length) {
      const offset = nextSlideIndex * width;
      ref.current?.scrollToOffset({ offset, animated: true });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slidesText.length - 1;
    const offset = lastSlideIndex * width;
    ref.current?.scrollToOffset({ offset, animated: true });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Slide: React.FC<SlideProps> = ({ item }) => {
    return (
      <SafeAreaView style={styles.slide}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Image source={item.image} style={styles.image} />
        </View>
      </SafeAreaView>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        {currentSlideIndex == slidesText.length - 1 ? (
          <View style={styles.getStartedContainer}>
            <TouchableOpacity
              onPress={() => navigation.replace("screens/started/getStarted")}
              style={[styles.btn, styles.getStartedButton]}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.nextContainer}>
            <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={skip} style={[styles.btn]}>
              <Text style={[styles.skipText]}>Skip</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slidesText}
        contentContainerStyle={{ height: height * 1 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => (
          <Slide item={item} currentSlideIndex={currentSlideIndex} />
        )}
      />
      <View style={styles.indicatorContainer}>
        {slidesText.map((_, index) => (
          <View
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.activeIndicator,
            ]}
            key={index}
          />
        ))}
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: width,
    paddingHorizontal: 16,
    backgroundColor: Colors.light,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
    borderRadius: 5,
  },
  activeIndicator: {
    backgroundColor: Colors.primary,
    width: 10,
    height: 10,
  },
  skipText: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 16,
    color: Colors.primary,
    padding: 10,
    textAlign: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: Fonts.montSemiBold,
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 30,
    fontFamily: Fonts.montBold,
  },
  image: {
    width: width,
    resizeMode: "contain",
    height: height * 0.4,
  },
  footer: {
    paddingBottom: 20,
  },
  getStartedContainer: {
    height: 50,
    alignItems: "center",
  },
  getStartedButton: {
    width: width * 0.95,
    backgroundColor: Colors.primary,
  },
  getStartedText: {
    fontSize: 16,
    color: "white",
    paddingVertical: 15,
    borderRadius: 8,
    textAlign: "center",
    fontFamily: Fonts.roboteReg,
  },
  nextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  nextText: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 16,
    backgroundColor: Colors.primary,
    color: "white",
    padding: 10,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 8,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
  },
});
