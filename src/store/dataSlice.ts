import {createSlice, createAsyncThunk, Slice} from '@reduxjs/toolkit';
import {fetchData, fetchDataState} from '../base/api';
import {concatData, filterDataState} from '../helpers/FilterDataState';
import {StateInfo} from '../types/dataSliceType';

interface DataStateType {
  data: StateInfo;
  stateList: string[];
  status: 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
  favorite: string[];
}

export const fetchStates = createAsyncThunk(
  'statistics/fetchStates',
  async () => {
    const data = await fetchData();
    const dataState = await fetchDataState();
    return {data, dataState};
  },
);

const initialState: DataStateType = {
  data: {},
  stateList: [],
  status: 'pending',
  error: null,
  favorite: [],
};

const populationData: Slice<DataStateType> = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeFavorite: (state, action) => {
      const {data, value} = action.payload;

      if (value === 'add') {
        state.favorite.push(data);
      }
      if (value === 'del') {
        const sortedFavorite = state.favorite.filter(item => item !== data);
        state.favorite = sortedFavorite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchStates.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.status = 'fulfilled';

        const updDataState = filterDataState(action.payload.dataState);
        const result = {data: action.payload.data.data, ...updDataState};

        const concatedData = concatData(result);
        state.data = concatedData.res;
        state.stateList = concatedData.resKey;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = String(action.error.message);
      });
  },
});

export const {dataStorage, changeFavorite} = populationData.actions;

export default populationData.reducer;
