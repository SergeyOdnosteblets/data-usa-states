interface StateOption {
  label: string;
  value: string;
}

export interface MultiSelectComponentProps {
  props: StateOption[];
  handleSelectState: (selected: string[], value: string) => void;
  selected: StateOption[] | string;
  setSelected: (value: string[]) => void;
}
