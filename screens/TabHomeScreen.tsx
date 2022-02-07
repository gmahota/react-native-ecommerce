import React,{useState} from 'react';

import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useWindowDimensions } from 'react-native';
import {TabBar , TabView, SceneMap } from 'react-native-tab-view';

const DeliveryRoute = () => (
  <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
);

const PickupRoute = () => (
  <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  //<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  delivery: DeliveryRoute,
  pickup: PickupRoute,
});

const renderTabBar = (props:any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#e65100' }}
    style={{ backgroundColor: 'white' }}
    labelStyle={{ color: '#e65100'}}
  />
);

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabHome'>) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: 'delivery', title: 'Delivery' },
    { key: 'pickup', title: 'Pickup' },
  ]);

  return (
<TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />


    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
