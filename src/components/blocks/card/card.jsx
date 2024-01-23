import React from 'react';
import PropTypes from 'prop-types';
import DisplayCardComponent from './display-card/display-card';
import EditCardComponent from './edit-card/edit-card';
import CardHoc from '../../hoc/card-hoc';
import { useState } from 'react';
import { CardPropTypes } from '../../../const';

const Card = ({ task, borderColor }) => {
  const [change, setChange] = useState(false);
  const [isEdit] = useState(true);
  const DisplayCard = CardHoc(DisplayCardComponent, task, change, setChange, borderColor);
  const EditCard = CardHoc(EditCardComponent, task, change, setChange, borderColor, isEdit);

  // Изменение компонента карточки задач в зависиомсти от состояния
  return change ? <EditCard /> : <DisplayCard />;
};

Card.propsTypes = {
  task: PropTypes.shape(CardPropTypes),
  borderColor: PropTypes.string.isRequired
};

export default Card;
