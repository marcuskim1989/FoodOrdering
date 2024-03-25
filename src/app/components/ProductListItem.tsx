import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import {Product} from '../types'
import React from 'react';

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({product}: ProductListItemProps) => {
    return(  
        <View style={styles.container}>
            <Image
                source={{ uri: product.image || defaultImage }}
                style={styles.image}
            />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    )
}

export default ProductListItem;

export const defaultImage =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

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
