import { configureStore } from "@reduxjs/toolkit";
import counterRaducer from "./counter-slice";
import authRaducer from "./auth-slice";






//access state from autre components
const store = configureStore({
    reducer: {
        counter: counterRaducer, 
        auth: authRaducer
    }
});



export default store;
