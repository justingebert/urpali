import dbConnect from "@/lib/dbConnect";
import PackingList from "@/models/PackingList"

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