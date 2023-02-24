import PropTypes from 'prop-types';
import React from 'react';
import { Search } from './Filter.styled';

const Filter = ({ onChange }) => (
  <Search>
    Find contacts by name
    <input type="text" name="filter" onChange={onChange} />
  </Search>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
