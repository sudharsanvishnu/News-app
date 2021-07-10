import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FlatCard from './FlatCard'
import TitleDes from './TitleDes'

const VerticalList = ({title, data}) => {
    return (
        <View>
            <View style={styles.bgclr}>
            <TitleDes>{title}</TitleDes>
            </View>
            <View style={styles.container}>
            {data.map(item => <FlatCard item={item} Key={item.id}/>)}
            </View>
        </View>
    )
}

export default VerticalList

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 15
    },
    bgclr: {
        backgroundColor: '#ffbb0080',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        borderRadius: 8,
    }
})
