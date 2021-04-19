import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [  
    {
      "date": "19/04",
      "weekday": "Seg",
      "max": 20,
      "min": 16,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "20/04",
      "weekday": "Ter",
      "max": 19,
      "min": 15,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "21/04",
      "weekday": "Qua",
      "max": 18,
      "min": 15,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "22/04",
      "weekday": "Qui",
      "max": 18,
      "min": 15,
      "description": "Trovoadas dispersas",
      "condition": "storm"
    },
    {
      "date": "23/04",
      "weekday": "Sex",
      "max": 20,
      "min": 13,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "24/04",
      "weekday": "Sáb",
      "max": 20,
      "min": 13,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "25/04",
      "weekday": "Dom",
      "max": 21,
      "min": 14,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "26/04",
      "weekday": "Seg",
      "max": 22,
      "min": 16,
      "description": "Alguns chuviscos",
      "condition": "rain"
    },
    {
      "date": "27/04",
      "weekday": "Ter",
      "max": 18,
      "min": 15,
      "description": "Trovoadas dispersas",
      "condition": "storm"
    },
    {
      "date": "28/04",
      "weekday": "Qua",
      "max": 18,
      "min": 14,
      "description": "Alguns chuviscos",
      "condition": "rain"
    }
  
];


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />

      <Header />

      <Conditions />

      <FlatList 
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%'}}
        style={styles.list}
        data={mylist}
        keyExtractor={ item=> item.date }
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FF',
    paddingTop: '5%'
  },
  list:{
    marginTop: 10,
    marginLeft: 10,
  }
})