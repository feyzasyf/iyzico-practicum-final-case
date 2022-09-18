import React from 'react'


const SearchForm = () => {
    const handleChange=(e)=>{

    }
  return (
 
    <form className="search-form-container">
    <h2>search starships</h2>
     <input 
     className='form-input' 
     onChange={handleChange}
    
     type="text" />
      
    </form>
   
  )
}

export default SearchForm