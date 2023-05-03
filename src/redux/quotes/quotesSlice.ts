import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppDispatch } from '../store';

import api from '../../core/api';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>()


export interface QuoteState {
    quoteText:string,
    quoteAuthor:string,
    quoteGenre:string
}

export interface QuotesState {
  author: string,
  totalQuotes:number,
  singleQuote: QuoteState,
  quoteList: QuoteState[],
}

const initialState:QuotesState = {
  author:'',
  totalQuotes:72672,
  singleQuote: {
    quoteText:"",
    quoteAuthor:"",
    quoteGenre:""
  },
  quoteList:[]
}


export const fetchSingleQuote = createAppAsyncThunk(
  'quotes/fetchSingleQuote',
  async (_,thunkApi) => {
    const totalQuotes = thunkApi.getState().quotes.totalQuotes;
    const quoteNumber =  Math.floor(Math.random() * (totalQuotes) + 1);
    const response = await api.getQuote(quoteNumber)
    const singleQuote = {
        quoteText:response.data[0].quoteText,
        quoteAuthor:response.data[0].quoteAuthor,
        quoteGenre:response.data[0].quoteGenre
    } 
    return singleQuote
  }
)

export const fetchAuthorQuotes = createAppAsyncThunk(
  'quotes/fetchAuthorQuotes',
  async (_,thunkApi) => {
    const author = thunkApi.getState().quotes.author;
    const response = await api.getQuotesByAuthor(author)
    
    return response
  }
)

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchSingleQuote.fulfilled, (state, action: PayloadAction<QuoteState>) => {
      state.author = action.payload.quoteAuthor
      state.singleQuote = action.payload
    })
    .addCase(fetchAuthorQuotes.fulfilled, (state, action: PayloadAction<QuoteState[]>) => {
      state.quoteList = action.payload
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = quotesSlice.actions

export default quotesSlice.reducer;