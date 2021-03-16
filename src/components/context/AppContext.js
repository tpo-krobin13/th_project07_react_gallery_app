import React, { Component } from 'react';
const axios = require('axios').default;
const appUtils = require('../../AppUtilities')


const AppContext = React.createContext();

export class Provider extends Component {

  state = {
    photos: [],
    isLoading: true
  }

  searchPhotos = (term) =>  {
    this.setState({
      isLoading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appUtils.getFlickrApiKey()}&text=${term}&format=json&content_type=1&media=photos&nojsoncallback=1&per_page=${appUtils.getDisplayImageCount()}`)
      .then( (response) => {
        // handle success
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
      <AppContext.Provider value={{
        photos: this.state.photos,
        actions: {
          searchPhotos: this.searchPhotos
        },
        isLoading: this.state.isLoading
      }}>
      {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const Consumer = AppContext.Consumer;