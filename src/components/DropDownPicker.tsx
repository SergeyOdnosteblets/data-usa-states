import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import {MultiSelectComponentProps} from '../types/MultiSelectComponentTypes';
import {saveData} from '../helpers/AsyncStorage';

const MultiSelectComponent = ({
  props,
  handleSelectState,
  selected,
  setSelected,
}: MultiSelectComponentProps) => {
  const handleChangeState = (item: string[]) => {
    handleSelectState(item, 'state');
    setSelected(item);
    saveData(String(item));
  };
  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={props}
        labelField="label"
        valueField="value"
        placeholder="Select state"
        searchPlaceholder="Search..."
        value={selected}
        maxSelect={2}
        onChange={item => {
          handleChangeState(item);
        }}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  dropdown: {
    height: 40,
    width: 150,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
