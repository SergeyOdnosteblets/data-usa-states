export interface StateInfoType {
  'ID State': string;
  'ID Year': number;
  Population: number;
  'Slug State': string;
  State: string;
  Year: string;
}

export interface InfoDataType {
  [state: string]: StateInfoType[];
}

export interface SourceInfoType {
  annotations: {
    dataset_link: string;
    dataset_name: string;
    source_description: string;
    source_name: string;
    subtopic: string;
    table_id: string;
    topic: string;
  };
  measures: string[];
  name: string;
  substitutions: [];
}

export interface FilteredDataType {
  data: StateInfoType[];
  source: SourceInfoType[];
}
