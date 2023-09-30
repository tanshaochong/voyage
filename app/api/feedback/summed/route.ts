const DATA = {
  good: ['Effective Leadership', 'Communication Skills', 'Adaptability'],
  bad: ['Lack of Clear Direction', 'Communication Issues', 'Micromanagement'],
};

export async function GET(request: Request) {
  return Response.json({ data: DATA });
}
