import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ItemListDI({ navigation, item }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DI', { item })}
        style={[
          styles.item,
          item.status === 'pendente' && { backgroundColor: '#dadada' },
          item.status === 'em execução' && {
            backgroundColor: '#006400',
            color: '#fff',
          },
          item.status === 'encerrada' && {
            backgroundColor: '#DAA520',
            color: '#fff',
          },
          item.status === 'cancelada' && {
            backgroundColor: '#DC143C',
            color: '#fff',
          },
        ]}>
        <View style={styles.view_data_item}>
          <Text style={[styles.text_item]}>DI: {item.di}</Text>
          <Text style={[styles.text_item]}>
            Cliente: {item.client.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#dadada',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_item: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  view_data_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
