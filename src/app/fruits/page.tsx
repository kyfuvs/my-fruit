"use client"
import React, {useState, useEffect} from 'react'
import FruitList from './FruitList';
import Link from 'next/link';

interface FruitsProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

async function fetchFruits(): Promise<FruitsProps[]> {
  const response = await fetch('http://localhost:3000/api/fruit-api');
  const data = await response.json();
  return data;
}

export default function Fruits() {
  const [fruits, setFruits] = useState<FruitsProps[]>([]);
  useEffect(() => {
    fetchFruits().then((data) => setFruits(data));
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 
        className='text-3xl font-bold py-3 mt-2 '>
          React入門水果店 V2
      </h1>

      <div className='grid grid-cols-3 gap-5 mt-5 px-2 '>
        {fruits.map((fruit) => (
          <Link key={fruit.id} href={`/fruits/${fruit.id}`}>
            <FruitList key={fruit.id} data={fruit} />
          </Link>
        ))}
      </div>

    </div>

   
  )
}
