import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import NewsFilter from "./NewsFilter";
import NewsList from "./NewsList";
import NewsList_FlatList from "./NewsList_FlatList";

const TITLE_MAX_LENGTH = 24;
const DESC_MAX_LENGTH = 55;

const App = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [newsData, setNewsData] = useState({});

  const [Filter, setFilter] = useState(['GWNU', '언론원', '학생회'])

  // const resData = require("../../responseData.json");
  // console.log(resData);
  // console.log(resData.items);

  useEffect(() => {
    const resData = require("../../responseData.json");
    setNewsData(resData);
    setStart(resData.start - 1);
    setEnd(resData.display + (resData.start - 1));
  }, []);

  const _FilterChange = (data) => {
    console.log(data)
    console.log("F : " + Filter.includes(data))
    if(Filter.includes(data)) {
      setFilter(Filter.filter((Filter)=> { return Filter != data }))
    } else {
      setFilter([...Filter, data])
    }
  }
  return (
    <SafeAreaView>
      
      {/* <NewsFilter /> */}
      <NewsList_FlatList newsData={newsData?.items} Filter = {Filter} />

      {/* {newsData?.items.slice(start, end).map((item, index) => {
        return <NewsList key={index} item={item} />;
      })} */}
      <Pressable style={{marginTop: 30}}>
        <Text onPress={()=>{_FilterChange("GWNU")}}>GWNU</Text>
        <Text onPress={()=>{_FilterChange("언론원")}}>언론원</Text>
        <Text onPress={()=>{_FilterChange("학생회")}}>학생회</Text>
        <Text onPress={()=>{console.log(Filter)}}>확인</Text>
      </Pressable>
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
