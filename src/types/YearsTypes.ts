export interface YearsProps {
  setIsActiveYear: (year: string | number, value: string) => void;
  isActiveYear: string;
  years: string[] | number[];
}
