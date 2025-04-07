import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Table } from '../types/Table';

type TableState = {
  tables: Table[];
  loading: boolean;
  error: string | null;
};

const initialState: TableState = {
  tables: [],
  loading: false,
  error: null,
};

const TOKEN = 'Basic ZWY4NGVjOWRlM2QxYTMzODozNjNjYjFkNy0wYWNmLTQxYTUtOTcyNS02ZjEzYzFkMjc3ZTU=';

export const fetchTables = createAsyncThunk('tables/fetchTables', async () => {
  const response = await axios.get(
    'https://test.pigz.dev/api/pdv/order-sheet/v2/checkpads',
    {
      headers: {
        Authorization: TOKEN,
      },
    }
  );

  console.log("📡 API DATA:", response.data);
  return response.data.checkpads; // <-- corrigido aqui
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
        state.tables = action.payload; // aqui já recebe só os checkpads (as mesas)
      })
      .addCase(fetchTables.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Erro ao buscar mesas';
      });
  },
});

export default tableSlice.reducer;
