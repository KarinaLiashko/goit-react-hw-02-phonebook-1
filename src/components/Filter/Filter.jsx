import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FindContacts } from './Filter.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
    this.props.onChange(e);
  };

  render() {

    const { filter } = this.state;
    return (
      <FindContacts>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
      </FindContacts>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
