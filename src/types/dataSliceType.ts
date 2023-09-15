interface YearlyPopulation {
  Population: number;
}

interface StateData {
  [year: string]: YearlyPopulation;
}

export interface StateInfo {
  [stateName: string]: {
    [year: string]: StateData;
  };
}

export type RootState = {
  populationData: {
    data: StateInfo;
    error: string | null;
    favorite: string[] | [];
    stateList: string[];
    status: 'pending' | 'fulfilled' | 'rejected';
  };
};
