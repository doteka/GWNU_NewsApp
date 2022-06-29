import React from "react";
import {Pressable, SafeAreaView, Text, Dimensions, StyleSheet} from 'react-native'


const {width, height} = Dimensions.get('window')
console.log(height)
const Modal = ({close}) => {
    return(
        <SafeAreaView style={styled.View}>
            <Text style={styled.Title}>ASDSD</Text>
            <Pressable onPress={close}>
                <Text style={styled.close}>닫기</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styled = StyleSheet.create({
    View: {
        flex:1,
        zIndex: 3,
        elevation: 3,
        height: height,
        width: width,
        backgroundColor: 'salmon',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
    },
    Title: {
        position:'relative',
        fontSize: 26,
        color: 'blue',
        marginTop: 300
    },
    close: {
        position:'relative',
        marginTop: 100,
        color: 'red'
    }
})


export default Modal