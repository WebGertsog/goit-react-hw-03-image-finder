import PropTypes from 'prop-types';
import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
  SearchbarStyles,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  // Hand leChange
  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  // Handle Submit
  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    if (value.trim() === '') {
      return toast.error('Please enter a valid search name!');
    }
    this.props.propSubmit(value);
    this.reset(event);
  };

  // Reset
  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <Toaster position="top-right" />
        <SearchbarStyles>
          <SearchForm onSubmitCapture={this.handleSubmit}>
            <SearchFormInput
              type="text"
              value={this.state.value}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
            <SearchFormButton type="submit"></SearchFormButton>
          </SearchForm>
        </SearchbarStyles>
      </>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  propSubmit: PropTypes.func.isRequired,
};
