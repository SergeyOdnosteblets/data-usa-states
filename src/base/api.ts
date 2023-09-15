import axios from 'axios';

interface ApiResponse {
  'ID Nation': string;
  'ID Year': number;
  Nation: string;
  Population: number;
  'Slug Nation': string;
  Year: string;
}

const api = axios.create({
  baseURL: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
  baseURLState:
    'https://datausa.io/api/data?drilldowns=State&measures=Population',
});

export const fetchData = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.get();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDataState = async (): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.get(
      api.defaults.baseURLState,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
