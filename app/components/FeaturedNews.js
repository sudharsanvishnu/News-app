import React from 'react'
import { StyleSheet } from 'react-native'
import BlockCard from './BlockCard'

const FeaturedNews = ({item}) => {
    return <BlockCard item={item}style={{ marginTop: 15, marginBottom: 20}}/>;
};

const style = StyleSheet.create({
    container: {

    }
});

export default FeaturedNews;
