import {View, Text, Platform, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CartItem, Product } from './types';
import { useCart } from './providers/CartProvider';
import CartListItem from './components/CartListItem';


const CartScreen = () => { 
    const {items} = useCart();


    return(
        <View>
            <FlatList 
            data={items} 
            renderItem={({item}) => <CartListItem 
            cartItem={item} />}
            />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
};

export default CartScreen;