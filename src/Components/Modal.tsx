import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const { width, height } = Dimensions.get("window");
console.log(height);
const Modal = ({ item, close }) => {
  console.log(item);
  return (
    <SafeAreaView style={styled.View}>
      <Text style={styled.Title}>{item.title}</Text>
      <FlatList
       data = {item.image}
       horizontal
       renderItem={(items) => {
        console.log(items)
        return(<Image style={styled.Image} source={{ uri: items.item }} />)
       }}
      />
       {/* <Image style={styled.Image} source={{ uri: item.image }} /> */}
      <Text style={styled.Desc}>{item.description}</Text>
      <Pressable onPress={close}>
        <Text style={styled.close}>닫기</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styled = StyleSheet.create({
  View: {
    flex: 1,
    zIndex: 3,
    elevation: 3,
    height: height,
    width: width,
    backgroundColor: "#ffffff",
    alignItems: "center",
    position: "absolute",
  },
  Title: {
    position: "relative",
    fontSize: 20,
    fontWeight: "600",
    padding: 10,
    color: "blue",
    marginTop: 10,
  },
  Desc: {
    position: "relative",
    fontSize: 15,
    padding: 10,
  },
  Image: {
    width: width - 50,
    height: height - 500,
  },
  close: {
    position: "relative",
    marginBottom: 1,
    color: "red",
  },
});

export default Modal;
