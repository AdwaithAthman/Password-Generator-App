import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Length is too short - should be 4 chars minimum.')
    .max(16, 'Length is too long - should be 16 chars maximum.')
    .required('Length is required'),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
