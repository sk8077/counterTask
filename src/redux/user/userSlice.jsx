import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: undefined,
    error: undefined

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true
        },
        logoutUser: (state, action) => {
            state.user = undefined;
            state.isAuthenticated = false;
        },
        setError: (state, action) => {
            state.error = action.payload
        },


    }
});

export const { setLoading, setUser, logoutUser, setError } = userSlice.actions;

export default userSlice.reducer;