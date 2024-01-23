import React from 'react';
import PropsTypes from 'prop-types';
import { ReactComponent as SubtaskSvg } from '../../../assets/subtask.svg';
import { Button } from './styled';
import { useSelector } from 'react-redux';

const SubTaskButton = ({ quantity, onClickSubtaskBtn }) => {
  const newSubtasks = useSelector((state) => state.new_subtasks);

  // счетчик задача
  const totalSubtasks = quantity + newSubtasks.length;
  return (
    <Button type="button" onClick={() => onClickSubtaskBtn()}>
      <SubtaskSvg /> {totalSubtasks}
    </Button>
  );
};

SubTaskButton.propsTypes = {
  quantity: PropsTypes.number.isRequired,
  onClickSubtaskBtn: PropsTypes.func.isRequired
};

export default SubTaskButton;
