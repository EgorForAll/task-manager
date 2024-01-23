import React from 'react';
import PropsTypes from 'prop-types';
import { Textarea, Button, ButtonsWrap, PopupWrap } from './styled';
import { ReactComponent as Check } from '../../../assets/check.svg';
import { ReactComponent as Cross } from '../../../assets/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCommentToReducer, addNewSubtasksToReducer } from '../../../store/actions';
import { useRef } from 'react';

const labelTitle = {
  COMMENT_LABEL: 'Введите новый комментарий: ',
  SUBTASK_LABEL: 'Введите новую подзадачу: '
};

const Popup = ({ isComment, addNewComment, deleteComment, plsBtn }) => {
  const commentRef = useRef();
  const dispatch = useDispatch();
  const newComments = useSelector((state) => state.new_comments);
  const newSubtasks = useSelector((state) => state.new_subtasks);

  // Добавление нового комментария в redux для отображения во всех компонентах перед отправкой на сервер
  const onAddNewCommenToReducer = (comment) =>
    dispatch(addNewCommentToReducer([...newComments, comment]));
  const onAddNewSubtasksToReducer = (subtask) =>
    dispatch(addNewSubtasksToReducer([...newSubtasks, subtask]));
  return (
    <>
      <PopupWrap>
        <label htmlFor="new-item">
          {isComment ? labelTitle.COMMENT_LABEL : labelTitle.SUBTASK_LABEL}
        </label>
        <Textarea id="new-item" name="new-item" ref={commentRef} />
      </PopupWrap>
      <ButtonsWrap>
        <Button
          onClick={() => {
            addNewComment(plsBtn);
            isComment
              ? onAddNewCommenToReducer(commentRef.current.value)
              : onAddNewSubtasksToReducer(commentRef.current.value);
          }}>
          <Check />
        </Button>
        <Button onClick={() => deleteComment(commentRef.current.value, plsBtn)}>
          <Cross />
        </Button>
      </ButtonsWrap>
    </>
  );
};

Popup.propsTypes = {
  isComment: PropsTypes.bool.isRequired,
  addNewComment: PropsTypes.func.isRequired,
  deleteComment: PropsTypes.func.isRequired,
  plsBtn: PropsTypes.object.isRequired
};
export default Popup;
