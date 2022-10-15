import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import ItemListDI from './ItemListDI';
import MyRadioButton from '../../components/radioButton/RadioButton';
import api from '../../api/api';

export default function ListDI({ navigation }) {
  const [listDI, setListDI] = useState([]);
  const [status, setStatus] = useState('Pendente');

  const data = async () => {
    const newData = [];
    const response = await api.get('di');
    response.data.map((sts) => {
      if (sts.status.toLowerCase() === status.toLowerCase()) {
        newData.push(sts);
      }
    });
    setListDI(newData);
  };

  useEffect(() => {
    data();
  }, [status]);

  const renderItem = ({ item }) => {
    return <ItemListDI item={item} navigation={navigation} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.view_btn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txt_btn}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view_rb}>
        <MyRadioButton
          toggleOnPress={() => setStatus('Pendente')}
          value={status}
          status={status === 'Pendente' ? 'checked' : 'unchecked'}
          labelRb='Pendente'
        />
        <MyRadioButton
          toggleOnPress={() => setStatus('Em Execução')}
          value={status}
          status={status === 'Em Execução' ? 'checked' : 'unchecked'}
          labelRb='Em Execução'
        />
        <MyRadioButton
          toggleOnPress={() => setStatus('Encerrada')}
          value={status}
          status={status === 'Encerrada' ? 'checked' : 'unchecked'}
          labelRb='Encerrada'
        />
        <MyRadioButton
          toggleOnPress={() => setStatus('Cancelada')}
          value={status}
          status={status === 'Cancelada' ? 'checked' : 'unchecked'}
          labelRb='Cancelada'
        />
      </View>
      <FlatList
        data={listDI}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view_btn: {
    alignItems: 'flex-end',
  },
  btn: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#dadada',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  view_rb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
});
