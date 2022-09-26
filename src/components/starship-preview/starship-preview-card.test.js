import React from 'react';
import {render, screen} from "@testing-library/react"
import StarshipPreviewCard from './starship-preview-card';
import { AppContext } from '../../context/appContext';
import { BrowserRouter } from 'react-router-dom';

const mockUrl= "www.testtest.com"
const mockName= "starship";
const mockModel= "model";
const mockRating= 2;

beforeEach(() => {
    const mockProps={        
        starship: {

            name: mockName,
            model: mockModel,
            hyperdrive_rating: mockRating,
            url: mockUrl
        
        
    }}
    const contextValue={ searchTerm: "name"};
  render(
    <BrowserRouter>
   <AppContext.Provider value={contextValue}>
<StarshipPreviewCard   {...mockProps}/>
</AppContext.Provider>
</BrowserRouter>);
});

describe("Starship Preview Card Component", ()=>{
      
    // it('should render imageUrl as a prop on StarshipCardContainer', () => {
    //     const cardComponent= screen.getByTestId('Card')
    //     expect(cardComponent.prop('imageUrl')).toBe(imageUrl);
    //   }); 
    
   it("renders name prop in Title container", ()=>{
              
        const titleComponent= screen.getByTestId('Title')
        expect(titleComponent).toHaveTextContent(mockName)
    
    });
    
   it("renders model prop in Model container", ()=>{
       const modelComponent=screen.getByTestId('Model')
        expect(modelComponent).toHaveTextContent(`Model: ${mockModel}`)
    
    });

    it("renders rating prop in rating container", ()=>{
      
        const ratingComponent=screen.getByTestId('Rating')
        expect(ratingComponent).toHaveTextContent(`Hyperdrive Rating: ${mockRating}`)
    
    })
    
    
    
})





// })






