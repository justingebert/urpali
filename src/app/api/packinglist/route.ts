import dbConnect from "@/lib/dbConnect";
import PackingList from "@/models/PackingList"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await dbConnect()
    const data = await request.json();

    const packingList = await PackingList.create(data)
   
    return Response.json( {packingList} )
  } catch (error:any) {
    console.error('Error creating packing list:', error);
    return new Response(JSON.stringify({message: error }), {
      status: error.status || 500,
      headers: {
        'Content-Type': 'application/json',
      },});
  }
  }

  export async function GET() {
    try {
      await dbConnect();
      const packingLists = await PackingList.find({});
      return NextResponse.json({ packingLists });
    } catch (error: any) {
      console.error('Error fetching packing lists:', error);
      return new NextResponse(JSON.stringify({ message: error.message }), {
        status: error.status || 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }