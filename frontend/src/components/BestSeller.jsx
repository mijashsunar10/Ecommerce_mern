import React from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = React.useContext(ShopContext) //import all the porducts

    const [latestbestSeller, setBestSeller] = React.useState([]);

    React.useEffect(() => {
         
    // 1️⃣ Filter the 'products' array and keep only those 
    // where the property 'bestSeller' is true
    //products is an array — usually containing a list of product objects like this:
    //.filter() is a JavaScript array method that: goes through each item in the array,
    // item means the current product object in the loop.
    // item.bestSeller checks the value of the bestSeller property in that product.
        const bestProduct =products.filter((item)=> item.bestseller === true);
        setBestSeller(bestProduct.slice(0,5));
        // // 2️⃣ Update the 'bestSeller' state with the filtered list of products
    }, [])
  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLER'} />
            <p className='w-3/4 text-xs sm:text-sm ms:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur, voluptatem vero nulla illum ipsa eveniet hic cumque at quas!</p>
        </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
    {
        latestbestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}  />
        ))
    }
  </div>
        


      
    </div>
  )
}

export default BestSeller
