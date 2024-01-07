import Image from 'next/image';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
  const products = await prisma.product.findMany({
   
  });

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} 

            <Image className='rounded-md'
            src={`/${product.image}`}
            width={30}
            height={30}
            alt='Image'
           />

            - $HKD {product.price} 
            - {product.description} 
            {/* - {product.detail.length > 0 ? product.detail[0].origin : 'No origin available'}
            - {product.detail.length > 0 ? product.detail[0].year : 'No year available'} */}

            {/* Add other properties you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
}
