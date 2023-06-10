import React from "react";
import { Image, ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native';
import styles from './styles';

const  AttractionDetails = ({navigation,route}) => {
    const {item} = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    const onBack = () =>{
        navigation.goBack();
    }
    return(
        <SafeAreaView style={styles.container}>
             <ImageBackground style={styles.mainImage} 
             imageStyle={{ borderRadius: 20 }} 
             source={{ uri: mainImage }} >
                     <View style={styles.header}>
                <Pressable onPress={onBack} hitSlop={8}>
                     <Image style={styles.icon} source={require('../../assets/back.png')} />
                </Pressable>
                
                <Pressable hitSlop={8}>
                       <Image style={styles.icon} source={require('../../assets/share.png')} />
                </Pressable>
                    
              </View>

              <View style={styles.footer}>
                  {item?.images?.length ? item?.images?.map(image => (
                    <Image key={image} source={{uri:image}} style={styles.miniImage} />
                  )): null}
              </View>
         
              </ImageBackground>

              <View>
                  <Text>{item?.name}</Text>
              </View>
         
              
        </SafeAreaView>
    )
}

export default React.memo( AttractionDetails);