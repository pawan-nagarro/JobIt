const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

export const authenticateUser = createAsyncThunk('authentication', async () => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
    }),
  });
  const result = await response.json();
  return result;
});

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: {data: null, isLoading: false, isError: false},
  extraReducers: builder => {
    builder
      .addCase(authenticateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        (state.isLoading = false), (state.data = action.payload);
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default AuthSlice.reducer;
