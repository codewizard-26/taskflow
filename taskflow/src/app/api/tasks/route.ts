

export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "Learn Next.js",
      completed: false,
    },
    {
      id: 2,
      title: "Build TaskFlow",
      completed: false,
    },
  ]);
}
export async function POST(request:Request) {
const data = await request.json()
console.log(data)
if(!data.title){
  return Response.json({error:"Title is required"},{status:400})
}
return Response.json({message:"Task created successfully",data},{status:201})
}

export async function DELETE(request:Request) {
  const {id} = await request.json()
  console.log(id)
  return Response.json({message:"Task deleted successfully",id},{status:200})
}