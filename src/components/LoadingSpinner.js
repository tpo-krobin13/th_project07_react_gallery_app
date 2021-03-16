import React, { Component } from 'react';
import Image from './Image';

export default class LoadingSpinner extends Component {

  render() {  
    return (
      <div className="photo-container">
      <h2>Loading.... </h2>
      <ul>
      <img src={`https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=4b3c3188ac786e0ff54164a35564057f858e2811cd460fc0&rid=giphy.gif`} height="256" width="256" alt="404 Not Found"/>
      </ul>
    </div>

    );
  }
}