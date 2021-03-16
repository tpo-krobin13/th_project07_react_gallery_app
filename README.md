# React Gallery App

## Config File
The config file needs to properties to operate the app:
1. imageDisplayCount: A numeric value that controls the number of images to display on a given page. 

2. flickrApiKey: The api key to use when making remote calls to Flickr. 

copy and past the below contents replacing the api values with your api key. 
```javascript
const config = {
  flickrApiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  imageDisplayCount: 24
};
module.exports = config;

```

## State
The state is managed in a higher component and used in minimal locations. 

## Search
The search feature binds the input element to the dom representation and pulls the value from the input element when search is submitted. There is no need to use state to manage the value. it's a short lived search. 


## The URL
The url is used inconjunction with match to determine the location and to issue a request for the search term. Thus, no separate components are needed to manage either the default links or searched links. The app treats them the same by manipulating the url. Thus when the url changes, the state changes and a re-render is inorder. 
