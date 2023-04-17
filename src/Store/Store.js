import { configureStore } from "@reduxjs/toolkit";
import RegistrationSlice from "../Components/RegistrationSlice";


export const Store = configureStore({
    reducer:{
        Registration: RegistrationSlice
    }
})