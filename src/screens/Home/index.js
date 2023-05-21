import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Categories from "../../components/Categories";
import AttractionCard from "../../components/AttractionCard";
import Title from '../../components/Title'
import styles from './styles'

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    return(

        <SafeAreaView>
            <View style={styles.container}>
                <Title text='where do' style={{fontWeight: 'normal'}}/>
                <Title text='you want to go' />
                <Title text='Explore Attraction' style={styles.subtitle} />
                <Categories 
                selectedCategory={selectedCategory}
                onCategoryPress={setSelectedCategory} 
                 categories={['All','Popular','Historical','Trending','Exclusive']} />
               <View>
                
               <View style={styles.row}>
                    <AttractionCard
                        title='Entertainment Park'
                        subtitle='Rome'
                        imageSrc='https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg'
                    />
                    <AttractionCard
                        title='Entertainment Park'
                        subtitle='Rome'
                        imageSrc='https://www.petitfute.com/medias/mag/12133/835/8896-les-10-parcs-d-attraction.jpg'
                    />
                </View>

               </View>
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)