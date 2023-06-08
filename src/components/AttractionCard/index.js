import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

const AttractionCard = ({ imageSrc, title, subtitle,onPress,style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Image style={styles.image} source={{ uri: imageSrc }} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.row}>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(AttractionCard);