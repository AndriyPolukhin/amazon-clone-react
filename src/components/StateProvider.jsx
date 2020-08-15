// * Setting up a datalayer
// * We need this to track the basket
// * 1. Dependencies

import React, { createContext, useContext, useReducer } from 'react';

// * 2. Data layer
export const StateContext = createContext();

// * 3. Build  a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// * 4. This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
