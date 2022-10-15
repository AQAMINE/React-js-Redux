import  { createSlice }  from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login (state) {
            state.isAuthenticated = true;
        },
        logout (state) {
            state.isAuthenticated = false;
        }
    }
});

//access action from autre components 
export const authAction = authSlice.actions;

export default authSlice.reducer;