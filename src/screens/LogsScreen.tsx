import {Text, View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const LogsScreen = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await AsyncStorage.getItem('newlogs');
        if (res !== null) {
          setLogs(JSON.parse(res));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  return (
    <View style={{padding: 10}}>
      <Text style={styles.title}>Логи запітив</Text>
      {logs.length > 0 &&
        logs.map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                fontSize: 15,
              }}>{`Ви шукали: ${item}`}</Text>
          );
        })}
    </View>
  );
};
export default LogsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
  },
});
