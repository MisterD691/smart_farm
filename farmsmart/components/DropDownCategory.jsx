import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text, StyleSheet } from 'react-native';
import url from '../config';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const placeholder = {
    label: 'Choisissez la catégorie...',
    value: null,
  };

  const [options, setOptions] = useState([]);

  fetch(`${url}/category/getAll`)
  .then(response => response.json())
  .then(json => {
    console.log(json["datas"]);
    if (json["datas"]) {
      const categories = json["datas"];
      options = [];
      for (let cat of categories) {
        options.push({
          label: cat.name,
          value: cat._id,
        });
      }
      // setOptions(options);
    }
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <View>
      {/* <Text>Catégorie:</Text> */}
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
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