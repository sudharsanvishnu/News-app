import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import TitleDes from './TitleDes';
import SubTitle from './SubTitle';

const BlockCard = ({style, imageStyle, item}) => {
    const {thumbnail, title, desc} = item;
    return (
        <View style={[styles.container, style]}>
            <Image source={{uri : thumbnail}} style={[styles.image, imageStyle]}/>
            <View style={styles.contentContainer}>
            <TitleDes>{title}</TitleDes>
            <SubTitle>{desc}</SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 1.5,
        shadowRadius: 15,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 15
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 10,
        justifyContent: 'center'
    }
})

export default BlockCard;