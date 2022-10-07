import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Colors from './Colors';

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    color: Colors.text,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.violet,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  login_form: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '80%',
  },
  page: {
    padding: 20,
    backgroundColor: Colors.background
  }

});
interface SpacerProps {
  height?: number;
  width?: number;
}

export function Spacer({ height, width }: SpacerProps) {
  return (
    <View
      style={[spacer_styles.spacer, height ? { height: height } : { width: width }]}
    />
  );
}

const spacer_styles = StyleSheet.create({
  spacer: {},
});

interface ILabeledTextProps {
  label: string;
  value: string;
  keyboard_type?: KeyboardTypeOptions;
  is_password?: boolean;
  on_change: (s: string) => void;
}

export function LabeledTextInput({
  value,
  label,
  on_change,
  keyboard_type,
  is_password,
}: ILabeledTextProps) {
  const [highlight_color, set_hightlight_color] = React.useState(Colors.text);
  const [border_highlight, set_board_highlight] = React.useState(
    Colors.alabaster,
  );

  return (
    <View>
      <Text style={[labeled_text_styels.label, { color: highlight_color }]}>
        {label}
      </Text>
      <Spacer height={8} />
      <TextInput
        value={value}
        onChangeText={on_change}
        style={[labeled_text_styels.input, { borderColor: border_highlight }]}
        keyboardType={keyboard_type}
        secureTextEntry={is_password}
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

interface TextButtonProps {
  title: string;
  on_press: () => void;
}

export function TextButton({ title, on_press }: TextButtonProps) {
  return (
    <TouchableHighlight onPress={on_press}>
      <View style={text_button_styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const text_button_styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 32,
  },
});
