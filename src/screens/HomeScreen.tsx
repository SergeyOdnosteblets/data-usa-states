import {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeFavorite, fetchStates} from '../store/dataSlice';
import {GiftedChart} from '../components/GiftedChart';
import MultiSelectComponent from '../components/DropDownPicker';
import DropDownMenu from '../components/DropDownMenu';
import {RootState} from '../types/dataSliceType';
import {StateDataType} from '../types/stateDataType';
import Items from '../components/Items';

export const HomeScreen = () => {
  const [selected, setSelected] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [isActiveYear, setIsActiveYear] = useState('-');
  const [isCategory, setIsCategory] = useState('state');
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const store = useSelector((state: RootState) => state.populationData);

  const years = ['-', 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

  //Запит для отримення даних
  useEffect(() => {
    dispatch(fetchStates());
  }, []);

  useEffect(() => {
    const updStateListSeleceted = store.stateList.map((item: string) => {
      return {
        label: item,
        value: item,
      };
    });
    setList(updStateListSeleceted);
    setFavoriteList(store.favorite);
  }, [store]);

  //Фільтрація відповідного до того, що було обрано - рік чи один з штатів
  const handleSelectCategory = (data: StateDataType, category: string) => {
    console.log(data);
    if (category === 'state') {
      setSelected(() => [...data]);
      setIsActiveYear('-');
      setIsCategory('state');
    }

    if (category === 'year') {
      setSelected([]);
      setIsActiveYear(data);
      setIsCategory('year');
    }
  };

  //Збереження/видалення даних зі стору з улюблених
  const handleChangeFavorite = (data: string, value: string) => {
    dispatch(changeFavorite({data, value}));
  };

  return (
    <View>
      <Text style={styles.title}>Зміна кількості населення</Text>
      {/* Два фільтри - по штату та по року */}
      <View style={styles.filters}>
        <MultiSelectComponent
          props={list}
          handleSelectState={handleSelectCategory}
          selected={selected}
          setSelected={setSelected}
        />
        <DropDownMenu
          setIsActiveYear={handleSelectCategory}
          isActiveYear={isActiveYear}
          years={years}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Список вибраних штатів, якщо такі є */}
        <View style={styles.selectedStateList}>
          {selected &&
            selected.length > 0 &&
            selected.map(item => {
              return (
                <Items
                  data={favoriteList}
                  handleChangeFavorite={handleChangeFavorite}
                  item={item}
                  key={item}
                />
              );
            })}
        </View>
        {/* Графік */}
        {store.data.data && (
          <GiftedChart
            props={selected && selected.length > 0 ? selected : store.data.data}
            isCategory={isCategory}
            isActiveYear={isActiveYear}
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
  filters: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
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
