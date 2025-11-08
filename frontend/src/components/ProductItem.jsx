import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// This component is responsible for rendering a single product item.
// It receives product details (id, image, name, price) as props.

// Props (short for properties) are how data is passed from one component to another — usually from a parent component to a child component.
const ProductItem = ({id,image,name,price}) => {

    const {currency} = React.useContext(ShopContext)

  return (

    // Link component lets user click on a product and go to its detail page dynamically
    // Example: /product/123
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            {/* //// first image of the product */}
        </div>
        <p className='pt-3 pb-1 text-sm'>
            {name}
        </p>

        <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}
//we create this component now using this component we will show multiple product in latest collelction component


export default ProductItem
