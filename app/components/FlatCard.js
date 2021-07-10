import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import TitleDes from './TitleDes';
import SubTitle from './SubTitle';



const FlatCard = ({item}) => {
    const {thumbnail, title, desc} = item;
    return (
        <View style={styles.container}>
            <Image source={{uri : thumbnail}} style={styles.image}/>
            <View style={styles.contentContainer}>
            <TitleDes>{title}</TitleDes>
            <SubTitle>{desc}</SubTitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 1.5,
        shadowRadius: 20,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 10,
        marginTop: 15
    },
    image: {
        flex: 0.35,
        height: '100%'
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5,
        justifyContent: 'center'    
    }
})

export default FlatCard;