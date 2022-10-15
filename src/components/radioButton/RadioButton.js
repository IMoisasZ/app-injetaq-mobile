import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function MyRadioButton({
  toggleOnPress,
  value,
  status,
  labelRb = 'label radio button',
}) {
  return (
    <View style={styles.view_status}>
      <Text
        style={
          status === 'checked'
            ? styles.text_rb_status_selected
            : styles.text_rb_status
        }>
        {labelRb}
      </Text>
      <RadioButton value={value} status={status} onPress={toggleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  view_status: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_rb_status: {
    color: '#fff',
  },
  text_rb_status_selected: {
    color: '#D2691E',
    fontWeight: 'bold',
  },
});
