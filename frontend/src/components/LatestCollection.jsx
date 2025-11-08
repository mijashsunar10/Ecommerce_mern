import React, { useContext, useEffect } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const LatestCollection = () => {

  //   const { products } = useContext(ShopContext)
  const { products } = useContext(ShopContext)

  //Create state vaiable to show the prodicts


  const [latestProducts, setLatestProducts] = React.useState([])

  //// useEffect runs after the component mounts
  // It picks the first 10 products from 'products' and stores them in 'latestProducts'
  useEffect(() => {
    setLatestProducts(products.slice(0, 10)) //// slice returns the first 10 items
    
}, [] ) //// Empty dependency array => runs only once on mount
// latestProducts = [
//   {
//     _id: "1",
//     name: "Red T-Shirt",
//     price: 500,
//     image: ["redshirt.jpg"]
//   },
//   {
//     _id: "2",
//     name: "Blue Jeans",
//     price: 1200,
//     image: ["bluejeans.jpg"]
//   },
//   {
//     _id: "3",
//     name: "White Shoes",
//     price: 2500,
//     image: ["whiteshoes.jpg"]
//   },
//   // ... up to 10 products
// ]

  return (
    <div>
      <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTION'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia rerum repudiandae sequi officiis nihil illo deleniti autem corrupti facere.
          </p>

        </div>

        {/*Rendering Products form the ProductItem  */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 dap-4 gap-y-6">
          {
              // Looping through latestProducts array and showing each item
//               .map() loops through the latestProducts array.
            // For each loop:
          // item = the current product object in the array.

          // index = the position number (0, 1, 2, 3, ...).
            latestProducts.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} price={item.price}  />
            )
            )
          }
        </div>

        {/* Example iteration 👇

      Loop	            item value	                              index value
      1	    { _id: '1', name: 'Red T-Shirt', ... }	        0
      2	    { _id: '2', name: 'Blue Jeans', ... }	          1
      3	    { _id: '3', name: 'White Shoes', ... }	        2 */}




      </div>
    </div>
  )
}

export default LatestCollection
