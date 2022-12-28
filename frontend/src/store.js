import {configureStore, createSlice} from '@reduxjs/toolkit'
const loginSlice = createSlice({
    name:"loginState",
    initialState:{login:false},
    reducers:{
        login(state){
            state.login=true;
        },
        logout(state){
            state.login=false;
        }
    }
});
export const loginActions = loginSlice.actions;
export const store = configureStore({
    reducer: loginSlice.reducer
})