
import React from 'react';
import {render, screen} from "@testing-library/react";
import StarshipList from './starshipList';
import { AppContext } from '../../context/appContext';
import { BrowserRouter } from 'react-router-dom';



// beforeEach(()=>{
   

//   const setPageNumber= jest.fn((value) => {});
//   const mockStarship={
//     name:"name",
//     model: "model",
//     // passengers: 1,
//     // manufacturer:"manufacturer",
//     // max_atmosphering_speed: 10,
//     // crew: 1,
//     // cargo_capacity:2,
//     url:"www.starships/3/"
//   } 
//   const mockItemList=[mockStarship];
  

//   const contextValue={
//     error: false,
//     setPageNumber: setPageNumber,
//     loading:false,
//     itemList: mockItemList,
//     next: "www.next.com",      
    
//   }
//   render(
//     <BrowserRouter>
//     <AppContext.Provider value={contextValue}>
//     <StarshipList/>
//     </AppContext.Provider>
//     </BrowserRouter>
// )

// })


  describe("Starship List Component", ()=>{
            it("render No result when no items in the list", ()=>{
                const setPageNumber= jest.fn((value) => {});
                const mockItemList=[            
                ]
                
              
                const contextValue={
                  error: false,
                  setPageNumber: setPageNumber,
                  loading:false,
                  itemList: mockItemList,
                  next: null,      
                  
                }
                render(
                  <AppContext.Provider value={contextValue}>
                  <StarshipList/>
                  </AppContext.Provider>
              )
              expect(screen.getByTestId('noresult').textContent).toBe("No matching results found...")

            });

            // test("load more button calls handleLoadMore when clicked", ()=>{
              // const handleLoadMore = jest.fn();
              //   const setPageNumber= jest.fn((value) => {});
              //   const mockStarship={
              //     name:"name",
              //     model: "model",
              //     passengers: 1,
              //     manufacturer:"manufacturer",
              //     max_atmosphering_speed: 10,
              //     crew: 1,
              //     cargo_capacity:2,
              //     url:"www.starships/3/"
              //   } 
              //   const mockItemList=[mockStarship];
                
              
              //   const contextValue={
              //     error: false,
              //     setPageNumber: setPageNumber,
              //     loading:false,
              //     itemList: mockItemList,
              //     next: "www.next.com",      
                  
              //   }
              //   render(
              //     <BrowserRouter>
              //     <AppContext.Provider value={contextValue}>
              //     <StarshipList/>
              //     </AppContext.Provider>
              //     </BrowserRouter>
              // )
            //   const handleLoadMore = jest.fn();
            //   const LoadMoreButton = screen.getByTestId("load btn");
            
            //   // expect(LoadMoreButton).toBeInTheDocument();
            //   fireEvent.click(LoadMoreButton)
            //   expect(handleLoadMore).toHaveBeenCalled();

            // })

  })