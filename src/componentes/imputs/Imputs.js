import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import { Controller } from 'react-hook-form'


export default function Imputs({
  imagen,
  control,
  rules = {},
  name,
  placeholder,
  secureTextEntry,
  keyboardType,
  datos,
  setDatos, }) {

  return (


    <Controller
      control={control}
      name={name}
      rules={rules}//Reglas del imput requerido o obligatorio
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? "red" : "#e8e8e8" }]}>
            <Image
              style={styles.iconos}
              source={imagen}
            />
            <TextInput
              value={datos || value}
              onChangeText={(text) => {
                setDatos(text);
                onChange(text);
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.txtInput]}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={styles.txtError}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // marginTop:10,
    // marginBottom:7,
    marginHorizontal: 50,
    marginVertical: 5,
    backgroundColor: '#FAD2E0',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    alignItems: 'center'
  },
  txtInput: {
    fontSize: 15,
    width: '100%',
  },
  iconos: {
    width: 20,
    height: 20
  },
  txtError: {
    color: 'red',
    paddingLeft: 60
  }
})
