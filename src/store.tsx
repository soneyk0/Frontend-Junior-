import {configureStore} from '@reduxjs/toolkit';
import {cardsApi} from "./api/api";
import authReducer from './Login/authSlice';


const store = configureStore({
    reducer: {
        [cardsApi.reducerPath]: cardsApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export default store;