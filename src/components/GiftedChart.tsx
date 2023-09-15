import {LineChart} from 'react-native-gifted-charts';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../types/dataSliceType';

export const GiftedChart = ({
  props,
  isCategory,
  isActiveYear,
}: GiftedChartProps) => {
  const store = useSelector((state: RootState) => state.populationData);
  const formatedData = (value: string) => {
    let state;

    if (isCategory === 'year') {
      const updatedStateList = [];
      for (const state in store.data) {
        if (state !== 'data') {
          updatedStateList.push({
            label: state,
            value: store.data[state][isActiveYear].Population,
          });
        }
      }
      return updatedStateList;
    } else {
      if (value) {
        state = store.data[String(value)];
      } else {
        state = store.data.data;
      }
      return Object.entries(state).map(([year, data]) => ({
        value: data.Population,
        label: year,
      }));
    }
  };
  const lineData = formatedData(props[0]);
  const lineData2 = formatedData(props[1]);

  return (
    <View style={{paddingLeft: 5, marginRight: 10}}>
      <LineChart
        areaChart
        curved
        data={lineData}
        data2={lineData2}
        height={200}
        width={320}
        spacing={45}
        initialSpacing={0}
        color1="skyblue"
        color2="red"
        color3="black"
        textColor1="green"
        dataPointsColor1="blue"
        dataPointsColor2="red"
        dataPointsColor3="black"
        startFillColor1="skyblue"
        startFillColor2="orange"
        startOpacity={0}
        endOpacity={0}
        xAxisLabelTextStyle={{fontSize: 9, marginLeft: 20}}
        yAxisLabelWidth={50}
        dataPointsColor="red"
        color="#00ff83"
        maxValue={
          isCategory === 'year' || String(isCategory) === ''
            ? 38000000
            : 10000000
        }
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{color: 'black', fontSize: 9}}
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 5,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items: string) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  marginTop: -30,
                  marginLeft: -40,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <View>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {items[0].value}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};
