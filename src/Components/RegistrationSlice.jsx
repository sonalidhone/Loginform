import { createSlice } from "@reduxjs/toolkit";

const RegistrationSlice = createSlice({
  name: "registration",
  initialState: {
    reg: [],
  },
  reducers: {
    addRegistartion(state, actions) {
      state.reg.push(actions.payload);
    },
  },
});

export const { addRegistartion } = RegistrationSlice.actions;

export default RegistrationSlice.reducer;
