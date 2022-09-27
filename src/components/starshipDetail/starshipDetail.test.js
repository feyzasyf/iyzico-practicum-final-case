import React from 'react';
import {render, screen} from "@testing-library/react";
import StarshipDetail from './starshipDetail';
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
      const mockError=false;


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

    it("renders props prop in Detail Info container", ()=>{
             
        const nameComponent= screen.getByTestId('name')
        expect(nameComponent).toHaveTextContent("name")
    
        const modelComponent= screen.getByTestId('modelName')
        expect(modelComponent).toHaveTextContent('Model: model')

        const manufComponent= screen.getByTestId('manuf')
        expect(manufComponent).toHaveTextContent('Manufacturer: manufacturer')

        const passengerComponent= screen.getByTestId('passenger')
        expect(passengerComponent).toHaveTextContent('Passengers: 1')

        const speedComponent= screen.getByTestId('speed')
        expect(speedComponent).toHaveTextContent('Max Atmosphering Speed: 10')

        const cargoComponent= screen.getByTestId('cargo')
        expect(cargoComponent).toHaveTextContent('Cargo capacity: 2')
        
    });
  
  })

