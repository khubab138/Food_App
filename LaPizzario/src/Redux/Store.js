import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlices'
import categorySlice from './slices/CategorySlices'
import SearchSlice from './slices/SearchSlice'
const Store = configureStore({
    reducer:{
        cart: CartSlice, 
        category: categorySlice, 
        search: SearchSlice
    },
})

export default Store