import React, { Component } from 'react';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import Navigation from './Navigation';

export default class ImageManager extends Component {

  componentDidMount() {
    this.props.loadImages(this.props.matchElem.params.searchTerm)      
  }

  componentDidUpdate(prevProps) {
    if(prevProps.matchElem.params.searchTerm !== this.props.matchElem.params.searchTerm) {
      this.props.loadImages(this.props.matchElem.params.searchTerm)      
    } 
  }

  render() {  
    return (
      <div className="container">
      <SearchForm urlHistory={this.props.urlHistory} />
      <Navigation />
      <PhotoContainer />
      </div>
    );
  }
}