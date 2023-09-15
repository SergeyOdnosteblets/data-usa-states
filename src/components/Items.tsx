import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconSvgFavorite from '../assets/icons/IconSvgFavorite';
import IconSvgFavoriteEmpty from '../assets/icons/IconSvgFavoriteEmpty';
import {ItemsProps} from '../types/ItemsTypes';

const Items = ({data, handleChangeFavorite, item}: ItemsProps) => {
  return (
    <View style={styles.selectedState}>
      <Text style={styles.selectedStateList__text}>{item}</Text>
      {data.includes(item) ? (
        <TouchableOpacity
          onPress={() => {
            handleChangeFavorite(item, 'del');
          }}>
          <IconSvgFavorite />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            handleChangeFavorite(item, 'add');
          }}>
          <IconSvgFavoriteEmpty />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Items;

const styles = StyleSheet.create({
  selectedStateList: {
    paddingLeft: 30,
    paddingVertical: 10,
  },
  selectedState: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedStateList__text: {
    fontSize: 15,
    paddingRight: 10,
    fontWeight: 'bold',
  },
});
