import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './styles';

const  AttractionDetails = ({route}) => {
    const {item} = route?.params || {};
    return(
        <SafeAreaView>
                 <Text>{item?.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo( AttractionDetails);