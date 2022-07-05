import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import ImageSlider from "react-native-image-slider";
import AutoHeightImage from "react-native-auto-height-image";

const { width, height } = Dimensions.get("window");
console.log(height);
const Modal = ({ item, close }) => {
  console.log(item);
  return (
    <SafeAreaView style={styled.View}>
      <ScrollView>
        <Text style={styled.Title}>{item.title}</Text>
        <ImageSlider
          style={[styled.Image]}
          images={item.image}
          ImageComponentStyle={{
            height: "50%",
            width: width - 50,
            marginTop: 5
          }}
        />
        {/* <FlatList
          style={{ height: height - 20 }}
          data={item.image}
          horizontal
          renderItem={(items) => {
            console.log(items);
            return <Image style={styled.Image} source={{ uri: items.item }} />;
          }}
        /> */}
        {/* <Image style={styled.Image} source={{ uri: item.image }} /> */}
        <Text style={styled.Desc}>{item.description}</Text>
        <Pressable>
          <Text style={styled.close} onPress={close}>
            닫기
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  View: {
    flex: 1,
    zIndex: 5,
    elevation: 3,
    height: height,
    width: width,
    backgroundColor: "#ffffff",
    alignItems: "center",
    position: "absolute"
  },
  Title: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    color: "blue",
    marginTop: 10
  },
  Desc: {
    position: "relative",
    fontSize: 15,
    padding: 10,
    width: width - 30,
    marginVertical: 15
  },
  Image: {
    width: width - 50,
    height: "100%",
    marginHorizontal: 10
  },
  close: {
    position: "relative",
    marginBottom: 30,
    color: "red"
  }
});

export default Modal;
