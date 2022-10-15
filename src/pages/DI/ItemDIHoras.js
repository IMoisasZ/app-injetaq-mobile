import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  formatCurrencyNumber,
  formatDecimalNumber,
} from '../../utils/formatNumbers';

export default function ItemDI({ item, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.view_operation}>
        <Text style={styles.text_opetation}>
          Operação: {item.operation.description}
        </Text>
        <Text style={styles.text}>
          Custo Hora:{formatCurrencyNumber(item.price)}
        </Text>
      </View>
      <View style={styles.view_data}>
        <Text style={[styles.text, { marginRight: 100 }]}>
          Hrs Prev: {formatDecimalNumber(item.quantity)}
        </Text>
        <Text style={styles.text}>
          Custo Prev: R$ {formatCurrencyNumber(item.quantity * item.price)}
        </Text>
      </View>
      {item.hours_real && (
        <View style={styles.view_data}>
          <Text style={[styles.text, { marginRight: 30 }]}>
            Hrs Real: {formatDecimalNumber(item.hours_real.quantity)}
          </Text>
          <Text style={styles.text}>
            Custo Real:{' '}
            {formatCurrencyNumber(item.hours_real.quantity * item.price)}
          </Text>
        </View>
      )}
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
  text_opetation: {
    flexDirection: 'row',
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
