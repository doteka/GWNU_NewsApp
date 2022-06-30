import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Touchable,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import Modal from "./Modal";

const TITLE_MAX_LENGTH = 24;
const DESC_MAX_LENGTH = 55;
const NewsList_FlatList = ({ newsData }) => {
  const [modalView, setModalView] = useState(false);
  const [newsView, setNewsView] = useState();

  const _EndReached = () => {
    console.log("AA");
  };
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      {modalView && (
        <Modal
          close={() => {
            setModalView(false);
          }}
          item={newsView}
        />
      )}
      <FlatList
        data={newsData}
        renderItem={(newsData) => {
          return (
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#fff8a1" : "none" },
                Styled.newsBox,
              ]}
              onPress={() => {
                setModalView(true);
                setNewsView(newsData.item);
              }}
            >
              <Text style={Styled.newsTitle}>
                {newsData.item.title.length < TITLE_MAX_LENGTH
                  ? `${newsData.item.title}`
                  : `${
                      newsData.item.title.substring(0, TITLE_MAX_LENGTH) + ".."
                    }`}
              </Text>
              <Text style={Styled.newsDesc}>
                {newsData.item.description < DESC_MAX_LENGTH
                  ? `${newsData.item.description}`
                  : `${
                      newsData.item.description.substring(0, DESC_MAX_LENGTH) +
                      ".."
                    }`}
              </Text>
            </Pressable>
          );
        }}
        onEndReached={() => {
          Alert.alert("AAA");
        }}
        onEndReachedThreshold={0.8}
        initialNumToRender={20}
      ></FlatList>
    </SafeAreaView>
  );
};

const Styled = StyleSheet.create({
  Title: {
    fontSize: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  newsBox: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    margin: 8,
  },
  newsBox_Touch: {
    backgroundColor: "#fff8a1",
  },
  newsBox_NonTouch: {
    backgroundColor: "none",
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  newsDesc: {
    fontSize: 13,
    color: "#5b5b5b",
  },
});

export default NewsList_FlatList;
