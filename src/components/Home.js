import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

export default class Home extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <div className="container">
        <SearchForm />
        <Navigation />
        <div className="photo-container">
          <h2>Search for a Photo</h2>
        </div>
      </div>
    );
  }
}