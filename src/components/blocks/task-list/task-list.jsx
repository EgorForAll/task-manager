import { useEffect, useState } from 'react';
import { Grid, GridColumn } from '../../pages/task-page/styled';
import { nanoid } from 'nanoid';
import { COLORS, CardPropTypes } from '../../../const';
import Card from '../card/card';
import PropTypes from 'prop-types';

const TaskList = ({ tasksToRender, type, ToFilterTasks }) => {
  const [color, setColor] = useState('');
  useEffect(() => {
    switch (type) {
      case 'done':
        setColor(COLORS.GREEN);
        break;
      case 'queue':
        setColor(COLORS.BLUE);
        break;
      case 'development':
        setColor(COLORS.PINK);
        break;
    }
  }, [type]);
  return (
    <>
      <h2 style={{ borderColor: color }}>{type}</h2>
      <Grid>
        {ToFilterTasks(tasksToRender, type).map((task) => (
          <GridColumn key={nanoid()}>
            <Card task={task} borderColor={color} />
          </GridColumn>
        ))}
      </Grid>
    </>
  );
};

TaskList.propTypes = {
  type: PropTypes.string.isRequired,
  ToFilterTasks: PropTypes.func.isRequired,
  tasksToRender: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired
};

export default TaskList;
