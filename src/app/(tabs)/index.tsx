import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import products from '../../../assets/data/products';
import React from 'react';

const product = products[1];

export const defaultImage =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.image || defaultImage }}
                style={styles.image}
            ></Image>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
    },
});
