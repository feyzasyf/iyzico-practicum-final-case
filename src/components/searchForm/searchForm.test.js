import React from 'react';
import {render, screen,fireEvent} from "@testing-library/react";
import { AppContext } from '../../context/appContext';
import SearchForm from './searchForm';



describe("Input value", ()=>{


    it("updates on change", ()=>{
        const setSearchTerm = jest.fn((value) => {});
        const setPageNumber= jest.fn((value) => {});
        const searchTerm= "hello";
        const contextValue={ searchTerm, setSearchTerm, setPageNumber}
    
        render(
          
           <AppContext.Provider value={contextValue}>
        <SearchForm />
        </AppContext.Provider>)
        const searchInput = screen.getByPlaceholderText("Type to search by name or model");
        fireEvent.change(searchInput, { target: { value: {searchTerm} } })
        expect(searchInput.value).toBe('hello')

    })

})