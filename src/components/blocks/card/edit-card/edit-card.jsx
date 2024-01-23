import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Priority,
  Div,
  CardHeader,
  EditWrapper,
  Select
} from '../display-card/styled';
import { Textarea, Input, TitleInput, Error, IdWrap, ProjectInput, BtnWrapper } from './styled';
import EditButton from '../../../ui/edit-button/edit-button';
import Checkbox from '../../../ui/checkbox/checkbox';
import SubmitButton from '../../../ui/submit-button/submit-button';
import DeleteButton from '../../../ui/delete-button/delete-button';
import { postData } from '../../../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import CommentButton from '../../../ui/comment-button/comment-button';
import SubTaskButton from '../../../ui/subtask-button/subtask-button';
import { addNewCommentToReducer, addNewSubtasksToReducer } from '../../../../store/actions';
import { CardPropTypes, taksTypes } from '../../../../const';
import { formValidate } from '../../../../utils';

const EditCard = ({
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
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  // HOC
  const BallonComment = getBallonComment();
  const BallonSubtask = getBallonSubtask();

  // Redux state
  const tasks = useSelector((state) => state.tasks);
  const newComments = useSelector((state) => state.new_comments);
  const newSubtasks = useSelector((state) => state.new_subtasks);

  // Refs
  const formRef = useRef();
  const startDateRef = useRef();
  const titleRef = useRef();
  const endDateRef = useRef();
  const projectRef = useRef();
  const descRef = useRef();
  const checkboxRef = useRef();
  const statusRef = useRef();

  // Redux actions
  const dispatch = useDispatch();
  const postNewData = (data, callback) => dispatch(postData(data, callback));
  const onAddNewCommentToReducer = (value) => dispatch(addNewCommentToReducer(value));
  const onAddNewSubTaskToReducer = (value) => dispatch(addNewSubtasksToReducer(value));

  // Функция для обновления задачи
  const onUpdateTask = (e) => {
    e.preventDefault();
    const isValid = formValidate(formRef.current);
    if (isValid) {
      setLoading(true);
      setError(false);
      const currentTask = tasks.find((item) => item.id === task.id);
      let newArrTask = [];
      if (currentTask) {
        // Если задача не новая
        const copyObj = { ...currentTask };
        const updatedTask = Object.assign(copyObj, {
          description: descRef.current.value,
          start: startDateRef.current.value,
          end: endDateRef.current.value,
          project: projectRef.current.value,
          priority: checkboxRef.current.checked,
          title: titleRef.current.value,
          type: statusRef.current.value,
          comments: [...copyObj.comments, ...newComments],
          subtitles: [...copyObj.subtitles, ...newSubtasks]
        });
        newArrTask = tasks.slice();
        const currentIndex = newArrTask.findIndex((item) => item.id === currentTask.id);
        newArrTask[currentIndex] = updatedTask;
      } else {
        // если задача новая
        const newTask = {
          id: task.id,
          type: statusRef.current.value,
          project: projectRef.current.value,
          description: descRef.current.value,
          start: startDateRef.current.value,
          end: endDateRef.current.value,
          priority: checkboxRef.current.checked,
          title: titleRef.current.value,
          comments: [...newComments],
          subtitles: [...newSubtasks]
        };
        newArrTask = [...tasks, newTask];
      }
      postNewData(JSON.stringify(newArrTask), setLoading);
      onAddNewCommentToReducer([]);
      onAddNewSubTaskToReducer([]);
    } else {
      setError(true);
    }
  };
  return (
    <CardWrapper
      className="animate__animated animate__flipInY"
      style={{ borderColor: borderColor }}>
      <form action="" method="post" onSubmit={(e) => onUpdateTask(e)} ref={formRef}>
        <CardHeader style={isError ? { borderBottom: '1px solid red' } : null}>
          <EditWrapper>
            <IdWrap>
              &#8470;
              <span>{task.id}</span>
            </IdWrap>
            <EditButton onClick={() => onClickEditBtn()} />
          </EditWrapper>
          <TitleInput
            ref={titleRef}
            id="title"
            name="title"
            defaultValue={task.title}
            style={isError ? { borderBottom: '1px solid red' } : null}
          />
        </CardHeader>
        <Textarea
          ref={descRef}
          defaultValue={task.description}
          style={isError ? { border: '1px solid red' } : null}></Textarea>
        <Div>
          <label htmlFor="projet">Проект: </label>
          <ProjectInput
            ref={projectRef}
            type="text"
            id="project"
            name="project"
            defaultValue={task.project}
            style={isError ? { borderBottom: '1px solid red' } : null}
          />
        </Div>
        <Div>
          <label htmlFor="status">Статус:</label>
          <Select ref={statusRef} id="status" name="status" defaultValue={task.type}>
            {taksTypes.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Div>
        <Div>
          <label htmlFor="start-date">Дата начала: </label>
          <Input
            type="date"
            ref={startDateRef}
            id="start-date"
            name="start-date"
            defaultValue={task.start}
          />
        </Div>
        <Div>
          <label htmlFor="end-date">Дата окончания: </label>
          <Input
            id="end-date"
            ref={endDateRef}
            name="end-date"
            type="date"
            defaultValue={task.end}
          />
        </Div>
        <Priority>
          <Checkbox checkboxRef={checkboxRef} priority={task.priority} />
        </Priority>
        <Div style={{ display: 'flex', transform: 'translateY(20px)' }}>
          <CommentButton quantity={task.comments.length} onClickCommentBtn={onClickCommentBtn} _ />
          <SubTaskButton quantity={task.subtitles.length} onClickSubtaskBtn={onClickSubtasksBtn} />
        </Div>
        {isShowComments ? <BallonComment /> : null}
        {isShowSubtasks ? <BallonSubtask /> : null}
        <BtnWrapper>
          <SubmitButton isLoading={isLoading} />
          <DeleteButton task={task} isLoading={isLoading} setLoading={setLoading} />
        </BtnWrapper>
        {isError && <Error className="error">Пожалуйста, заполните все поля</Error>}
      </form>
    </CardWrapper>
  );
};

EditCard.propTypes = {
  task: PropTypes.shape(CardPropTypes),
  onClickEditBtn: PropTypes.func.isRequired,
  onClickCommentBtn: PropTypes.func.isRequired,
  onClickSubtasksBtn: PropTypes.func.isRequired,
  isShowComments: PropTypes.bool.isRequired,
  isShowSubtasks: PropTypes.bool.isRequired,
  getBallonComment: PropTypes.func.isRequired,
  getBallonSubtask: PropTypes.func.isRequired,
  borderColor: PropTypes.string.isRequired,
  change: PropTypes.bool.isRequired,
  setChange: PropTypes.func.isRequired
};

export default EditCard;
