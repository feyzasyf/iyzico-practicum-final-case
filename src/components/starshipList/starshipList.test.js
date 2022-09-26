
import React from 'react';
import {render, screen} from "@testing-library/react";
import StarshipList from './starshipList';
import { AppContext } from '../../context/appContext';


// beforeEach(()=>{
   
  
//     const setPageNumber= jest.fn((value) => {});
//       const mockItemList=[
//         starship1, starship2
//       ]
      
    
//       const contextValue={
//         error: false,
//         setPageNumber: setPageNumber,
//         loading:false,
//         itemList: mockItemList

        
//       }
//       render(
//         <AppContext.Provider value={contextValue}>
//         <StarshipDetail/>
//         </AppContext.Provider>
//     )

// })


  describe("Starship List Component", ()=>{
            it("render No result when no items in the list", ()=>{
                const setPageNumber= jest.fn((value) => {});
                const mockItemList=[]
                
              
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

            // test("load more button", ()=>{
            //     const setPageNumber= jest.fn((value) => {});
            //     const mockItemList=[]
                
              
            //     const contextValue={
            //       error: false,
            //       setPageNumber: setPageNumber,
            //       loading:false,
            //       itemList: mockItemList,
            //       next: "www.next.com",      
                  
            //     }
            //     render(
            //       <AppContext.Provider value={contextValue}>
            //       <StarshipList/>
            //       </AppContext.Provider>
            //   )

            //   const LoadMoreButton = screen.getByRole('button', { name: /AddToCart/i });

            // })

  })