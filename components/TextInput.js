import React from 'react';
import {
  View,
  TextInput
} from 'react-native';

const Input = (
    {
      value,
      autoCapitalize,
      changeText,
      placeholder,
      secureTextEntry,
      error,
      errorStyles,
      onSubmitEditing,
      rel,
      returnKeyType,
      keyboardType,
      newStyles,
      autoFocus,
      multiline,
      maxLength,
      onFocus,
      underlineColorAndroid,
      placeholderTextColor
    }) => {
  const {textInput, errorStyle} = InputFieldStyles;
  return (
      <View>
        <View>
          <TextInput
              ref={rel}
              returnKeyType={returnKeyType}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              onSubmitEditing={onSubmitEditing}
              placeholder={placeholder}
              autoCorrect={false}
              value={value}
              onChangeText={changeText}
              underlineColorAndroid={underlineColorAndroid}
              blurOnSubmit={true}
              autoCapitalize={ autoCapitalize ? autoCapitalize : 'none' }
              style={ error ? ( (errorStyles) ? errorStyles : errorStyle ) : (newStyles ? newStyles : textInput)}
              autoFocus={autoFocus}
              multiline={multiline}
              maxLength={maxLength}
              onFocus={onFocus}
              placeholderTextColor={placeholderTextColor}
          />
        </View>
      </View>
  );
};

const InputFieldStyles = {
  inputHeight: {
    height: 50,
  },
  textInput: {
    height: 50,
    backgroundColor: 'transparent',
    color: 'grey',
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  errorStyle: {
    height: 35,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 2,
    color: '#000',
    paddingHorizontal: 8,
  },
  requireField: {
    color: 'red',
  },
};

export {Input};
