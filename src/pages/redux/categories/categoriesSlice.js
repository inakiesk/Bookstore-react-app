import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], status: 'Under Construction' },
  reducers: {
    checkStatus: (state) => ({
      status: [state.status === 'Under construction'],
    }),
  },
});

module.exports = categoriesSlice.reducer;
export default categoriesSlice.actions;
