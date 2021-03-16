import SearchForm from './SearchForm';
import Navigation from './Navigation';

const PageNotFound = (props) => (
  <div className="container">
    <SearchForm />
    <Navigation />
    <div className="photo-container">
      <h2>Stay Calm, the Page Can Not Be Found</h2>
      <div>
      <img src={`https://media2.giphy.com/media/H54feNXf6i4eAQubud/giphy.gif?cid=4b3c3188zmz1ktv32oou2i6iocg0n4kybrvkszgjyoc7c2mc&rid=giphy.gif`} alt="404 Not Found"/>
      </div>
    </div>
  </div>
 );

 export default PageNotFound;
