import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from './Colors';

interface SpacerProps {
  height?: number;
  width?: number;
}

export function Spacer({height, width}: SpacerProps) {
  return (
    <View
      style={[spacer_styles.spacer, height ? {height: height} : {width: width}]}
    />
  );
}

const spacer_styles = StyleSheet.create({
  spacer: {},
});

interface ILabeledTextProps {
  label: string;
  value: string;
  on_change: (s: string) => void;
}

export function LabeledTextInput({value, label, on_change}: ILabeledTextProps) {
  const [highlight_color, set_hightlight_color] = React.useState(Colors.text);
  const [border_highlight, set_board_highlight] = React.useState(
    Colors.alabaster,
  );

  return (
    <View>
      <Text style={[labeled_text_styels.label, {color: highlight_color}]}>
        {label}
      </Text>
      <Spacer height={8} />
      <TextInput
        value={value}
        onChangeText={on_change}
        style={[labeled_text_styels.input, {borderColor: border_highlight}]}
        onFocus={() => {
          set_hightlight_color(Colors.violet);
          set_board_highlight(Colors.violet);
        }}
        onBlur={() => {
          set_hightlight_color(Colors.text);
          set_board_highlight(Colors.alabaster);
        }}
      />
    </View>
  );
}

const labeled_text_styels = StyleSheet.create({
  label: {},
  input: {
    borderWidth: 1,
    borderColor: Colors.alabaster,
    borderRadius: 4,
  },
});
