import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Categories = ({ categories, selectedCategory }) => {
    return (
        <FlatList
            horizontal
            data={categories}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item;

                return (
                    <TouchableOpacity
                        style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 32 } : {}]}
                    >
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default React.memo(Categories);