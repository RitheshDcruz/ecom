import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList,Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import uuid from 'react-native-uuid';
//usage

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Milk'},
    {id: '2', text: 'Eggs'},
    {id: '3', text: 'Salt'},
    {id: '4', text: 'Bread'},
  ]);

  const deleteItem = id => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if(!text){
      Alert.alert('Error','Please enter an item',{text:'OK'})
    }
    else{
      setItems(previousItems => {
        return [{id: uuid.v1(), text: text}, ...previousItems];
      });
    }
    
  };



  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
