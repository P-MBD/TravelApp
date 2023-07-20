import React from "react";
import {  FlatList, Image,SafeAreaView, Text } from "react-native";
import styles from './styles';

const  Gallery = ({route}) => {
    const { images } = route?.params || {};
    console.log('images:>>',images)
    return(
<SafeAreaView>
    <FlatList style={{ paddingHorizontal: 24, marginBottom: 24 }} data={images} renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )} />
</SafeAreaView>
    )
}

export default React.memo(Gallery);