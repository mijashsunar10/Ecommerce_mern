import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = React.useContext(ShopContext) //import all the porducts
const [showFilter, setShowFilter] = React.useState(true);
const [filteredProducts, setFilteredProducts] = React.useState([]);



useEffect(() => {
  setFilteredProducts(products);
}, [])

  return (
     <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS</p>
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90': ''}`} src={assets.dropdwon_icon}  alt="" />

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'}  /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} /> Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Top Wear'} /> Top Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottom Wear'}  /> Bottom Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winter wear'} /> Winter wear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select className="border border-gray-300 px-3 py-1 text-sm sm:text-base">
            <option value="relevant">Sort By:Relevant </option>
             <option value="low-high">Sort By:Low to High </option>
              <option value="high-low">Sort By:High to Low </option>
          </select>

          </div> 

          {/* Map Products */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))}
             </div>
           </div>



    </div>
  )
}

export default Collection
