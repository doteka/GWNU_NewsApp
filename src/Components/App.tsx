import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import NewsList from './NewsList';

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
        setStart(resData.start-1)
        setEnd(resData.display + (resData.start-1));
    }, [])
  return (
    <SafeAreaView>
        {resData?.items.slice(start, end).map((item, index) => {
            return (
             <NewsList key = {index} item={item} />
            );
        })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;