import React, { useState } from 'react';

import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { useWindowDimensions } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const restaurantsP: any = [{
  name: 'Restaurant 1',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/201',

},
{
  name: 'Restaurant 2',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/202',

},
{
  name: 'Restaurant 3',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/203',

}]

const restaurantsD: any = [{
  name: 'Restaurant 1',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/700',

},
{
  name: 'Restaurant 2',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/709',

},
{
  name: 'Restaurant 3',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/701',

}, {
  name: 'Restaurant 4',
  address: 'Maputo, Rua Dr. Jaime Ribeiro Nº 10',
  phone: '123456789',
  image: 'https://picsum.photos/703',

}]

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

const DeliveryRoute = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView >

      <Text style={styles.title}>Order's from {restaurantsD.length} restaurants</Text>
      {
        restaurantsD.map((restaurant: any) => (
          <Card key={restaurant.name} style={{ marginTop: 10, marginLeft:10,marginRight:10 }}>
            <Card.Cover source={{ uri: restaurant.image }} />

            <Card.Content>
              <Title>{restaurant.name}</Title>
              <Paragraph>{restaurant.address}</Paragraph>
            </Card.Content>

          </Card>
        ))
      }
    </ScrollView>
  </SafeAreaView>
);

const PickupRoute = () => (

  <SafeAreaView style={styles.container}>
    <ScrollView >
      <Text style={styles.title}>Order's from {restaurantsP.length} restaurants</Text>
      {
        restaurantsP.map((restaurant: any) => (
          <Card key={restaurant.name} style={{ marginTop: 10, marginLeft:10,marginRight:10 }}>
            <Card.Cover source={{ uri: restaurant.image }} />

            <Card.Content>
              <Title>{restaurant.name}</Title>
              <Paragraph>{restaurant.address}</Paragraph>
            </Card.Content>

          </Card>
        ))
      }
    </ScrollView>
  </SafeAreaView>
  //<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  delivery: DeliveryRoute,
  pickup: PickupRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#e65100' }}
    style={{ backgroundColor: 'white' }}
    labelStyle={{ color: '#e65100' }}
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
