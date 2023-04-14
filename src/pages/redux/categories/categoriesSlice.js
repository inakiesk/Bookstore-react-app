const createSlice = require('@reduxjs/toolkit').createSlice;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], status: 'Under Construction' },
  reducers: {
    checkStatus: (state) => ({
      status: [state.status = 'Under construction']
    }),
  },
});

module.exports = categoriesSlice.reducer;
export default categoriesSlice.actions;
