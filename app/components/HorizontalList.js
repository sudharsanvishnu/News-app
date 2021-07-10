import React from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import TitleDes from './TitleDes';
import SmallCard from './SmallCard';

const HorizontalList = ({title, data}) => {
    return (
        <View>
        <TitleDes size={20}>{title}</TitleDes>
            <View style={styles.list}>
                <FlatList 
                data= {data}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <SmallCard item={item} /> } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        marginVertical: 15,
    }
});

export default HorizontalList;
