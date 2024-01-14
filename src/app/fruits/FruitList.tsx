import Image from 'next/image';
import React from 'react'

interface FruitListProps {
    data: any; // Update the type according to your data structure
  }

export default function FruitList({ data }: FruitListProps) {
    const {name,price,image, description} = data
    console.log(data)
    return (
        <div className='border border-slate-200 shadow-lg px-5 py-5  hover:bg-slate-50 hover:scale-105'>
        <div>
          <h2 className='text-3xl font-bold '>{name}</h2>
          
          <Image className='rounded-md'
                  src={`/${image}`}
                  width={200}
                  height={200}
                  alt='Image'
              />
          <p>{`$HKD ${price}`}</p>
  
          <p>{description}</p>
        </div>
        
        
      </div>
  )
}
