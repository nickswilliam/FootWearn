import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice/cartSice'
import categoriesSlice from "./categoriesSlice/categoriesSlice";
import genreSlice from "./genreSlice/genreSlice";
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"
import productsSlice from "./productsSlice/productsSlice";
import ordersSlice from "./ordersSlice/ordersSlice";
import userSlice from "./user/userSlice";


const reducers = combineReducers({
    cart: cartReducer,
    categories: categoriesSlice,
    genres: genreSlice,
    products: productsSlice,
    orders: ordersSlice,
    user: userSlice
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'orders', 'user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)
export default store