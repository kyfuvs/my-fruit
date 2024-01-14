// my-fruit/src/app/fruits/[id]/page.tsx
"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface FruitDetailsProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function FruitDetails() {
  const params = useParams<{ id: string }>();

  async function fetchFruitDetails(): Promise<FruitDetailsProps | null> {
    try {
      const response = await fetch(`http://localhost:3000/api/fruit-api/${params.id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching fruit details:', error);
      return null;
    }
  }

  const [fruit, setFruit] = useState<FruitDetailsProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFruitDetails().then((data) => {
      setFruit(data);
      setLoading(false);
    });
  }, [params.id]);

  

  return (
    <div>
      <h2>Fruit Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : fruit ? (
        <div>
           <h1>{fruit.name}</h1>
           <Image className='rounded-md'
                  src={`/${fruit.image}`}
                  width={100}
                  height={100}
                  alt='Image'
              />
        </div>
      ) : (
        <p>No fruit details found for ID: {params.id}</p>
      )}
    </div>
  );
}
