import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatCurrencyNumber } from '../../utils/formatNumbers';

export default function ItemDI({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.view_material}>
        <Text style={styles.text_material}>
          Material/Serviço: {item.material.description}
        </Text>
      </View>
      <View style={styles.view_data}>
        <Text style={styles.text}>
          Custo: {formatCurrencyNumber(item.total)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    marginBottom: 10,
    padding: 10,
  },
  text_material: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  view_data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#dadada',
    fontSize: 12,
  },
});
