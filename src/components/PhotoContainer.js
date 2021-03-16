import React, { Component } from 'react';
import Image from './Image';
import LoadingSpinner from './LoadingSpinner';
import { Consumer } from './context/AppContext';

export default class ResultsFound extends Component {

  render() {  
    return (
      <Consumer>
        { ({photos, isLoading}) => {
          if(isLoading ){
            return (
              <LoadingSpinner /> 
           );
          } else {
            if(photos.length > 0) {
              return (
                <div className="photo-container">
                <h2>Results</h2>
                <ul>
                {isLoading ? 
                <LoadingSpinner /> : 
                photos.map((img) => <Image key={img.id} server={img.server} id={img.id}  secret={img.secret} alt={img.title} />)
                }
                </ul>
              </div>
              );
            } else {
              return (
                <div className="photo-container">
                  <h2>No Results Found</h2>
                  <ul>
                    <li className="not-found">
                    <p>Your search did not return any results. Please try again.</p>
                  </li>
                </ul>
              </div>
              );
            }
          }
        }}
      </Consumer>

    );
  }
}