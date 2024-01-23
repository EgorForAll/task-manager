import React, { useRef } from 'react';
import { PropsTypesBallon } from '../../../const';
import { BallonWindowSub, ListItem } from './styled';
import { BallonTitle, CloseBtn, PlusBtn } from '../ballon-comment/styled';
import Popup from '../popup/popup';
import { List } from './styled';
import { useSelector } from 'react-redux';

const BallonSubtasks = ({
  data,
  onClickAddBtn,
  onClickCloseBtn,
  isAdd,
  isEdit,
  addNewComment,
  deleteComment
}) => {
  const ballonSubRef = useRef();
  const addRef = useRef();
  const newSubtasks = useSelector((state) => state.new_subtasks);
  const allSubtasks = [...data, ...newSubtasks];

  return (
    <BallonWindowSub ref={ballonSubRef} className="animate__animated animate__fadeInUp">
      <CloseBtn type="button" onClick={() => onClickCloseBtn(ballonSubRef.current)} />
      <BallonTitle>Подзадачи: </BallonTitle>
      <List>
        {allSubtasks && allSubtasks.length
          ? allSubtasks.map((item) => <ListItem key={allSubtasks.indexOf(item)}>{item}</ListItem>)
          : null}
      </List>
      {isAdd ? (
        <Popup
          addNewComment={addNewComment}
          deleteComment={deleteComment}
          plsBtn={addRef.current}
          isComment={false}
        />
      ) : null}
      {isEdit ? (
        <PlusBtn ref={addRef} onClick={() => onClickAddBtn(addRef.current)}>
          Добавить подзадачу
        </PlusBtn>
      ) : null}
    </BallonWindowSub>
  );
};

BallonSubtasks.propsTypes = PropsTypesBallon;

export default BallonSubtasks;
