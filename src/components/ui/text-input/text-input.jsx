import React, { useRef } from 'react';
import PropsTypes from 'prop-types';
import { Input } from './styled';

const TextInput = ({ label, id }) => {
  const inputRef = useRef();
  return (
    <>
      <label htmlFor="subtitle" style={{ display: 'none' }}>
        {label}
      </label>
      <Input ref={inputRef} id={id} name={id} type="text" />
    </>
  );
};

TextInput.propsTypes = {
  label: PropsTypes.string.isRequired,
  id: PropsTypes.number.isRequireds
};

export default TextInput;
