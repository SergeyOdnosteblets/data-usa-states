import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GiftedChart} from '../components/GiftedChart';
import {useEffect, useState} from 'react';
import {changeFavorite} from '../store/dataSlice';
import {RootState} from '../types/dataSliceType';
import Items from '../components/Items';

export const FavoriteScreen = () => {
  const store = useSelector((state: RootState) => state.populationData);

  const dispatch = useDispatch();
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    setFavoriteList(store.favorite);
  }, [store]);

  //Збереження/видалення даних зі стору з улюблених
  const handleChangeFavorite = (data: string, value: string) => {
    dispatch(changeFavorite({data, value}));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Улюблені</Text>
      {store.favorite &&
        store.favorite.map((item: string) => {
          return (
            <View key={item}>
              <View style={styles.selectedState}>
                <Items
                  data={favoriteList}
                  handleChangeFavorite={handleChangeFavorite}
                  item={item}
                />
              </View>
              <GiftedChart props={[item]} />
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  selectedState: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },

  selectedStateList__text: {
    fontSize: 15,
    paddingRight: 10,
    fontWeight: 'bold',
  },
});
