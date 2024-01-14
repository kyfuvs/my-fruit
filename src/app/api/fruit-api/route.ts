import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(){
    try {
       const products = await prisma.product.findMany();


    return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {error:"Product -> GET() failed..."},
            {status:500}
        )
        
    }

}

// http://localhost:3000/api/fruit-api