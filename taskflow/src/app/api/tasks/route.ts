import db from '../../db/index'

export async function GET() {
  const data = await db.select().from(tasks);
  return Response.json(data)
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