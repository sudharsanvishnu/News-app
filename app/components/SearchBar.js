import React from 'react'
import { View, TextInput, StyleSheet , Shado} from 'react-native'


const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search here.." style={styles.searchInput}/>
        </View>
    )
}

export default SearchBar

const styles= StyleSheet.create({
  container: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      marginTop: '6%',
      backgroundColor: 'white',
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOpacity: 1.5,
      shadowRadius: 20,
      shadowOffset: {
          height: 0,
          width: 0
      },
      elevation: 20   
  },
  searchInput: {
      width: '100%',
      height: '100%',
      paddingLeft: 5,
      fontSize: 16,
  }
});
