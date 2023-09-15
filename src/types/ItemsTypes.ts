export interface ItemsProps {
  data: string[];
  handleChangeFavorite: (item: string, value: string) => void;
  item: string;
}
