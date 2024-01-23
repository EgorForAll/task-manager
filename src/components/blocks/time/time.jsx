import React from 'react';
import PropTypes from 'prop-types';

// Компонент для расчета временных затрат на задачу
const Time = ({ startDate, endDate }) => {
  const getYear = (date) => Number(date.slice(0, 4));
  const getMonth = (date) => Number(date.slice(5, 7));
  const getDay = (date) => Number(date.slice(8, 10));
  const startYear = getYear(startDate);
  const endYear = getYear(endDate);
  const startMonth = getMonth(startDate);
  const endMonth = getMonth(endDate);
  const startDay = getDay(startDate);
  const endDay = getDay(endDate);
  const startJsDate = new Date(startYear, startMonth - 1, startDay);
  const endJsDate = new Date(endYear, endMonth - 1, endDay);
  const diff = (endJsDate - startJsDate) / 1000 / 60 / 60 / 24;
  return <span>{diff} д.</span>;
};

Time.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

export default Time;
