import React from 'react';
import PropsTypes from 'prop-types';

const Checkbox = ({ priority, checkboxRef }) => {
  return (
    <>
      <label htmlFor="checkbox">Приоритет: </label>
      <input
        ref={checkboxRef}
        id="checkbox"
        type="checkbox"
        name="checkebox"
        defaultChecked={priority ? true : false}
      />
    </>
  );
};

Checkbox.propsTypes = {
  priority: PropsTypes.bool.isRequired,
  checkboxRef: PropsTypes.object.isRequired
};

export default Checkbox;
