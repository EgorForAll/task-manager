import React from 'react';
import { BallonTitle, BallonWindow, List, ListItem, PlusBtn, CloseBtn } from './styled';
import Popup from '../popup/popup';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { PropsTypesBallon } from '../../../const';

const BallonComment = ({
  data,
  onClickAddBtn,
  onClickCloseBtn,
  isAdd,
  isEdit,
  addNewComment,
  deleteComment
}) => {
  const ballonRef = useRef();
  const [isComment] = useState(true);
  const addRef = useRef();
  const newComments = useSelector((state) => state.new_comments);
  const allComments = [...data, ...newComments];

  return (
    <BallonWindow ref={ballonRef} className="animate__animated animate__fadeInUp">
      <CloseBtn type="button" onClick={() => onClickCloseBtn(ballonRef.current)} />
      <BallonTitle>Комментарии: </BallonTitle>
      <List>
        {allComments && allComments.length
          ? allComments.map((item) => <ListItem key={allComments.indexOf(item)}>{item}</ListItem>)
          : null}
      </List>
      {isAdd ? (
        <Popup
          addNewComment={addNewComment}
          deleteComment={deleteComment}
          plsBtn={addRef.current}
          isComment={isComment}
        />
      ) : null}
      {isEdit ? (
        <PlusBtn ref={addRef} onClick={() => onClickAddBtn(addRef.current)}>
          Добавить комментарий
        </PlusBtn>
      ) : null}
    </BallonWindow>
  );
};

BallonComment.propsTypes = PropsTypesBallon;

export default BallonComment;
