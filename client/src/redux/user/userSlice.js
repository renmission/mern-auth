import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSucess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        deleteUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signOut: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    },
});

export const { 
    signInStart, 
    signInSucess, 
    signInFail, 
    updateUserStart, 
    updateUserSuccess, 
    updateUserFail,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFail,
    signOut,
} = userSlice.actions;

export default userSlice.reducer;