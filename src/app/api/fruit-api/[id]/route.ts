import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    req: Request, 
    {params}:{params:{id: string}}
    ){
        const id = params.id
        const fruit = await prisma.product.findUnique({
            where:{id}

        })
        // return NextResponse.json(id);
        // return NextResponse.json(post);
        const jsonString = JSON.stringify(fruit, null, 2); // Adjust the second parameter for indentation if needed

        return new Response(jsonString, {
            headers: { 'content-type': 'application/json;charset=UTF-8' },
        });

}

// http://localhost:3000/api/fruit-api/659af7bb47538cdc81baa6b5