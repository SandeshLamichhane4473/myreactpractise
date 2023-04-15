import { createSlice } from "@reduxjs/toolkit";
export const incdecslice = createSlice({
    name: 'incdec',
    initialState: 10,
    reducers: {
        Inc: (state, action) => {
            return state += 1;
        },
        Dec: (state, action) => {
            return state -= 1;

        }
    }

});

export const { INC } = incdecslice.actions;
export default incdecSlice.reducer;
