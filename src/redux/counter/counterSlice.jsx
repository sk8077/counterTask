import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', label: 'Counter 1', value: 0 },
];

const counters = createSlice({
    name: 'counters',
    initialState,
    reducers: {

        addCounter: (state, action) => {

            const uniqueId = new Date().getTime().toString();
            state.push({
                id: uniqueId,
                label: `Counter ${uniqueId}`,
                value: 0,
            });
        },
        incrementCounter: (state, action) => {
            const { id } = action.payload;
            const counter = state.find((c) => c.id === id);
            if (counter) {
                counter.value += 1;
            }
        },
        decrementCounter: (state, action) => {
            const { id } = action.payload;
            const counter = state.find((c) => c.id === id);
            if (counter) {
                counter.value -= 1;
            }
        },
        resetCounter: (state, action) => {
            const { id } = action.payload;
            const counter = state.find((c) => c.id === id);
            if (counter) {
                counter.value = 0;
            }
        },
        changeLabel: (state, action) => {
            const { id, label } = action.payload;
            const counter = state.find((c) => c.id === id);
            if (counter) {
                counter.label = label;
            }
        },
        setValue: (state, action) => {
            const { id, value } = action.payload;
            const counter = state.find((c) => c.id === id);
            if (counter) {
                counter.value = value;
            }
        },
        removeCounter: (state, action) => {

            const { id } = action.payload;
            return state.filter((counter) => counter.id !== id);
        },
    },
});

export const selectCounters = (state) => state.counters;

export const {
    incrementCounter,
    decrementCounter,
    resetCounter,
    changeLabel,
    addCounter,
    removeCounter,
    setValue
} = counters.actions;

export default counters.reducer;
