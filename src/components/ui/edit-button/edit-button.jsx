import React from 'react';
import PropsTypes from 'prop-types';
import { EditBtn } from './styled';
import { ReactComponent as EditSvg } from '../../../assets/edit.svg';

const EditButton = ({ onClick }) => {
  return (
    <EditBtn>
      <EditSvg onClick={() => onClick()} />
    </EditBtn>
  );
};

EditButton.propsTypes = {
  onClick: PropsTypes.func.isRequired
};

export default EditButton;
