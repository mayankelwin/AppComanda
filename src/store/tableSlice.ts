import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Table } from '../types/Table';

type TableState = {
  tables: Table[];
  loading: boolean;
  error: unknown;
};

const initialState: TableState = {
  tables: [],
  loading: false,
  error: null,
};

const TOKEN = 'Basic NEFGMzE0NTZHOjM0MjlhOTY0LTQyNGMtNDc3NC05ZTljLTI4MGUxOWUxODQ5YQ==';

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
  try {

  const response = await axios.get(
    'https://test.pigz.dev/api/pdv/order-sheet/v2/checkpads',
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );

  console.log("📡 API DATA:", response.data);
  return response.data.checkpads; 
  
} catch (error) {
  
  console.log("Api error", error);
  
  console.log("Error", error?.response);
}

});

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTables.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tables = action.payload;
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.error?.message || 'Erro ao buscar mesas');

      });
  },
});

export default tableSlice.reducer;
