import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)

  return (
    <div>
      <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTION'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia rerum repudiandae sequi officiis nihil illo deleniti autem corrupti facere.
          </p>

        </div>
      </div>
    </div>
  )
}

export default LatestCollection
