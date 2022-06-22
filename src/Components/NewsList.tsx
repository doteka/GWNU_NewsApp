import React from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, Image} from 'react-native';

const TITLE_MAX_LENGTH = 20

const NewsList = ({key, item}) => {
    const _onPress = () => {
        console.log(item.image)
    }
    return(
        <Pressable onPress={_onPress} style={styled.List}>
            <Image style={styled.Image} source={{uri: item.image}}/>
            <Text key = {key} style={styled.Text}>
                {item.title.length < TITLE_MAX_LENGTH+1 ?
                 `${item.title}` : `${item.title.substring(0, TITLE_MAX_LENGTH+1) + ".."}`}
            </Text>
        </Pressable>
    )
}
const styled = StyleSheet.create({
    List: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 50,
        height: 50,
    },
    Text: {
        fontSize: 16
    }

})

export default NewsList