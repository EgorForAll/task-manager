import React from 'react';
import { CardWrapper, Desc, Priority, Div, CardHeader, EditWrapper } from './styled';
import EditButton from '../../../ui/edit-button/edit-button';
import Time from '../../time/time';
import CommentButton from '../../../ui/comment-button/comment-button';
import SubTaskButton from '../../../ui/subtask-button/subtask-button';
import PropTypes from 'prop-types';
import { CardPropTypes } from '../../../../const';

const DisplayCard = ({
  task,
  onClickEditBtn,
  borderColor,
  isShowComments,
  isShowSubtasks,
  onClickCommentBtn,
  onClickSubtasksBtn,
  getBallonComment,
  getBallonSubtask
}) => {
  // HOC для карточка просмотра
  const BallonComment = getBallonComment();
  const BallonSubtask = getBallonSubtask();

  return (
    <CardWrapper
      className="animate__animated animate__flipInX"
      style={{ borderColor: borderColor }}>
      <CardHeader>
        <EditWrapper>
          <div>&#8470; {task.id}</div>
          <EditButton onClick={() => onClickEditBtn()} />
        </EditWrapper>

        <h3>{task.title}</h3>
      </CardHeader>
      <Div>Проект: {task.project}</Div>
      <Desc>{task.description}</Desc>
      <Div>Дата начала: {task.start}</Div>
      <Div>Дата окончания: {task.end}</Div>
      <Div>
        Время в разработке: <Time startDate={task.start} endDate={task.end} />
      </Div>
      <Priority>
        <Div>Приоритет: {task.priority ? 'да' : 'нет'}</Div>
      </Priority>
      <Div style={{ display: 'flex' }}>
        <CommentButton quantity={task.comments.length} onClickCommentBtn={onClickCommentBtn} _ />
        <SubTaskButton quantity={task.subtitles.length} onClickSubtaskBtn={onClickSubtasksBtn} />
      </Div>
      {isShowComments ? <BallonComment /> : null}
      {isShowSubtasks ? <BallonSubtask /> : null}
    </CardWrapper>
  );
};

DisplayCard.propTypes = {
  task: PropTypes.shape(CardPropTypes),
  onClickEditBtn: PropTypes.func.isRequired,
  onClickCommentBtn: PropTypes.func.isRequired,
  onClickSubtasksBtn: PropTypes.func.isRequired,
  isShowComments: PropTypes.bool.isRequired,
  isShowSubtasks: PropTypes.bool.isRequired,
  getBallonComment: PropTypes.func.isRequired,
  getBallonSubtask: PropTypes.func.isRequired,
  borderColor: PropTypes.string.isRequired
};

export default DisplayCard;
