import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';
import url from '../config';

const Dropdown = ({onValueChange}) => {
  const [options, setOptions] = useState([]);

  const placeholder = {
    label: 'Choisissez la catégorie...',
    value: null,
  };

  useEffect (() => {
  fetch(`${url}/category/getAll`)
  .then(response => response.json())
  .then(json => {
    if (json["datas"]) {
      const categories = json["datas"];
      const tempCats = [];
      for (let cat of categories) {
        tempCats.push({
          label: cat.name,
          value: cat._id,
        });
      }
      setOptions(tempCats);
    }
  })
  .catch(error => {
    console.error(error);
  });
  }, []);

  return (
    <View>
      {/* <Text>Catégorie:</Text> */}
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={onValueChange}
        style={styles.input}
      />
      {/* {selectedValue && <Text>Sélectionné: {selectedValue}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  input : {
    height : 50,
    paddingHorizontal : 20,
    borderWidth : 1,
    borderRadius: 7,
  },
})

export default Dropdown;