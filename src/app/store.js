import jokeReducer from '../features/joke/jokeSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        joke: jokeReducer
    },
})

export default store;
