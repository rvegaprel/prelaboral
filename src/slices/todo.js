import { createSlice } from '@reduxja/toolkits';

export const templateSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */) => {
            state.counter += 1;
        }
    }
});
// Action creators are generated for each case reducer function
export const { increment } = templateSlice.actions;