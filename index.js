import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
text:{
fontWeight:"bold",
fontSize:20,
textAlign:"center",
color:"purple",
backgroundColor:'yellow',
},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    fontWeight:"bold",
    fontFamily:'Sans Serif',
    backgroundColor:'blue',
    color:'white',
    textAlign:'center',
  },
});

const ListNama = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.text}>Berikut Adalah data nama Mahasiswa Areta Semester 2</Text>
      <FlatList
        data={[
          {key: 'Sugi'},
          {key: 'Tumbuh'},
          {key: 'Suhendi'},
          {key: 'Rico'},
          {key: 'Ricky'},
          {key: 'Naditya'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
          {key: 'lorem'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    </ScrollView >
  );
}

export default ListNama;