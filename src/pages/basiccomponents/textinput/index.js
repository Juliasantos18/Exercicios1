import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} 
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#f5f242',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

export default UselessTextInputMultiline;