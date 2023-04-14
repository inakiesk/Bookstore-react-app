import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      books: [
        state.books,
        {
          title: action.payload.title,
          author: action.payload.author,
        },
      ],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.title !== action.payload.title),
    }),
  },
});

module.exports = bookSlice.reducer;
export default bookSlice.actions;
