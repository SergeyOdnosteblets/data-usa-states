import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {YearsProps} from '../types/YearsTypes';

const DropDownMenu = ({setIsActiveYear, isActiveYear, years}: YearsProps) => {
  return (
    years.length > 1 && (
      <SelectDropdown
        data={years}
        onSelect={selectedItem => {
          setIsActiveYear(selectedItem, 'year');
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
        defaultValue={isActiveYear}
        showsVerticalScrollIndicator={true}
        buttonStyle={{
          borderRadius: 10,
          width: 150,
          height: 40,
          margin: 5,
          borderWidth: 0.5,
        }}
        rowTextStyle={{fontSize: 16}}
        buttonTextStyle={{
          fontSize: 16,
          fontWeight: 'bold',
        }}
      />
    )
  );
};

export default DropDownMenu;
