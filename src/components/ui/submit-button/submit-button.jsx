import React from 'react';
import PropsTypes from 'prop-types';
import { SubmitBtn } from './styled';

const SubmitButton = ({ isLoading }) => {
  return (
    <SubmitBtn type="submit" disabled={isLoading}>
      Обновить
    </SubmitBtn>
  );
};

SubmitButton.propsTypes = {
  onClick: PropsTypes.func.isRequired
};

export default SubmitButton;
