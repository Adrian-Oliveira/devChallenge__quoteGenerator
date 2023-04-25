import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

import api from '../../core/api';
import { useAppSelector, useAppDispatch } from '../../core/hooks';

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


export const fetchSingleQuote = createAsyncThunk(
  'quotes/fetchSingleQuote',
  async () => {

    const quoteNumber =  Math.floor(Math.random() * (72672) + 1);
    const response = await api.getQuote(quoteNumber)
    console.log(response)
    return response.data
  }
)

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleQuote.fulfilled, (state, action) => {

      state.author = action.payload[0].quoteAuthor
      state.singleQuote = action.payload[0]
    })
  },
})

// Action creators are generated for each case reducer function
export const { } = quotesSlice.actions

export default quotesSlice.reducer;