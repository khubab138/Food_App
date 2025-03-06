import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlices'
import categorySlice from './slices/CategorySlices'
const Store = configureStore({
    reducer:{
        cart: CartSlice, 
        category: categorySlice, 
    },
})

export default Store