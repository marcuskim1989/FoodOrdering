import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import products from '../../../../assets/data/products';
import {defaultPizzaImage} from '../../components/ProductListItem'

const sizes = ['S', 'M', 'L', 'XL']

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

            <Text>Select size</Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                    <Text key={size}>{size}</Text>
                ))}
            </View>

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
