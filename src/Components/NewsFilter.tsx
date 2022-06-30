import React, { useState } from "react";
import { CheckBox, Text, SafeAreaView} from 'react-native'

const NewsFilter = () => {
    const [GWNU_NEWS, setGWNU_NEWS] = useState(true)
    return (
        <SafeAreaView>
            <CheckBox style={{width: 100, height: 100}} value ={GWNU_NEWS}
            onPress = {() => setGWNU_NEWS(!GWNU_NEWS)}
            />
            <Text>GWNU 뉴스</Text>
        </SafeAreaView>
    );
}
export default NewsFilter