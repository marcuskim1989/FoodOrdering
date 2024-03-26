import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import products from '../../../../assets/data/products';
import {defaultPizzaImage} from '../../components/ProductListItem'

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();

    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return <Text>Product not found</Text>;
    }

    return (
        <View>
            <Stack.Screen options={{ title: product.name }} />

            <Image 
                source={{uri: product.image || defaultPizzaImage}} 
                style={styles.image} 
            />

            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    image:{
        width: '100%',
        aspectRatio: 1,
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold'
    },
})


export default ProductDetailsScreen;
