import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type AuthTypeReducer = {
    user: null | [],
    isAuthenticated: boolean,
}

const initialState: AuthTypeReducer = { user: null, isAuthenticated: false,}


export const fetchAuth = createAsyncThunk('auth/fetchAuthData', async (username:string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    return  await response.json();
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state){
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuth.fulfilled, (state,action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(fetchAuth.rejected, (state,action) => {
                state.user = null;
                state.isAuthenticated = false;

            })
    },
});

export const {logout} = authSlice.actions
export default authSlice.reducer;