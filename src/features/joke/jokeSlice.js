import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
// define the state of a joke
const initialState = {
    loading: false,
    errorMsg: "",
    joke: {},
    api_version: 2,
    randImg: 1,
    showGetStarted: true
}

const API_URL = "https://v2.jokeapi.dev/joke/Any";

export const fetchJoke = createAsyncThunk(
    'joke/fetchJoke',
    async () => {
        return axios.get(API_URL)
        .then((response) => response.data)
    }
)

const jokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchJoke.pending, (state) => {
            state.loading = true,
            state.errorMsg = "",
            state.joke = {}
        })
        builder.addCase(fetchJoke.fulfilled, (state, action) => {
            state.loading = false,
            state.errorMsg = "",
            state.joke = action.payload
            // generate a random image when the request is fulfilled
            // I did this on the state because doing that in the JokeView or the Joke component would
            // have generated a different image and this might cause an issue with debugging :)
            state.randImg = parseInt((Math.random() * 12))
            state.showGetStarted = false
        })
        builder.addCase(fetchJoke.rejected, (state, action) => {
            state.loading = false,
            state.errorMsg = action.error.message,
            state.joke = {}
        })
    }
})

export default jokeSlice.reducer