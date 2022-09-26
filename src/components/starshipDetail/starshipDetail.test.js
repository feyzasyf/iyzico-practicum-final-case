import React from 'react';
import {render, screen} from "@testing-library/react";
import StarshipDetail from './starshipDetail';
import useFetchData from "../../hooks/useFetchData";
import { BrowserRouter } from 'react-router-dom';


jest.mock('../../hooks/useFetchData', () => {
    const mockStarship ={
        name:"name",
        model: "model",
        passengers: 1,
        manufacturer:"manufacturer",
        max_atmosphering_speed: 10,
        crew: 1,
        cargo_capacity:2,
      } ;
      const mockLoading= false;
      const mockError="";


    return () => {
        return{
        response: mockStarship,
        loading: mockLoading,
        error: mockError,
        }

    }
});

beforeEach(()=>{

    render(
        <BrowserRouter>
        <StarshipDetail/>
        </BrowserRouter>
    )

});

describe("Starship Detail Component", ()=>{

    it("renders name prop in Name container", ()=>{
             
        const nameComponent= screen.getByTestId('name')
        expect(nameComponent).toHaveTextContent("name")
    
    });

  


})

