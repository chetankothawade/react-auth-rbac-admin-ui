import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../utils/http";

export const fetchModules = createAsyncThunk("modules/fetchModules", async () => {
  const res = await http.get("user-permissions/side-menu");
  return res.data; // returns {status, message, data}
});

const modulesSlice = createSlice({
  name: "modules",
  initialState: {
    list: [],
    loading: false,
    loaded: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchModules.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchModules.fulfilled, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.list = action.payload?.data || [];
      })

      .addCase(fetchModules.rejected, (state, action) => {
        state.loading = false;
        state.loaded = true;
        state.error = action.error.message;
        state.list = [];
      });
  },
});

export default modulesSlice.reducer;
