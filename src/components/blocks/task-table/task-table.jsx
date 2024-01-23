import { taksTypes, COLORS, CardPropTypes } from '../../../const';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Grid, GridColumn, AddBtn } from '../../pages/task-page/styled';
import Card from '../card/card';

const TaskTable = ({ addNewCard, ToFilterTasks, tasksToRender }) => {
  return (
    <Grid>
      {taksTypes.map((item) => {
        let color;
        switch (item) {
          case 'queue':
            color = COLORS.BLUE;
            break;
          case 'development':
            color = COLORS.PINK;
            break;
          case 'done':
            color = COLORS.GREEN;
            break;
        }

        return (
          <GridColumn key={nanoid()}>
            <div style={{ position: 'relative' }}>
              <h2 style={{ borderColor: color, color: color }}>{item}</h2>
              <AddBtn
                style={{ backgroundColor: color }}
                onClick={() => addNewCard(item, tasksToRender.length + 1)}
              />
            </div>
            <div className={`${item}-column`}>
              {ToFilterTasks(tasksToRender, item).map((task) => (
                <Card key={nanoid()} task={task} borderColor={color} />
              ))}
            </div>
          </GridColumn>
        );
      })}
    </Grid>
  );
};

TaskTable.propTypes = {
  addNewCard: PropTypes.func.isRequired,
  ToFilterTasks: PropTypes.func.isRequired,
  tasksToRender: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)).isRequired
};

export default TaskTable;
