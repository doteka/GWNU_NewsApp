import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import NewsList from "./NewsList";
import NewsList_FlatList from "./NewsList_FlatList";

const TITLE_MAX_LENGTH = 24;
const DESC_MAX_LENGTH = 55;

const App = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [newsData, setNewsData] = useState();

  const resData = require("../../responseData.json");
  console.log(resData);
  console.log(resData.items);

  useEffect(() => {
    const resData = require("../../responseData.json");
    setNewsData(resData);
    setStart(resData.start - 1);
    setEnd(resData.display + (resData.start - 1));
  }, []);
  return (
    <SafeAreaView>
      <NewsList_FlatList newsData={newsData?.items} />

      {/* {resData?.items.slice(start, end).map((item, index) => {
        return <NewsList key={index} item={item} />;
      })} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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

export default App;
