import PropTypes from 'prop-types';

export const taksTypes = ['queue', 'development', 'done'];
export const COLORS = {
  PINK: '#fdb5b5',
  GREEN: '#8ebb69',
  BLUE: '#afafff'
};

export const getDefCard = (type, id) => {
  return {
    id: id,
    type: type,
    project: '',
    title: '',
    description: '',
    start: '',
    end: '',
    priority: false,
    subtitles: [],
    comments: []
  };
};

export const CardPropTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  priority: PropTypes.bool.isRequired,
  subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export const PropsTypesBallon = {
  data: PropTypes.array.isRequired,
  onClickAddBtn: PropTypes.func.isRequired,
  onClickCloseBtn: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  addNewComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired
};
