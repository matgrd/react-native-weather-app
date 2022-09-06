import React from "react";
import { View, Text } from "react-native";

type DetailsRowTypes = {
  labelText: string;
  valueText: string;
  styles: any;
};

const DetailsRow = ({ labelText, valueText, styles }: DetailsRowTypes) => {
  return (
    <View style={styles[0]}>
      <Text style={styles[1]}>{labelText}</Text>
      <Text style={styles[2]}>{valueText}</Text>
    </View>
  );
};

export default DetailsRow;
