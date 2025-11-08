import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products} = React.useContext(ShopContext) //import all the porducts
const [showFilter, setShowFilter] = React.useState(true);
const [filteredProducts, setFilteredProducts] = React.useState([]);

const[category, setCategory] = React.useState([]);
const [subCategory, setSubCategory] = React.useState([]);


const toggleCategory = (e) =>{

  if(category.includes(e.target.value))
  {

    setCategory(prev=> prev.filter(item=> item !== e.target.value)) //This line removes an item from the array if it already exists.
  }
  else{

    setCategory(prev => [...prev, e.target.value]) //"Take the old list, keep everything in it, and add this new clicked value at the end."
  }

}

const toggleSubCategory = (e) =>{

  if(subCategory.includes(e.target.value))
  {

    setSubCategory(prev=> prev.filter(item=> item !== e.target.value)) //This line removes an item from the array if it already exists.
  }
  else{

    setSubCategory(prev => [...prev, e.target.value]) //"Take the old list, keep everything in it, and add this new clicked value at the end."  
  }
}

// const toggleCategory = (e) => { ... }
// This is a function that will be called when a user clicks a checkbox or button.
// e is the event object, giving you info about what was clicked

// category.includes(e.target.value)
// Checks if the clicked category value (e.g., 'Men') is already selected.
// category is an array of selected categories in state.

// prev → this is the current state array of categories before the update.

const applyFilter = () =>{
  let productsCopy = products.slice(); // Create a copy of the products array to avoid mutating the original data.
  // We use this so we don’t accidentally modify the original products array directly.

  // Filter by Category
  if(category.length > 0){ //checks if category filete is slected if no category selcted all is shown
    productsCopy = productsCopy.filter(item => category.includes(item.category));
    // productsCopy.filter(...) loops through each product.
    // For each item, it checks if its category exists inside the category array (your selected filters).
  }

  if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

  setFilteredProducts(productsCopy);
}

// useEffect(() => {
//   setFilteredProducts(products);
// }, []) yo need vayena kina vnda filter porduct le nai yeti kunai filet xaina vane all view garni vanexa

useEffect(() => {
  applyFilter();
}, [category, subCategory]);
// It means: “Whenever category or subCategory changes, run applyFilter() again.”


// useEffect(() => {
//   console.log(subCategory)
// },[subCategory]); //to check if checckbox is working or not

// useEffect(() => {
//   console.log(category)
// },[category]); //to check if checckbox is working or not



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
              <input className="w-3" type="checkbox" value={'Men'}   onChange={toggleCategory}/> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women' } onChange={toggleCategory}  /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids' } onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Top Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'}  onChange={toggleSubCategory}/> Bottom Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winter wear
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
