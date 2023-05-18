import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Categories from "../../components/Categories";
import Title from '../../components/Title'
import styles from './styles'

const Home = () => {
    return(

        <SafeAreaView>
            <View style={styles.container}>
                <Title text='where do' style={{fontWeight: 'normal'}}/>
                <Title text='you want to go' />
                <Title text='Explore Attraction' style={styles.subtitle} />
                <Categories selectedCategory='All' categories={['All','Popular','Historical','Trending','Exclusive']} />
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)