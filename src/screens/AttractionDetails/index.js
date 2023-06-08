import React from "react";
import { SafeAreaView, Text } from "react-native";
import styles from './styles';

const  AttractionDetails = ({navigation,route}) => {
    const {item} = route?.params || {};
    const onBack = () =>{
        navigation.goBack();
    }
    return(
        <SafeAreaView>
            <Text onPress={onBack} style={{margin:32}}>Back</Text>
                 <Text>{item?.name}</Text>
        </SafeAreaView>
    )
}

export default React.memo( AttractionDetails);