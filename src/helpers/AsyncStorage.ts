import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(newValue: string) {
  try {
    const currentDataString = await AsyncStorage.getItem('newlogs');
    const currentData = currentDataString ? JSON.parse(currentDataString) : [];

    currentData.push(newValue);

    await AsyncStorage.setItem('newlogs', JSON.stringify(currentData));
  } catch (error) {
    console.error('Error', error);
  }
}
