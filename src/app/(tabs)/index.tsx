import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import products from '../../../assets/data/products';
import React from 'react';
import ProductListItem from '../components/ProductListItem'

export const defaultImage =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

export default function MenuScreen() {
    return ( 
        <FlatList
            data={products}
            renderItem={({item}) => <ProductListItem product={item} />}
        />
        
        
    );
}

