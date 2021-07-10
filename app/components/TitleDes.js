import React from 'react'
import { Text } from 'react-native'

const TitleDes = ({children, numberOfLines = 2, size = 18}) => {
    return (
            <Text 
                numberOfLines= {numberOfLines} 
                style={{fontSize: size,fontWeight: 'bold'}}
                >
                {children}
            </Text>
    );
};

export default TitleDes;


