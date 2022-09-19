import React from 'react'
import SearchForm from '../../components/searchForm/searchForm';
import StarshipList from '../../components/starshipList/starshipList';

const Home= ()=> {
  return (
    <div>
        <SearchForm/>
        <StarshipList/>

    </div>
   
  )
}

export default Home;