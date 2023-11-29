import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import portalReducer from './portalSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const cartPersistedReducer = persistReducer(persistConfig, cartReducer)
const orderPersistedReducer = persistReducer(persistConfig, orderReducer)

export const store = configureStore({
    reducer: {
        cart: cartPersistedReducer,
        order: orderPersistedReducer,
        portal: portalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch