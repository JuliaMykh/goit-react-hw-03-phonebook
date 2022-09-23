import React from "react";
import PropTypes from 'prop-types';
import { FilterText } from './Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      <FilterText>Find contacts by name</FilterText>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
