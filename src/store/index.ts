import {configureStore} from '@reduxjs/toolkit';
import populationReducer from './dataSlice';

export default configureStore({
  reducer: {
    populationData: populationReducer,
  },
});
