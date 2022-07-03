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
const NewsList_FlatList = ({ newsData, Filter }) => {
  const [modalView, setModalView] = useState(false);
  const [newsView, setNewsView] = useState();
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setNews(newsData)
    setLoading(false)
  },[])
  const _EndReached = () => {
    console.log("AA");
  };
  return (
    <SafeAreaView style={[Styled.View]}>
      {modalView && (
        <Modal
          close={() => {
            setModalView(false);
          }}
          item={newsView}
        />
      )}
      {!loading && (
      <FlatList
        data={newsData}
        renderItem={(appNews) => {
          if(Filter.includes(appNews.item.type) ) {
            // console.log("통과")
            return (
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "#fff8a1" : "none" },
                  Styled.newsBox
                ]}
                onPress={() => {
                    setModalView(true);
                    setNewsView(appNews.item);
                }}
              >
                <Text style={Styled.newsTitle}>
                  {appNews.item.title.length < TITLE_MAX_LENGTH
                    ? `${appNews.item.title}`
                    : `${
                      appNews.item.title.substring(0, TITLE_MAX_LENGTH) + ".."
                      }`}
                </Text>
                <Text style={Styled.newsDesc}>
                  {appNews.item.description < DESC_MAX_LENGTH
                    ? `${appNews.item.description}`
                    : `${
                      appNews.item.description.substring(0, DESC_MAX_LENGTH) +
                        ".."
                      }`}
                </Text>
              </Pressable>
            )
          } else {
            console.log("통과못함")
          }
        }}
        onEndReached={() => {
          if(!modalView) {
            Alert.alert("마지막 페이지입니다.")
          }
        }}
        onEndReachedThreshold={0}
        initialNumToRender={9}
        style={[!modalView? {display: 'flex'} : {display: 'none'}]}
      ></FlatList>
      )}
    </SafeAreaView>
  );
};

const Styled = StyleSheet.create({
  View: {
    marginTop: 20,
  },
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
