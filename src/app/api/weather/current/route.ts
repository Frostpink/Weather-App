import { type NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const locationid = searchParams.get('locationid')

  if (!locationid) {
    return Response.json({ name: 'No location provided' }, { status: 400 })
  }

  const apikey = process.env.API_KEY
  if (!apikey) {
    return Response.json({ name: 'Internal error' }, { status: 500 })
  }

  const data = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationid}?apikey=${apikey}&language=en-CA`,
    {
      method: 'GET',
    }
  ).then(res => res.json())

  return Response.json(data, { status: 200 })
}
