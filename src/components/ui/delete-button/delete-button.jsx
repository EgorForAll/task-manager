import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Btn } from './styled';
import { postData } from '../../../store/api-actions';
import { CardPropTypes } from '../../../const';
import Loader from '../loader/loader';

const DeleteButton = ({ task, isLoading, setLoading }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const onPostData = (arr) => dispatch(postData(arr));

  // Логика удаления задачи. В данном случае на backend используется бесплатное api от JSON.bin, на котором нельзя оставлять пустой JSON, поэтому удалить все задачи нельзя
  const onDeleteTask = () => {
    setLoading(true);
    const tasksUpdated = tasks.filter((item) => item.id !== task.id);
    onPostData(JSON.stringify(tasksUpdated), setLoading);
  };

  return (
    <Btn onClick={() => onDeleteTask()} type="button" disabled={isLoading}>
      {!isLoading ? 'Удалить' : <Loader />}
    </Btn>
  );
};

DeleteButton.propTypes = {
  task: PropTypes.shape(CardPropTypes),
  isLoading: PropTypes.bool.isRequired
};

export default DeleteButton;
