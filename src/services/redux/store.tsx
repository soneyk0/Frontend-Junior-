import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import cardsReducer from './reducers/cardsSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        cards: cardsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;