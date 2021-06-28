import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import FoodCard from './FoodCard';

const RecipesList = ({ datas, navigation }) => {
    return (
        <View style={styles.metaStyle}>
            <FlatList
                vertical={true}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsHorizontalScrollIndicator={false}
                data={datas}
                keyExtractor={(datas) => datas.title}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Recipe', { item: item})} >
                            <FoodCard result={item} />
                        </TouchableOpacity>
                    )
                }}
                navigation={navigation}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    dirStyle: {
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 20
    },

    metaStyle: {
        backgroundColor: "#4784ad",
        flex: 1
    },

    row: {
        flex: 1,
        justifyContent: "space-around"
    }

});

export default RecipesList;