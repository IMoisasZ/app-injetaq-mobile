import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import ItemDIHoras from './ItemDIHoras';
import ItemDIMaterial from './ItemDIMaterial';
import {
  formatDate,
  formatDecimalNumber,
  formatCurrencyNumber,
} from '../../utils/formatNumbers';

function Numeric({ value }) {
  return (
    <Text>
      <NumericFormat value={value} prefix={'R$'} />;
    </Text>
  );
}

export default function DI({ route }) {
  const data = route.params.item;

  const renderItemHoras = ({ item }) => {
    return <ItemDIHoras item={item} />;
  };

  const renderItemMaterial = ({ item }) => {
    return <ItemDIMaterial item={item} />;
  };

  let totalHours = 0;
  let custoHoras = 0;
  data.di_hours.map((it) => {
    totalHours = totalHours + Number(it.quantity);
    custoHoras = custoHoras + Number(it.quantity) * Number(it.price);
  });

  let custoMaterial = 0;
  data.di_materials.map((it) => {
    custoMaterial = custoMaterial + Number(it.total);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.data}>
        <View style={styles.data_one}>
          <Text style={styles.text_one}>DI: {data.di}</Text>
          <Text style={styles.text_one}>OP: {data.op}</Text>
          <Text style={styles.text_one}>Incio: {formatDate(data.start)}</Text>
          <Text style={styles.text_one}>
            Término: {formatDate(data.finish)}
          </Text>
        </View>
        <View>
          <Text style={styles.text_two}>Descrição: {data.description}</Text>
          <Text style={styles.text_two}>Número: {data.number}</Text>
          <Text style={styles.text_two}>Nome da peça: {data.part_name}</Text>
          <Text style={styles.text_two}>Numero da peça: {data.number}</Text>
        </View>
        <View style={styles.data_three}>
          <Text style={styles.text_two}>
            Cliente: {data.client.description}
          </Text>
          <Text style={styles.text_two}>
            Status: {data.status.toUpperCase()}
          </Text>
        </View>
      </View>
      <ScrollView horizontal>
        {data.di_hours.length > 0 && (
          <View style={styles.view_hours}>
            <Text style={styles.title_hours}>Horas DI</Text>
            <View style={styles.view_title_hours}>
              <Text style={([styles.total], { marginRight: 40 })}>
                Hrs prev: {formatDecimalNumber(totalHours)}
              </Text>
              <Text style={styles.total}>
                Custo Prev: {formatCurrencyNumber(custoHoras)}
              </Text>
            </View>
            {data.di_hours_real && (
              <View style={styles.view_title_hours}>
                <Text style={([styles.total], { marginRight: 40 })}>
                  Hrs real: {formatDecimalNumber()}
                </Text>
                <Text style={styles.total}>
                  Custo real: {formatCurrencyNumber()}
                </Text>
              </View>
            )}
            <FlatList
              data={data.di_hours}
              renderItem={renderItemHoras}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
        {data.di_materials.length > 0 && (
          <View style={styles.view_material}>
            <Text style={styles.title_hours}>Material DI</Text>
            <View style={styles.view_title_hours}>
              <Text style={styles.total}>
                Custo material prev: {formatCurrencyNumber(custoMaterial)}
              </Text>
            </View>
            {data.di_materials_real && (
              <View style={styles.view_title_hours}>
                <Text style={([styles.total], { marginRight: 40 })}>
                  Custo material real: {formatCurrencyNumber(0)}
                </Text>
              </View>
            )}
            <FlatList
              data={data.di_materials}
              renderItem={renderItemMaterial}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  data: {
    borderWidth: 0.5,
    borderColor: '#dadada',
    padding: 10,
    marginBottom: 10,
  },
  data_one: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text_one: {
    color: '#fff',
  },
  data_two: {},
  text_two: {
    color: '#fff',
  },
  data_three: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view_hours: {
    justifyContent: 'center',
    backgroundColor: '#dadada',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  view_title_hours: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  title_hours: {
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  view_material: {
    justifyContent: 'center',
    backgroundColor: '#dadada',
    borderRadius: 5,
  },
});
