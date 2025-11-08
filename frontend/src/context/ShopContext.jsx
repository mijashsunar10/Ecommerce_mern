// // Importing 'createContext' function from React to create a global contex
import React, { createContext } from "react";

import { products } from "../assets/frontend_assets/assets";

// Creating a new context called 'ShopContext' to share data globally across components
// Any component can use this context to access shared shop-related data
export const ShopContext = createContext(); // Creating context for shop

// Creating a Provider component named 'ShopContextProvider'
// This component will wrap the entire app (or specific parts of it)
// and supply the data (via the context) to all child components
const ShopContextProvider = (props)=>{
    const currency = '$'; // Defining a currency symbol to be used throughout the app

        // Creating an object 'value' that holds all the data or functions 
    // you want to share globally through context

    const delivery_fee = 10;

    const [search,setSearch] = React.useState(''); // State to hold the search query entered by the user

    const [ShowSearch,setShowSearch] = React.useState(true); // State to control visibility of the search bar



    const value =
    {
        products,currency,delivery_fee,search,setSearch,ShowSearch,setShowSearch

    } //When we add varibale or fucntions in value object, they will be accessible in whole app or other compoennt using COntect api

    // Returning the context provider component
    // It wraps its child components (props.children) 
    // and passes down the 'value' object so that 
    // any component inside can access shared data using useContext(ShopContext)

    return (
        <ShopContext.Provider value={value}>

            {props.children}{/* This renders all components wrapped inside this provider */}
            
        </ShopContext.Provider>
    )
}

 
export default ShopContextProvider;