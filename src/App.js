import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieView from './components/MovieView';
import AboutView from './components/AboutView';
import { Route, Switch } from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState,useEffect } from 'react';

function App() {

const [searchResults , setSearchResults] = useState([]);
const [searchText , setSearchText] = useState('');

useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWRiZDNiZTYxYjZmODQxZDllOTYyMjUxMmM4MGEyNyIsInN1YiI6IjY0ZTBmZmZmYWFlYzcxMDNmYTQ4YTk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CME3ZWhCo5CzRbgHP1q7hFerljlNr5FKs3SHhtW6Gjg'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response =>  setSearchResults(response.results))
    .then(data =>  console.log(data))
    .catch(err => console.error(err));
},[searchText]);


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutView} />
        <Route path='/search'>
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path='/movies/:id' component={MovieView} />
       
      </Switch>
    </div>
  );
}

export default App;