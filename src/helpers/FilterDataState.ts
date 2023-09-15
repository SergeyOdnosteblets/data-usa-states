import {
  FilteredDataType,
  InfoDataType,
  StateInfoType,
} from '../types/filteredDataType';

export const filterDataState = (data: FilteredDataType) => {
  const allStates: InfoDataType = {};

  data.data.forEach((stateData: StateInfoType) => {
    const stateName = stateData.State;
    if (!allStates[stateName]) {
      allStates[stateName] = [];
    }
    allStates[stateName].push(stateData);
  });

  return allStates;
};

export const concatData = data => {
  const res = {};

  for (const state in data) {
    res[state] = {};
    data[state].forEach(entry => {
      const year = entry['Year'];
      const population = entry['Population'];
      res[state][year] = {Population: population};
    });
  }

  const resKey = Object.keys(res).filter(key => key !== 'data');
  return {res, resKey};
};
